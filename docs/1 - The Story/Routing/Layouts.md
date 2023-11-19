---
done: false
---
---
## A Layout is....
> UI that is **shared** between multiple pages

---

## `layout.tsx` Files define layouts
- Must have a `children` prop

`app/layout.tsx`
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

---

## Nested Layouts
![[Pasted image 20231118162848.png]]

