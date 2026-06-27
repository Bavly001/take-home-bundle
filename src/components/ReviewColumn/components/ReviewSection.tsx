import PlusMinusButton from '../../PlusMinusButton'

const ReviewSection = ({ title }: { title?: string }) => {
  return (
    <div className="flex flex-col gap-2 border-t border-slate-300 pt-3.75">
      {title && (
        <p className="text-slate-450 text-[12px] tracking-[3%] uppercase">
          {title}
        </p>
      )}
      <div className="flex justify-between gap-4">
        <div className="flex flex-1 items-center justify-center gap-3">
          <img
            src="https://www.wyze.com/cdn/shop/files/wyze-cam-pan-v4-wyze-labs-inc-7068445.jpg?v=1756312046&width=990"
            alt="camera"
            className="h-10.25 w-10.25 rounded-[5px] object-cover"
          />
          <p className="flex-1 text-[14px] font-medium tracking-[0.5%] text-slate-950">
            Wyze Cam Pan V4
          </p>
          <div className="flex items-center justify-between gap-2">
            <PlusMinusButton type="minus" variant="light" />
            <span className="text-sm font-medium text-slate-900">1</span>
            <PlusMinusButton type="plus" variant="light" />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[14px] leading-4 font-medium tracking-[0.5%] text-slate-500 line-through">
            $35.98
          </p>
          <p className="text-brand text-[14px] leading-4 font-bold tracking-[0.5%]">
            $27.98
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
