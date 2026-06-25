import { Accordion } from '@heroui/react'
import CarrotDownIcon from '../../../assets/icons/CarrotDownIcon'

const StepperAccordionItem = ({
  isOpen,
  id,
  title,
  totalSteps,
  stepNumber,
  selectedCount,
  Icon,
  children,
}: {
  isOpen: boolean
  id: string
  title: string
  stepNumber: number
  totalSteps: number
  selectedCount: number
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}) => {
  return (
    <Accordion.Item
      id={id}
      className={`transition-all duration-300 ${isOpen && stepNumber !== 1 ? 'mt-3.25' : ''}`}
    >
      <Accordion.Heading
        className={`flex flex-col pt-3.75 transition-all duration-300 ${
          isOpen ? 'bg-secondary rounded-t-[15px]' : ''
        }`}
      >
        <span className="text-light-grey ps-3.75 pb-1.25 text-[10px] tracking-[1.6px] uppercase">
          Step {stepNumber} of {totalSteps}
        </span>

        <Accordion.Trigger
          className={`border-dark-grey flex w-full items-center justify-between border-y-[0.5px] px-3.75 py-5 text-[22px] font-semibold transition-all duration-300 ${isOpen ? 'border-b-dark-grey/0' : ''}`}
        >
          <div className="flex items-center justify-center gap-2">
            <Icon className="h-5 w-5 md:h-6.5 md:w-6.5" />
            <span className="text-grey-obsidian">{title}</span>
          </div>

          <div className="flex items-center gap-1">
            {selectedCount > 0 ? (
              <span className="text-primary text-sm font-medium">
                {selectedCount} selected
              </span>
            ) : null}
            <div
              className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            >
              <CarrotDownIcon />
            </div>
          </div>
        </Accordion.Trigger>
      </Accordion.Heading>

      <Accordion.Panel
        className={isOpen ? 'bg-secondary rounded-b-[15px]' : ''}
      >
        <Accordion.Body className="px-3.75 pb-5">{children}</Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default StepperAccordionItem
