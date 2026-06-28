import { create } from 'zustand'
import { getProductById, useProductStore } from './useProductStore'
import type { CartItem, Product, ProductCategory } from '../types/product'

interface SetQuantityParams {
  productId: number
  category: ProductCategory
  quantity: number
  variantId?: number
}

interface SelectExclusiveParams {
  productId: number
  category: ProductCategory
  variantId?: number
}

interface CartStore {
  items: CartItem[]
  setQuantity: (params: SetQuantityParams) => void
  selectExclusive: (params: SelectExclusiveParams) => void
  restoreItems: (items: CartItem[]) => void
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

// Required products (e.g. the Wyze Sense Hub) are auto-added to the cart while
// any non-required item of the same category is selected, and removed once none
// remain. They cannot be selected or adjusted directly by the user.
const syncRequiredItems = (items: CartItem[]): CartItem[] => {
  const requiredProducts = Object.values(
    useProductStore.getState().productsById
  ).filter((product) => product.required)

  let next = items

  for (const required of requiredProducts) {
    const hasUserItemInCategory = next.some(
      (item) =>
        item.category === required.category &&
        item.quantity > 0 &&
        item.productId !== required.id
    )

    const index = next.findIndex(
      (item) =>
        item.productId === required.id &&
        item.category === required.category &&
        item.variantId === undefined
    )

    if (hasUserItemInCategory && index === -1) {
      next = [
        ...next,
        { productId: required.id, category: required.category, quantity: 1 },
      ]
    } else if (!hasUserItemInCategory && index !== -1) {
      next = next.filter((_, i) => i !== index)
    }
  }

  return next
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  setQuantity: ({ productId, category, quantity, variantId }) => {
    set((state) => {
      const existingIndex = state.items.findIndex((item) =>
        matchesCartLine(item, productId, category, variantId)
      )

      let items: CartItem[]
      if (quantity <= 0) {
        items =
          existingIndex === -1
            ? state.items
            : state.items.filter((_, index) => index !== existingIndex)
      } else if (existingIndex === -1) {
        items = [...state.items, { productId, category, quantity, variantId }]
      } else {
        items = state.items.map((item, index) =>
          index === existingIndex ? { ...item, quantity } : item
        )
      }

      return { items: syncRequiredItems(items) }
    })
  },

  // Single-select categories (e.g. plans): selecting one item replaces any
  // other item in the same category.
  selectExclusive: ({ productId, category, variantId }) => {
    set((state) => {
      const items = [
        ...state.items.filter((item) => item.category !== category),
        { productId, category, quantity: 1, variantId },
      ]
      return { items: syncRequiredItems(items) }
    })
  },

  restoreItems: (items) => {
    set({ items: syncRequiredItems(items) })
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
