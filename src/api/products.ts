import type { Product, ProductCategory } from '../types/product'

export const API_URL = import.meta.env.VITE_API_URL

const request = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}) for ${path}`)
  }
  return res.json() as Promise<T>
}

export const getProductsByCategory = (category: ProductCategory) =>
  request<Product[]>(`/api/${category}`)

export const getAllProducts = () => request<Product[]>('/api/products')
