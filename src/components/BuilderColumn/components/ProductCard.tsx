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
      <div className="relative flex h-full max-h-34.25 min-w-25 items-center justify-center me-4.75">
        <Chip className="bg-primary absolute top-0 left-0 rounded-full px-2 py-1 text-xs font-medium text-white">
          Save {product.discount}%
        </Chip>
        <img
          src={product.image}
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-full flex-col gap-2">
        <h3 className="text-[16px] font-bold text-dark-grey">{product.name}</h3>
        <p className="text-sm text-dark-grey/75">
          {product.description}{' '}
          <a href="#" className="text-blue underline hover:no-underline">
            Learn more
          </a>
        </p>
      </div>
    </CustomCard>
  )
}

export default ProductCard
