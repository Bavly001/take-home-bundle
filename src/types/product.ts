export type ProductCategory = 'cameras' | 'plans' | 'sensors' | 'protection'

export interface ProductVariant {
  id: number
  name: string
  img: string
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  priceAfterDiscount?: number
  discount?: number
  image?: string
  variants?: ProductVariant[]
  category: ProductCategory
}

export interface CartItem {
  productId: number
  variantId?: number
  category: ProductCategory
  quantity: number
}
