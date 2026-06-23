import { Accordion } from '@heroui/react'
import { useState } from 'react'
import CarrotDownIcon from '../../../assets/icons/CarrotDownIcon'

const StepperAccordion = () => {
  // Use v3 controlled state tracking
  const [expandedKeys, setExpandedKeys] = useState(new Set())
  const isOpen = expandedKeys.has('step-1')

  return (
    <Accordion 
      // expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
      className="p-0"
    >
      <Accordion.Item id="step-1">
        <Accordion.Heading
          className={`flex flex-col transition-all duration-300 ${
            isOpen ? 'rounded-t-2xl bg-[#f0f4fa]' : ''
          }`}
        >
          <span className="text-light-grey ps-3.75 py-1.25 text-[10px] tracking-[1.6px] uppercase">
            Step 1 of 4
          </span>

          <Accordion.Trigger
            className={`flex w-full items-center justify-between px-3.75 py-5 text-[22px] font-semibold border-dark-grey border-y-[0.5px] transition-all duration-300 ${isOpen ? 'border-b-dark-grey/0' : ''}`}
          >
            <span className="text-black">Choose your cameras</span>

            <div className="flex items-center gap-3">
              {isOpen && (
                <span className="text-sm font-medium text-purple-600">
                  2 selected
                </span>
              )}
              <div
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-600' : ''}`}
              >
                <CarrotDownIcon />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Heading>

        <Accordion.Panel className={isOpen ? 'rounded-b-2xl bg-[#f0f4fa]' : ''}>
          <Accordion.Body>
            <div className="pt-4">
              <p>Test</p>
            </div>
          </Accordion.Body>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export default StepperAccordion
