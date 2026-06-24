const CustomCard = ({
  isActive = false,
  children,
}: {
  isActive: boolean
  children: React.ReactNode
}) => {
  return (
    <div
      className={`hover:shadow-lg flex flex-row rounded-[10px] border-2 bg-white p-2.75 transition-all duration-300 ${isActive ? 'border-primary/70' : 'border-transparent'}`}
    >
      {children}
    </div>
  )
}

export default CustomCard
