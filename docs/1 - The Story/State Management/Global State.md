---
done: false
---

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

2. Then use it like
```ts
const slaps = useSlapStore((state) => state.slaps)
const incrementSlaps = useSlapStore((state) => state.incrementSlaps)
```

Zustand Docs  - https://docs.pmnd.rs/zustand/getting-started/introduction