---
done:
---

![[Pasted image 20231120094303.png]]
### A cloud-based development model that allows developers to build and run applications without managing servers


---

## Building Servers vs Writing Small Functions
![[Pasted image 20231120094444.png]]

A Simple GET endpoints looks like
```js
export async function GET() {
  return Response.json({ message: "Hello World" })
}
```

---
## Serverless Providers
- Vercel
- Google Cloud Run
## Benefits
- Reduced operating costs
- Always-on servers
- Infinitely Scalable 