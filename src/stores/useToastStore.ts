import { create } from 'zustand'

interface ToastStore {
  message: string | null
  showToast: (message: string) => void
  hideToast: () => void
}

let hideTimer: ReturnType<typeof setTimeout> | undefined

export const useToastStore = create<ToastStore>((set) => ({
  message: null,
  showToast: (message) => {
    if (hideTimer) clearTimeout(hideTimer)
    set({ message })
    hideTimer = setTimeout(() => set({ message: null }), 3000)
  },
  hideToast: () => {
    if (hideTimer) clearTimeout(hideTimer)
    set({ message: null })
  },
}))
