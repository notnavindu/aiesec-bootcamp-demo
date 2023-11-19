- Docs: https://react.dev/learn/state-a-components-memory

## State: A Component's Memory

```tsx
export default function Gallery() {
	let index = 0;
	
	function handleClick() {
		index = index + 1;
	}
	
	return (<div> {index} </div>)
}
```

---

### The React way 
```tsx
export default function Gallery() {
	const [index, setIndex] = useState(0);

	function handleClick() {
		setIndex(index + 1);
	}
	
	return (<div> {index} </div>)
}
```

### `useState` returns two things
- A variable
- A function to update that variable