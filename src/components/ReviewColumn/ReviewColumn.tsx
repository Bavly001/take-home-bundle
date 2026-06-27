import ReviewSection from './components/ReviewSection'

const ReviewColumn = () => {
  return (
    <div className="relative min-h-full w-full xl:max-w-100 xl:w-1/3">
      <div className="bg-brand-subtle top-5 flex h-full w-full flex-col gap-1.25 rounded-[10px] py-3.75 pe-2.25 xl:sticky xl:h-auto">
        <p className="ms-3.75 text-[12px] font-medium tracking-[1.6px] text-slate-700 uppercase">
          Review
        </p>
        <div className="flex flex-col gap-2.5 p-5 pb-7.75">
          <div className="flex flex-col gap-1.25">
            <p className="text-base font-semibold tracking-[0.6px] text-slate-900">
              Your security system
            </p>
            <p className="text-sm/[130%] font-medium tracking-[0.6px] text-slate-900/75">
              Review your personalized protection system designed to keep what
              matters most safe.
            </p>
          </div>
          <ReviewSection title="Cameras" />
        </div>
      </div>
    </div>
  )
}

export default ReviewColumn
