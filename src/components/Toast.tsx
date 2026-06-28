import { useToastStore } from '../stores/useToastStore'

const Toast = () => {
  const message = useToastStore((state) => state.message)

  if (!message) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div
        role="status"
        className="bg-slate-900 pointer-events-auto rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg"
      >
        {message}
      </div>
    </div>
  )
}

export default Toast
