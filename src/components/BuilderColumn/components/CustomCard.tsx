const CustomCard = ({
  isActive = false,
  children,
}: {
  isActive: boolean
  children: React.ReactNode
}) => {
  return (
    <div
      className={`flex flex-row rounded-[10px] border-2 bg-white p-2.75 transition-all duration-300 hover:shadow-lg ${isActive ? 'border-primary/70' : 'border-transparent'}`}
    >
      {children}
    </div>
  )
}

export default CustomCard
