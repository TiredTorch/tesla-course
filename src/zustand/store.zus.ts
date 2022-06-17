import create from 'zustand'

export const useStore = create<any>((set: any, get: any) => ({
  orbitActive: true,
  toggleOrbitActive: () => set({ orbitActive: !get().orbitActive}),
}))