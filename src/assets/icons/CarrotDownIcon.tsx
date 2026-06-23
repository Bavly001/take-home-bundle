import React from 'react'
import type CustomIconsProps from '../../types/CustomIconsProps'

const CarrotDownIcon: React.FC<CustomIconsProps> = ({
  color = '#4E2FD2',
  size = 12,
  ...props
}) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 12 12" {...props}>
      <path
        d="M6.40682 9.43039C6.20741 9.70956 5.7925 9.70956 5.59309 9.43038L1.56472 3.79062C1.32834 3.45968 1.5649 3 1.97159 3L10.0284 3C10.4351 3 10.6716 3.45969 10.4353 3.79062L6.40682 9.43039Z"
        fill={color}
      />
    </svg>
  )
}

export default CarrotDownIcon
