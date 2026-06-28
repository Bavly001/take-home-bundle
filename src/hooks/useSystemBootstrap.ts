import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getAllProducts } from '../api/products'
import { useCartStore } from '../stores/useCartStore'
import { getProductById, useProductStore } from '../stores/useProductStore'
import { useSystemStore } from '../stores/useSystemStore'
import {
  loadSystemFromStorage,
  toCartItems,
  type SavedCartItem,
} from '../utils/savedSystem'

const sanitizeSavedItems = (items: SavedCartItem[]): SavedCartItem[] =>
  items.filter((item) => {
    const product = getProductById(item.productId)
    if (!product || product.required) return false

    if (item.variantId != null) {
      return product.variants?.some((variant) => variant.id === item.variantId)
    }

    return true
  })

export const useSystemBootstrap = () => {
  const upsertProducts = useProductStore((state) => state.upsertProducts)
  const restoreItems = useCartStore((state) => state.restoreItems)
  const setCatalogReady = useSystemStore((state) => state.setCatalogReady)
  const isCatalogReady = useSystemStore((state) => state.isCatalogReady)

  const query = useQuery({
    queryKey: ['products', 'all'],
    queryFn: getAllProducts,
  })

  useEffect(() => {
    if (!query.data) return

    upsertProducts(query.data)

    const saved = loadSystemFromStorage()
    if (saved?.items.length) {
      const validItems = sanitizeSavedItems(saved.items)
      if (validItems.length) {
        restoreItems(toCartItems(validItems))
      }
    }

    setCatalogReady(true)
  }, [query.data, upsertProducts, restoreItems, setCatalogReady])

  useEffect(() => {
    if (query.isError) {
      setCatalogReady(true)
    }
  }, [query.isError, setCatalogReady])

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isCatalogReady,
  }
}
