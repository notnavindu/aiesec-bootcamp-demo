---
done: false
---
`app/dashboard/layout.tsx`
```tsx
import styles from './styles.module.css'
 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.dashboard}>{children}</section>
}
```

`app/dashboard/styles.module.css`
```tsx
.dashboard {
  padding: 24px;
}
```
