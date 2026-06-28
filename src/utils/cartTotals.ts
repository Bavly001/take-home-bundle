import { getProductById } from '../stores/useProductStore'
import type { CartItem } from '../types/product'

export const FAST_SHIPPING_PRICE = 5.99
export const FAST_SHIPPING_DISCOUNTED_PRICE = 0

export interface CartTotals {
  originalTotal: number
  discountedTotal: number
  savings: number
  hasItems: boolean
}

export const calculateCartTotals = (items: CartItem[]): CartTotals => {
  let originalTotal = 0
  let discountedTotal = 0

  for (const item of items) {
    if (item.quantity <= 0) continue

    const product = getProductById(item.productId)
    if (!product) continue

    const unitDiscounted = product.priceAfterDiscount ?? product.price

    originalTotal += product.price * item.quantity
    discountedTotal += unitDiscounted * item.quantity
  }

  const hasItems = items.some((item) => item.quantity > 0)

  if (hasItems) {
    originalTotal += FAST_SHIPPING_PRICE
    discountedTotal += FAST_SHIPPING_DISCOUNTED_PRICE
  }

  return {
    originalTotal,
    discountedTotal,
    savings: originalTotal - discountedTotal,
    hasItems,
  }
}
