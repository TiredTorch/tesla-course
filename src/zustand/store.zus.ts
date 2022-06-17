import create from 'zustand'

export const useStore = create<any>((set, get) => ({
  orbitActive: true,
  toggleOrbitActive: () => set({ orbitActive: !get().orbitActive}),
}))