import { Button } from '@heroui/react'
import { CAMERAS } from '../../../data/products'
import ProductCard from '../components/ProductCard'

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
