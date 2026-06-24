import { Chip } from '@heroui/react'
import CustomCard from './CustomCard'

interface Product {
  id: number
  name: string
  description: string
  price: number
  discount: number
  image: string
}

const ProductCard = ({
  isActive = false,
  product,
}: {
  isActive: boolean
  product: Product
}) => {
  return (
    <CustomCard isActive={isActive}>
      <div className="flex h-full items-center justify-center">
        <div className="relative me-4.75 flex h-full max-h-34.25 min-w-25 items-center justify-center">
          <Chip className="bg-primary absolute top-0 left-0 rounded-full px-2 py-1 text-xs font-medium text-white">
            Save {product.discount}%
          </Chip>
          <img
            src={product.image}
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-fit flex-col gap-2.5">
        <div className="flex flex-col gap-2">
          <h3 className="text-dark-grey text-[16px] font-bold">
            {product.name}
          </h3>
          <p className="text-dark-grey/75 text-sm">
            {product.description}{' '}
            <a href="#" className="text-blue underline hover:no-underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Chip className="border-green bg-light-green/4 flex h-6.5 w-16.25 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-[0.5px] px-0.75 py-px">
            <img
              src={product.image}
              alt="White"
              className="h-6 w-6 object-cover mix-blend-multiply"
            />
            <span className="text-dark-grey text-xs font-medium">White</span>
          </Chip>
        </div>
        <div></div>
      </div>
    </CustomCard>
  )
}

export default ProductCard
