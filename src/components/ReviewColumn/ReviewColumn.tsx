import DeliveryIcon from '../../assets/icons/DeliveryIcon'
import { REVIEW_ORDER } from '../../constants/steps'
import { useCartStore } from '../../stores/useCartStore'
import ReviewEmptyState from './components/ReviewEmptyState'
import ReviewItem from './components/ReviewItem'
import ReviewSection from './components/ReviewSection'

const ReviewColumn = () => {
  const items = useCartStore((state) => state.items)
  const hasItems = items.some((item) => item.quantity > 0)
  const categoriesWithItems = REVIEW_ORDER.filter((category) =>
    items.some((item) => item.category === category && item.quantity > 0)
  )

  return (
    <div className="relative min-h-full w-full xl:w-1/3 xl:max-w-100">
      <div className="bg-brand-subtle top-5 flex h-full w-full flex-col gap-1.25 rounded-[10px] py-3.75 pe-2.25 xl:sticky xl:h-auto">
        <p className="ms-3.75 text-[12px] font-medium tracking-[1.6px] text-slate-700 uppercase">
          Review
        </p>
        <div className="flex flex-col gap-2.5 p-5 pb-7.75">
          <div className="flex flex-col gap-1.25">
            <p className="text-base font-semibold tracking-[0.6px] text-slate-900">
              Your security system
            </p>
            <p className="text-sm/[130%] font-medium tracking-[0.6px] text-slate-900/75">
              Review your personalized protection system designed to keep what
              matters most safe.
            </p>
          </div>
          {hasItems ? (
            <>
              {categoriesWithItems.map((category) => (
                <ReviewSection key={category} category={category} />
              ))}
              <div className="flex flex-col gap-2 border-t border-slate-300 pt-3.75">
                <ReviewItem
                  name="Fast Shipping"
                  icon={<DeliveryIcon className="h-7.25 w-7.25" />}
                  quantity={1}
                  price={5.99}
                  priceAfterDiscount={0}
                  hideQuantityControls
                  onIncrement={() => {}}
                  onDecrement={() => {}}
                />
              </div>
            </>
          ) : (
            <ReviewEmptyState />
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewColumn
