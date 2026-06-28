import type { CartItem, ProductCategory } from '../types/product'

const STORAGE_KEY = 'take-home-bundle-saved-system'
const STORAGE_VERSION = 1

export interface SavedCartItem {
  productId: number
  category: ProductCategory
  quantity: number
  variantId?: number
}

export interface SavedSystem {
  version: number
  items: SavedCartItem[]
  expandedStepKey?: string
}

export const saveSystemToStorage = (
  items: SavedCartItem[],
  expandedStepKey?: string,
) => {
  const payload: SavedSystem = {
    version: STORAGE_VERSION,
    items,
    expandedStepKey,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

export const loadSystemFromStorage = (): SavedSystem | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw) as SavedSystem
    if (parsed.version !== STORAGE_VERSION || !Array.isArray(parsed.items)) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}

export const toSavedCartItems = (items: CartItem[]): SavedCartItem[] =>
  items.map(({ productId, category, quantity, variantId }) => ({
    productId,
    category,
    quantity,
    ...(variantId !== undefined ? { variantId } : {}),
  }))

export const toCartItems = (items: SavedCartItem[]): CartItem[] =>
  items.map(({ productId, category, quantity, variantId }) => ({
    productId,
    category,
    quantity,
    variantId,
  }))
