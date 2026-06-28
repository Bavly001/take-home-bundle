import { useCallback, useMemo } from 'react'
import DeliveryIcon from '../../assets/icons/DeliveryIcon'
import { REVIEW_ORDER } from '../../constants/steps'
import { useAccordionStore } from '../../stores/useAccordionStore'
import { resolveCartItem, useCartStore } from '../../stores/useCartStore'
import { getProductById } from '../../stores/useProductStore'
import { useSystemStore } from '../../stores/useSystemStore'
import { useToastStore } from '../../stores/useToastStore'
import {
  calculateCartTotals,
  FAST_SHIPPING_DISCOUNTED_PRICE,
  FAST_SHIPPING_PRICE,
} from '../../utils/cartTotals'
import { formatPrice } from '../../utils/price'
import { saveSystemToStorage, toSavedCartItems } from '../../utils/savedSystem'
import ReviewEmptyState from './components/ReviewEmptyState'
import ReviewItem from './components/ReviewItem'
import ReviewSection from './components/ReviewSection'
import guaranteeImage from '../../assets/images/guarantee.png'
import { Button, Chip } from '@heroui/react'

const ReviewColumn = () => {
  const isCatalogReady = useSystemStore((state) => state.isCatalogReady)
  const items = useCartStore((state) => state.items)
  const expandedKeys = useAccordionStore((state) => state.expandedKeys)
  const showToast = useToastStore((state) => state.showToast)

  const resolvedItems = useMemo(
    () =>
      isCatalogReady
        ? items.filter(
            (item) => item.quantity > 0 && resolveCartItem(item) !== null
          )
        : [],
    [isCatalogReady, items]
  )

  const hasItems = resolvedItems.length > 0

  const { originalTotal, discountedTotal, savings } = useMemo(
    () => calculateCartTotals(resolvedItems),
    [resolvedItems]
  )

  const hasDiscount = savings > 0

  const categoriesWithItems = REVIEW_ORDER.filter((category) =>
    resolvedItems.some((item) => item.category === category)
  )

  const handleSaveForLater = useCallback(() => {
    const userItems = items.filter((item) => {
      if (item.quantity <= 0) return false
      const product = getProductById(item.productId)
      return product && !product.required
    })

    const expandedStepKey = expandedKeys.values().next().value as
      | string
      | undefined

    saveSystemToStorage(toSavedCartItems(userItems), expandedStepKey)
    showToast('Your items are saved successfully')
  }, [items, expandedKeys, showToast])

  return (
    <div className="relative min-h-full w-full xl:w-1/3 xl:max-w-100">
      <div className="bg-brand-subtle flex h-full max-h-[calc(100vh-40px)] w-full flex-col gap-1.25 rounded-[10px] py-3.75 pe-2.25 xl:sticky xl:top-5 xl:h-auto">
        <p className="ms-3.75 block text-[12px] font-medium tracking-[1.6px] text-slate-700 uppercase lg:hidden xl:block">
          Review
        </p>
        <div className="flex flex-col gap-2.5 p-5 pb-7.75 lg:flex-row lg:gap-13 xl:flex-col xl:gap-2.5">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1.25">
              <p className="text-base font-semibold tracking-[0.6px] text-slate-900">
                Your security system
              </p>
              <p className="text-sm/[130%] font-medium tracking-[0.6px] text-slate-900/75">
                Review your personalized protection system designed to keep what
                matters most safe.
              </p>
            </div>
            <div className="scrollbar-minimal flex max-h-[calc(100vh-400px)] flex-col gap-2.5 overflow-y-auto">
              {!isCatalogReady ? (
                <div className="flex min-h-24 items-center justify-center text-sm font-medium text-slate-900/75">
                  Loading your system…
                </div>
              ) : hasItems ? (
                <>
                  {categoriesWithItems.map((category) => (
                    <ReviewSection key={category} category={category} />
                  ))}
                  <div className="flex flex-col gap-2 border-t border-slate-300 pt-3.75">
                    <ReviewItem
                      name="Fast Shipping"
                      icon={<DeliveryIcon className="h-7.25 w-7.25" />}
                      quantity={1}
                      price={FAST_SHIPPING_PRICE}
                      priceAfterDiscount={FAST_SHIPPING_DISCOUNTED_PRICE}
                      hideQuantityControls
                    />
                  </div>
                </>
              ) : (
                <ReviewEmptyState />
              )}
            </div>
          </div>
          {hasItems && (
            <div className="flex w-full flex-col gap-3.5 lg:max-w-122.5">
              <div className="flex w-full items-center justify-between">
                <img
                  className="h-19.5 w-19.5 object-cover"
                  src={guaranteeImage}
                  alt="guarantee-image"
                />
                <div className="flex flex-col items-end gap-2">
                  {isCatalogReady && hasItems && (
                    <Chip className="bg-brand h-fit w-fit rounded-md px-2 py-1.25 text-[12px]/[100%] font-medium tracking-[-5%] text-white">
                      as low as ${(discountedTotal / 12).toFixed(2)}/mo
                    </Chip>
                  )}
                  <div className="flex items-center gap-2">
                    {isCatalogReady && hasDiscount && (
                      <p className="text-[18px]/[20px] font-medium tracking-[0.25%] text-slate-500 line-through">
                        ${originalTotal.toFixed(2)}
                      </p>
                    )}
                    <p className="text-brand text-[24px]/[32px] font-bold tracking-[-0.13%]">
                      {isCatalogReady ? `$${discountedTotal.toFixed(2)}` : '—'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                {isCatalogReady && hasDiscount && (
                  <p className="text-accent mb-1 text-center text-[12px]/[100%] font-semibold tracking-[-0.06px]">
                    Congrats! You&apos;re saving {formatPrice(savings)} on your
                    security bundle!
                  </p>
                )}
                <Button className="bg-brand mb-2 h-fit w-full rounded-lg px-4 py-3.25 text-[17px]/[100%] text-white">
                  Checkout
                </Button>
                <button
                  type="button"
                  className="cursor-pointer text-center text-[14px]/[120%] font-medium tracking-[-0.02px] text-slate-700 italic underline hover:no-underline"
                  onClick={handleSaveForLater}
                >
                  Save my system for later
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewColumn
