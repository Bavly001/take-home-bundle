import { Accordion } from '@heroui/react'
import CameraIcon from '../../assets/icons/CameraIcon'
import ShieldIcon from '../../assets/icons/ShieldIcon'
import SensorIcon from '../../assets/icons/SensorIcon'
import ProtectionIcon from '../../assets/icons/ProtectionIcon'
import { BUILDER_STEPS } from '../../constants/steps'
import { useAccordionStore } from '../../stores/useAccordionStore'
import { useCartStore } from '../../stores/useCartStore'
import CameraStep from './Steps/CameraStep'
import StepperAccordionItem from './components/StepperAccordionItem'

const STEP_CONTENT = [
  { Icon: CameraIcon, title: 'Choose your cameras', children: <CameraStep /> },
  {
    Icon: ShieldIcon,
    title: 'Choose your plan',
    children: <div>Test 2</div>,
  },
  {
    Icon: SensorIcon,
    title: 'Choose your sensors',
    children: <div>Test 3</div>,
  },
  {
    Icon: ProtectionIcon,
    title: 'Add extra protection',
    children: <div>Test 4</div>,
  },
]

const BuilderColumn = () => {
  const expandedKeys = useAccordionStore((state) => state.expandedKeys)
  const setExpandedKeys = useAccordionStore((state) => state.setExpandedKeys)
  const cartItems = useCartStore((state) => state.items)

  return (
    <div className="h-full xl:flex-1">
      <Accordion
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
        className="p-0"
        hideSeparator
      >
        {STEP_CONTENT.map((step, index) => {
          const { key, category } = BUILDER_STEPS[index]
          const isOpen = expandedKeys.has(key)

          return (
            <StepperAccordionItem
              isOpen={isOpen}
              key={key}
              id={key}
              title={step.title}
              stepNumber={index + 1}
              totalSteps={STEP_CONTENT.length}
              selectedCount={cartItems
                .filter((item) => item.category === category)
                .reduce((total, item) => total + item.quantity, 0)}
              Icon={step.Icon}
            >
              {step.children}
            </StepperAccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default BuilderColumn
