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
      ? 'text-grey border-light-smoke bg-light-smoke disabled:text-light-grey-c disabled:bg-white disabled:border-light-grey-c'
      : 'text-price-grey border-white bg-white disabled:text-price-grey disabled:bg-grey-smoke disabled:border-light-grey-c'
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
