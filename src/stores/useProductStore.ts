import { create } from 'zustand'
import type { Product } from '../types/product'

interface ProductStore {
  productsById: Record<number, Product>
  upsertProducts: (products: Product[]) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  productsById: {},
  upsertProducts: (products) =>
    set((state) => {
      const productsById = { ...state.productsById }
      for (const product of products) {
        productsById[product.id] = product
      }
      return { productsById }
    }),
}))

export const getProductById = (productId: number): Product | undefined =>
  useProductStore.getState().productsById[productId]
