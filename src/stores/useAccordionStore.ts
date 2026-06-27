import type { Key } from '@heroui/react'
import { create } from 'zustand'
import { FIRST_STEP_KEY } from '../constants/steps'

interface AccordionStore {
  expandedKeys: Set<Key>
  setExpandedKeys: (keys: Set<Key>) => void
  openStep: (stepKey: string) => void
  openFirstStep: () => void
}

export const useAccordionStore = create<AccordionStore>((set) => ({
  expandedKeys: new Set<Key>([FIRST_STEP_KEY]),
  setExpandedKeys: (keys) => set({ expandedKeys: keys }),
  openStep: (stepKey) => set({ expandedKeys: new Set<Key>([stepKey]) }),
  openFirstStep: () => set({ expandedKeys: new Set<Key>([FIRST_STEP_KEY]) }),
}))
