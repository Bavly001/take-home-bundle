import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '../api/products'
import { useProductStore } from '../stores/useProductStore'
import type { ProductCategory } from '../types/product'

export const useProducts = (category: ProductCategory) => {
  const upsertProducts = useProductStore((state) => state.upsertProducts)

  const query = useQuery({
    queryKey: ['products', category],
    queryFn: () => getProductsByCategory(category),
  })

  useEffect(() => {
    if (query.data) {
      upsertProducts(query.data)
    }
  }, [query.data, upsertProducts])

  return query
}
