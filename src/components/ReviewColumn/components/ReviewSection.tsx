import { useMemo } from 'react'
import type { ProductCategory } from '../../../types/product'
import { CATEGORY_LABELS } from '../../../constants/steps'
import {
  resolveCartItem,
  useCartStore,
  getCartLineKey,
} from '../../../stores/useCartStore'
import ReviewItem from './ReviewItem'

const ReviewSection = ({ category }: { category: ProductCategory }) => {
  const allItems = useCartStore((state) => state.items)
  const items = useMemo(
    () =>
      allItems.filter(
        (item) => item.category === category && item.quantity > 0
      ),
    [allItems, category]
  )
  const setQuantity = useCartStore((state) => state.setQuantity)

  if (items.length === 0) return null

  return (
    <div className="flex flex-col gap-2 border-t border-slate-300 pt-3.75">
      <p className="text-slate-450 text-[12px] tracking-[3%] uppercase">
        {CATEGORY_LABELS[category]}
      </p>
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const resolved = resolveCartItem(item)
          if (!resolved) return null

          const { display, product } = resolved

          return (
            <ReviewItem
              key={getCartLineKey(item)}
              name={display.name}
              image={display.image}
              variantName={display.variantName}
              quantity={display.quantity}
              price={display.price}
              priceAfterDiscount={display.priceAfterDiscount}
              isRequired={product.required}
              hideQuantityControls={category === 'plans'}
              onIncrement={() =>
                setQuantity({
                  productId: item.productId,
                  category: item.category,
                  quantity: item.quantity + 1,
                  variantId: item.variantId,
                })
              }
              onDecrement={() =>
                setQuantity({
                  productId: item.productId,
                  category: item.category,
                  quantity: Math.max(0, item.quantity - 1),
                  variantId: item.variantId,
                })
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default ReviewSection
