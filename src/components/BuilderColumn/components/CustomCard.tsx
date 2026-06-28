const CustomCard = ({
  isActive = false,
  children,
  className,
  onClick,
}: {
  className?: string
  isActive: boolean
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[10px] border-2 bg-white p-2.75 transition-all duration-300 hover:shadow-lg ${isActive ? 'border-brand/70' : 'border-transparent'} ${onClick ? 'cursor-pointer' : ''} ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export default CustomCard
