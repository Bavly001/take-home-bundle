import type { Product } from '../types/product'

const CAMERA_IMAGE =
  'https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990'

export const CAMERAS: Product[] = [
  {
    id: 1,
    name: 'Camera 1',
    description: 'Camera 1 description',
    price: 100,
    priceAfterDiscount: 80,
    discount: 20,
    category: 'cameras',
    variants: [
      { id: 1, name: 'White', img: CAMERA_IMAGE },
      { id: 2, name: 'Black', img: CAMERA_IMAGE },
      { id: 3, name: 'Grey', img: CAMERA_IMAGE },
    ],
  },
  {
    id: 2,
    name: 'Camera 2',
    description: 'Camera 2 description',
    price: 200,
    priceAfterDiscount: 140,
    discount: 30,
    category: 'cameras',
    variants: [
      { id: 1, name: 'White', img: CAMERA_IMAGE },
      { id: 2, name: 'Black', img: CAMERA_IMAGE },
    ],
  },
  {
    id: 3,
    name: 'Camera 3',
    description: 'Camera 3 description',
    price: 300,
    priceAfterDiscount: 240,
    discount: 40,
    category: 'cameras',
    variants: [
      { id: 1, name: 'White', img: CAMERA_IMAGE },
      { id: 2, name: 'Black', img: CAMERA_IMAGE },
    ],
  },
  {
    id: 4,
    name: 'Camera 4',
    description: 'Camera 4 description',
    price: 400,
    priceAfterDiscount: 300,
    discount: 50,
    category: 'cameras',
    image: CAMERA_IMAGE,
  },
  {
    id: 5,
    name: 'Camera 5',
    description:
      'Camera 5 description Camera 5 description Camera 5 description Camera 5 description Camera 5 description Camera 5 description',
    price: 500,
    category: 'cameras',
    image: CAMERA_IMAGE,
  },
]

export const ALL_PRODUCTS: Product[] = [...CAMERAS]

export const getProductById = (productId: number) =>
  ALL_PRODUCTS.find((product) => product.id === productId)
