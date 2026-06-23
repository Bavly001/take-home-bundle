import { Accordion, type Key } from '@heroui/react'
import StepperAccordionItem from './components/StepperAccordionItem'
import { useState } from 'react'
import CameraIcon from '../../assets/icons/CameraIcon'
import ShieldIcon from '../../assets/icons/ShieldIcon'
import SensorIcon from '../../assets/icons/SensorIcon'
import ProtectionIcon from '../../assets/icons/ProtectionIcon'

const STEPS = [
  {
    Icon: CameraIcon,
    title: 'Choose your cameras',
  },
  {
    Icon: ShieldIcon,
    title: 'Choose your plan',
  },
  {
    Icon: SensorIcon,
    title: 'Choose your sensors',
  },
  {
    Icon: ProtectionIcon,
    title: 'Add extra protection',
  },
]

const BuilderColumn = () => {
  const [expandedKeys, setExpandedKeys] = useState(new Set<Key>(['step-1']))
  return (
    <div className="h-full flex-1">
      <Accordion
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
        className="p-0"
        hideSeparator
      >
        {STEPS.map((step, index) => {
          const isOpen = expandedKeys.has(`step-${index + 1}`)

          return (
            <StepperAccordionItem
              isOpen={isOpen}
              key={`step-${index + 1}`}
              id={`step-${index + 1}`}
              title={step.title}
              stepNumber={index + 1}
              totalSteps={STEPS.length}
              selectedCount={0}
              Icon={step.Icon}
            >
              <div>
                <p>Test {index + 1}</p>
              </div>
            </StepperAccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default BuilderColumn
