import { Button } from '@heroui/react'
import { useAccordionStore } from '../../../stores/useAccordionStore'

const ReviewEmptyState = () => {
  const openFirstStep = useAccordionStore((state) => state.openFirstStep)

  return (
    <div className="flex flex-col items-center gap-4 border-t border-slate-300 pt-6 text-center">
      <div className="flex flex-col gap-1.25">
        <p className="text-base font-semibold tracking-[0.6px] text-slate-900">
          No items selected yet
        </p>
        <p className="text-sm/[130%] font-medium tracking-[0.6px] text-slate-900/75">
          Start building your security system by choosing cameras and add-ons
          from the builder.
        </p>
      </div>
      <Button
        variant="outline"
        className="border-brand text-brand rounded-[7px] border px-5 py-1.25 text-sm font-bold"
        onPress={openFirstStep}
      >
        Start building your security system
      </Button>
    </div>
  )
}

export default ReviewEmptyState
