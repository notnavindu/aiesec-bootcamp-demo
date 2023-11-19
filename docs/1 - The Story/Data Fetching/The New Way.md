---
done: false
---
`hooks/use-user.ts`
```ts
function useUser (id) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
 
  return {
    user: data,
    isLoading,
    isError: error
  }
}
```

`components/Avatar.tsx`
```tsx
function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)
 
  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <img src={user.avatar} />
}
```


- The fetcher - https://swr.vercel.app/docs/data-fetching