import { create } from 'zustand'

interface SystemStore {
  isCatalogReady: boolean
  setCatalogReady: (ready: boolean) => void
}

export const useSystemStore = create<SystemStore>((set) => ({
  isCatalogReady: false,
  setCatalogReady: (ready) => set({ isCatalogReady: ready }),
}))
