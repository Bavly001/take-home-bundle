import { Button } from '@heroui/react'
import MinusIcon from '../assets/icons/MinusIcon'
import PlusIcon from '../assets/icons/PlusIcon'

const PlusMinusButton = ({
  type,
  isDisabled = false,
  variant,
  onPress,
}: {
  type: 'plus' | 'minus'
  isDisabled?: boolean
  variant: 'light' | 'dark'
  onPress: () => void
}) => {
  const className =
    variant === 'dark'
      ? 'text-slate-600 border-slate-50 bg-slate-50 disabled:text-slate-300 disabled:bg-white disabled:border-slate-300'
      : 'text-slate-550 border-white bg-white disabled:text-slate-550 disabled:bg-slate-100 disabled:border-slate-300'
  return (
    <Button
      isIconOnly
      className={`flex h-5 w-5 items-center justify-center rounded-sm! transition-all duration-300! border-2! [&_svg]:h-auto! [&_svg]:w-auto! ${className}`}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      {type === 'plus' ? (
        <PlusIcon fillColor={'currentColor'} />
      ) : (
        <MinusIcon fillColor={'currentColor'} />
      )}
    </Button>
  )
}

export default PlusMinusButton
