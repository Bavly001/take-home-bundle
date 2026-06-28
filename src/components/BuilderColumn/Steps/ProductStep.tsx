import { Button } from '@heroui/react'
import { useProducts } from '../../../hooks/useProducts'
import { useAccordionStore } from '../../../stores/useAccordionStore'
import type { ProductCategory } from '../../../types/product'
import ProductCard from '../components/ProductCard'

interface ProductStepProps {
  category: ProductCategory
  nextStepKey?: string
  nextLabel?: string
}

const ProductStep = ({ category, nextStepKey, nextLabel }: ProductStepProps) => {
  const { data: products, isLoading, isError, refetch } = useProducts(category)
  const openStep = useAccordionStore((state) => state.openStep)

  if (isLoading) {
    return (
      <div className="flex h-43.25 w-full items-center justify-center text-sm text-slate-900/75">
        Loading…
      </div>
    )
  }

  if (isError || !products) {
    return (
      <div className="flex h-43.25 w-full flex-col items-center justify-center gap-3 text-sm text-slate-900/75">
        <p>Couldn’t load products. Is the API running?</p>
        <Button
          variant="outline"
          className="border-brand text-brand rounded-[7px] border px-6 py-1.25 font-bold"
          onPress={() => refetch()}
        >
          Retry
        </Button>
      </div>
    )
  }

  // Required products (e.g. the Wyze Sense Hub) are auto-added to the cart and
  // never shown as a selectable card.
  const visibleProducts = products.filter((product) => !product.required)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3.75">
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-3.75 md:grid-cols-3 lg:grid-cols-5 xl:flex xl:flex-wrap xl:justify-center xl:*:w-[calc(50%-7.5px)]">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {nextStepKey && nextLabel && (
        <Button
          variant="outline"
          className="border-brand text-brand rounded-[7px] border px-6 py-1.25 text-[18px] font-bold"
          onPress={() => openStep(nextStepKey)}
        >
          {nextLabel}
        </Button>
      )}
    </div>
  )
}

export default ProductStep
