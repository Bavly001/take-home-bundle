import { Chip } from '@heroui/react'
import CustomCard from './CustomCard'
import PlusMinusButton from '../../PlusMinusButton'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  priceAfterDiscount?: number
  discount?: number
  image: string
}

const ProductCard = ({ product }: { product: Product }) => {
  const [count, setCount] = useState(0)
  return (
    <CustomCard
      isActive={count > 0}
      className="flex flex-col gap-y-4.75 xl:flex-row min-h-43.25"
    >
      <div className="flex h-full items-center justify-center">
        <div className="relative xl:me-4.75 flex h-full max-h-34.25 w-full min-w-25 items-center justify-center xl:w-auto">
          {product.discount && (
            <Chip className="bg-primary absolute top-0 left-0 rounded-full px-2 py-1 text-xs font-medium text-white">
              Save {product.discount}%
            </Chip>
          )}
          <img
            src={product.image}
            alt="Product"
            className="h-full w-full object-contain object-right xl:object-cover"
          />
        </div>
      </div>
      <div className="flex h-fit flex-col gap-2.5">
        <div className="flex flex-col gap-2">
          <h3 className="text-dark-grey text-[16px] font-bold">
            {product.name}
          </h3>
          <p className="text-dark-grey/75 line-clamp-2 text-sm/[130%] tracking-[0.6px]">
            {product.description}{' '}
            <a href="#" className="text-blue underline hover:no-underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="scrollbar-hide flex max-w-full [scrollbar-width:none] items-center gap-1.5 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <Chip className="border-green bg-light-green/4 flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] px-0.75 py-px">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-dark-grey text-xs font-medium">White</span>
          </Chip>
          <Chip className="border-green bg-light-green/4 flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] px-0.75 py-px">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-dark-grey text-xs font-medium">White</span>
          </Chip>
          <Chip className="border-green bg-light-green/4 flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] px-0.75 py-px">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-dark-grey text-xs font-medium">White</span>
          </Chip>
        </div>
        <div className="flex max-h-8.75 w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <PlusMinusButton
              type="minus"
              isDisabled={count === 0}
              variant="dark"
              onPress={() => setCount((prev) => prev - 1)}
            />
            <span className="text-dark-grey text-sm font-medium">{count}</span>
            <PlusMinusButton
              type="plus"
              variant="dark"
              onPress={() => setCount((prev) => prev + 1)}
            />
          </div>
          <div className="flex items-end gap-0.75 text-[16px] xl:flex-col">
            {product.discount && (
              <p className="text-red tracking-[0.6px] line-through">
                ${product.price}
              </p>
            )}
            <p className="text-price-grey tracking-[0.6px]">
              $
              {product.discount
                ? product.priceAfterDiscount
                : product.price}
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  )
}

export default ProductCard
