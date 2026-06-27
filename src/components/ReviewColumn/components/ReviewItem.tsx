import PlusMinusButton from '../../PlusMinusButton'

interface ReviewItemProps {
  name: string
  image: string
  imageAlt?: string
  variantName?: string
  quantity: number
  price: number
  priceAfterDiscount?: number
  onIncrement: () => void
  onDecrement: () => void
}

const ReviewItem = ({
  name,
  image,
  imageAlt,
  variantName,
  quantity,
  price,
  priceAfterDiscount,
  onIncrement,
  onDecrement,
}: ReviewItemProps) => {
  const hasDiscount = priceAfterDiscount != null

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 items-center justify-center gap-3">
        <img
          src={image}
          alt={imageAlt ?? name}
          className="h-10.25 w-10.25 rounded-[5px] object-cover"
        />
        <p className="flex-1 text-[14px] font-medium tracking-[0.5%] text-slate-950">
          {name}{' '}
          {variantName ? (
            <span className="text-[10px] text-slate-500 italic">
              ({variantName})
            </span>
          ) : (
            ''
          )}
        </p>
        <div className="flex w-18 items-center justify-between py-1">
          <PlusMinusButton
            type="minus"
            variant="light"
            isDisabled={quantity === 0}
            onPress={onDecrement}
          />
          <span className="text-sm font-medium text-slate-900">{quantity}</span>
          <PlusMinusButton type="plus" variant="light" onPress={onIncrement} />
        </div>
      </div>
      <div className="flex flex-col items-end">
        {hasDiscount && (
          <p className="text-[14px] leading-4 font-medium tracking-[0.5%] text-slate-500 line-through">
            ${price.toFixed(2)}
          </p>
        )}
        <p className="text-brand text-[14px] leading-4 font-bold tracking-[0.5%]">
          ${(hasDiscount ? priceAfterDiscount : price).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
