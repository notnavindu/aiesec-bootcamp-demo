---
done: false
---
---
### `slapper.com/user/123443`


Can be defined in the file system as

### `app/user/[userId]/page.tsx`

---

`app/user/[userId]/page.tsx`
```tsx
export default function Page({ params }) {
  return <h1>User: {params.userId}</h1>
}
```

``app/user/[userId]/posts/[postId]/page.tsx``