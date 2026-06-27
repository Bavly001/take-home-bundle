import { Button } from '@heroui/react'
import ProductCard from '../components/ProductCard'

const CAMERAS = [
  {
    id: 1,
    name: 'Camera 1',
    description: 'Camera 1 description',
    price: 100,
    priceAfterDiscount: 80,
    discount: 20,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 2,
    name: 'Camera 2',
    description: 'Camera 2 description',
    price: 200,
    priceAfterDiscount: 140,
    discount: 30,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 3,
    name: 'Camera 3',
    description: 'Camera 3 description',
    price: 300,
    priceAfterDiscount: 240,
    discount: 40,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 4,
    name: 'Camera 4',
    description: 'Camera 4 description',
    price: 400,
    priceAfterDiscount: 300,
    discount: 50,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 5,
    name: 'Camera 5',
    description:
      'Camera 5 description Camera 5 description Camera 5 description Camera 5 description Camera 5 description Camera 5 description',
    price: 500,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
]

const CameraStep = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3.75">
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-3.75 md:grid-cols-3 lg:grid-cols-5 xl:flex xl:flex-wrap xl:justify-center xl:*:w-[calc(50%-7.5px)]">
        {CAMERAS.map((camera) => (
          <ProductCard key={camera.id} product={camera} />
        ))}
      </div>
      <Button
        variant="outline"
        className="border-brand text-brand rounded-[7px] border px-6 py-1.25 text-[18px] font-bold"
        onPress={() => {}}
      >
        Next: Choose your plan
      </Button>
    </div>
  )
}

export default CameraStep
