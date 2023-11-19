Libraries:
- **Zustand** (🔥)
- Jotai
- Recoil
- Redux (🤮)

### Zustand in a nutshell
1. First, create a store
```js
import { create } from 'zustand'

export const useSlapStore = create()((set) => ({
  slaps: 0,
  incrementSlaps: () => set((state) => ({ slaps: state.slaps + 1 })),
  decrementSlaps: () =>
    set((state) => ({ slaps: state.slaps > 0 ? state.slaps - 1 : 0 })),
}));

```
