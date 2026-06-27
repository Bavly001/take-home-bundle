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
      className="flex min-h-43.25 flex-col gap-y-4.75 xl:flex-row"
    >
      <div className="flex h-full items-center justify-center">
        <div className="relative flex h-full max-h-34.25 w-full min-w-25 items-center justify-center xl:me-4.75 xl:w-auto">
          {product.discount && (
            <Chip className="bg-brand absolute top-0 left-0 rounded-full px-2 py-1 text-xs font-medium text-white">
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
          <h3 className="text-[16px] font-bold text-slate-900">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm/[130%] tracking-[0.6px] text-slate-900/75">
            {product.description}{' '}
            <a href="#" className="text-blue underline hover:no-underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="scrollbar-hide flex max-w-full [scrollbar-width:none] items-center gap-1.5 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <Chip className="border-accent bg-accent-light/4 flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] px-0.75 py-px">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-xs font-medium text-slate-900">White</span>
          </Chip>
          <Chip className="flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] border-slate-400 bg-transparent px-0.75 py-px transition-all duration-300 hover:bg-slate-100">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-xs font-medium text-slate-900">White</span>
          </Chip>
          <Chip className="flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] border-slate-400 bg-transparent px-0.75 py-px transition-all duration-300 hover:bg-slate-100">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-xs font-medium text-slate-900">White</span>
          </Chip>
        </div>
        <div className="flex max-h-8.75 w-full items-center justify-between gap-2">
          <div className="flex w-20 items-center justify-between px-[5.5px]">
            <PlusMinusButton
              type="minus"
              isDisabled={count === 0}
              variant="dark"
              onPress={() => setCount((prev) => prev - 1)}
            />
            <span className="text-sm font-medium text-slate-900">{count}</span>
            <PlusMinusButton
              type="plus"
              variant="dark"
              onPress={() => setCount((prev) => prev + 1)}
            />
          </div>
          <div className="flex items-end gap-0.75 text-[16px] xl:flex-col">
            {product.discount && (
              <p className="text-red leading-4 tracking-[0.6px] line-through">
                ${product.price}
              </p>
            )}
            <p className="text-slate-550 leading-4 tracking-[0.6px]">
              ${product.discount ? product.priceAfterDiscount : product.price}
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  )
}

export default ProductCard
