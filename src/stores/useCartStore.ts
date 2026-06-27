import { create } from 'zustand'
import { getProductById } from '../data/products'
import type { CartItem, Product, ProductCategory } from '../types/product'

interface SetQuantityParams {
  productId: number
  category: ProductCategory
  quantity: number
  variantId?: number
}

interface CartStore {
  items: CartItem[]
  setQuantity: (params: SetQuantityParams) => void
  getItemsByCategory: (category: ProductCategory) => CartItem[]
  getSelectedCountByCategory: (category: ProductCategory) => number
  getTotalSelectedCount: () => number
}

export const matchesCartLine = (
  item: CartItem,
  productId: number,
  category: ProductCategory,
  variantId?: number
) =>
  item.productId === productId &&
  item.category === category &&
  item.variantId === variantId

export const getCartLineKey = (item: CartItem) =>
  `${item.category}-${item.productId}-${item.variantId ?? 'base'}`

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  setQuantity: ({ productId, category, quantity, variantId }) => {
    set((state) => {
      const existingIndex = state.items.findIndex((item) =>
        matchesCartLine(item, productId, category, variantId)
      )

      if (quantity <= 0) {
        if (existingIndex === -1) return state
        return {
          items: state.items.filter((_, index) => index !== existingIndex),
        }
      }

      if (existingIndex === -1) {
        return {
          items: [...state.items, { productId, category, quantity, variantId }],
        }
      }

      const updatedItems = [...state.items]
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity,
      }
      return { items: updatedItems }
    })
  },

  getItemsByCategory: (category) =>
    get().items.filter(
      (item) => item.category === category && item.quantity > 0
    ),

  getSelectedCountByCategory: (category) =>
    get()
      .items.filter((item) => item.category === category)
      .reduce((total, item) => total + item.quantity, 0),

  getTotalSelectedCount: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}))

export const getCartItemDisplay = (item: CartItem, product: Product) => {
  const variant = product.variants?.find((entry) => entry.id === item.variantId)
  const image = variant?.img ?? product.image ?? ''

  return {
    name: product.name,
    image,
    variantName: variant?.name,
    price: product.price,
    priceAfterDiscount: product.priceAfterDiscount,
    quantity: item.quantity,
  }
}

export const resolveCartItem = (item: CartItem) => {
  const product = getProductById(item.productId)
  if (!product) return null
  return { item, product, display: getCartItemDisplay(item, product) }
}
