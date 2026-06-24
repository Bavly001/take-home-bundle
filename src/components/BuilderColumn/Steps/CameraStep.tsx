import ProductCard from '../components/ProductCard'

const CAMERAS = [
  {
    id: 1,
    name: 'Camera 1',
    description: 'Camera 1 description',
    price: 100,
    discount: 20,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 2,
    name: 'Camera 2',
    description: 'Camera 2 description',
    price: 200,
    discount: 30,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 3,
    name: 'Camera 3',
    description: 'Camera 3 description',
    price: 300,
    discount: 40,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 4,
    name: 'Camera 4',
    description: 'Camera 4 description',
    price: 400,
    discount: 50,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
  {
    id: 5,
    name: 'Camera 5',
    description: 'Camera 5 description',
    price: 500,
    discount: 60,
    image:
      'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990',
  },
]

const CameraStep = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3.75 *:w-[calc(50%-7.5px)]">
      {CAMERAS.map((camera) => (
        <ProductCard key={camera.id} isActive={false} product={camera} />
      ))}
    </div>
  )
}

export default CameraStep
