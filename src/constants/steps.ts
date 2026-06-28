import type { ProductCategory } from '../types/product'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  cameras: 'Cameras',
  plans: 'Plan',
  sensors: 'Sensors',
  protection: 'Accessories',
}

// Order of sections in the review column (differs from the builder step order).
export const REVIEW_ORDER: ProductCategory[] = [
  'cameras',
  'sensors',
  'protection',
  'plans',
]

export const BUILDER_STEPS: {
  key: string
  category: ProductCategory
}[] = [
  { key: 'step-1', category: 'cameras' },
  { key: 'step-2', category: 'plans' },
  { key: 'step-3', category: 'sensors' },
  { key: 'step-4', category: 'protection' },
]

export const FIRST_STEP_KEY = 'step-1'
