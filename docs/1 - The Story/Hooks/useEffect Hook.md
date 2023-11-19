```ts
useEffect(() => {
	console.log("🚀 This runs on page load");
	
	return () => {
	  console.log("🚀 This runs on page unload");
	};
}, []);

useEffect(() => {
	console.log(`🚀 This runs when 'slaps' value changes. (👋 x ${slaps})`);
}, [slaps]);
```