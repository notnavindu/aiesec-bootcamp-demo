import { create } from "zustand";

interface SlapState {
  slaps: number;
  incrementSlaps: () => void;
  decrementSlaps: () => void;
}

// this is a global store
export const useSlapStore = create<SlapState>()((set) => ({
  slaps: 0,
  incrementSlaps: () => set((state) => ({ slaps: state.slaps + 1 })),
  decrementSlaps: () =>
    set((state) => ({ slaps: state.slaps > 0 ? state.slaps - 1 : 0 })),
}));
