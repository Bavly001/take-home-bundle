export const formatPrice = (value: number) =>
  value === 0 ? 'Free' : `$${value.toFixed(2)}`
