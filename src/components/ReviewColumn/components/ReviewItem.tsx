import { formatPrice } from '../../../utils/price'
import PlusMinusButton from '../../PlusMinusButton'

interface ReviewItemProps {
  name: string
  image?: string
  icon?: React.ReactNode
  imageAlt?: string
  variantName?: string
  quantity: number
  price: number
  priceAfterDiscount?: number
  isRequired?: boolean
  hideQuantityControls?: boolean
  onIncrement: () => void
  onDecrement: () => void
}

const ReviewItem = ({
  name,
  image,
  icon,
  imageAlt,
  variantName,
  quantity,
  price,
  priceAfterDiscount,
  isRequired = false,
  hideQuantityControls = false,
  onIncrement,
  onDecrement,
}: ReviewItemProps) => {
  const hasDiscount = priceAfterDiscount != null

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 items-center justify-center gap-3">
        {icon ? (
          <div className="flex h-10.25 w-10.25 items-center justify-center rounded-[5px] bg-white">
            {icon}
          </div>
        ) : (
          <img
            src={image}
            alt={imageAlt ?? name}
            className="h-10.25 w-10.25 rounded-[5px] object-cover"
          />
        )}
        <p className="flex-1 text-[14px] font-medium tracking-[0.5%] text-slate-950">
          {name} {isRequired ? '(Required)' : ''}
          {variantName ? (
            <span className="text-[10px] text-slate-500 italic">
              ({variantName})
            </span>
          ) : (
            ''
          )}
        </p>
        {!hideQuantityControls && (
          <div className="flex w-18 items-center justify-between py-1">
            <PlusMinusButton
              type="minus"
              variant="light"
              isDisabled={isRequired || quantity === 0}
              onPress={onDecrement}
            />
            <span className="text-sm font-medium text-slate-900">
              {quantity}
            </span>
            <PlusMinusButton
              type="plus"
              variant="light"
              isDisabled={isRequired}
              onPress={onIncrement}
            />
          </div>
        )}
      </div>
      <div
        className={`flex flex-col items-end ${hasDiscount ? '' : 'justify-center'}`}
      >
        {hasDiscount && (
          <p className="text-[14px] leading-4 font-medium tracking-[0.5%] text-slate-500 line-through">
            ${price.toFixed(2)}
          </p>
        )}
        <p className="text-brand text-[14px] leading-4 font-bold tracking-[0.5%]">
          {formatPrice(hasDiscount ? priceAfterDiscount : price)}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
