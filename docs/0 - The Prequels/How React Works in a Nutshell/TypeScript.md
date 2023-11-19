---
done:
---

# TypeScript is **JavaScript with syntax for types.**

## Primitive types
- `string`
- `number`
- `boolean`

## Why TypeScript
1. **Static Typing:** TypeScript allows you to define types for your variables, function parameters, and return values, catching potential errors during development and making your code more predictable.
    
2. **Code Readability:** Type annotations make the code more self-documenting, enhancing readability and providing developers with clearer insights into the expected data structures.
    
3. **Editor Support:** TypeScript integrates well with editors like Visual Studio Code, providing features like autocompletion, type checking, and better refactoring tools, leading to a more efficient development experience.
    
4. **Early Error Detection:** With static typing, many errors can be caught at compile-time, reducing the likelihood of runtime errors and making the debugging process more straightforward.
    ddddddddddddddddd
5. **Enhanced Tooling:** TypeScript offers a rich set of tools, including interfaces, enums, and advanced type features, enabling developers to express complex data structures and design patterns more effectively.

## Explicit types
```ts
const message: string;
```

## Infer types
```ts
let message = "Hello World!";
```

## Type Safety
```ts
message = 33; // ERROR!
```

## Interfaces
```ts
interface User {
  name: string;
  id: number;
}

const person: User = {
	name: "Hassan",
	id: 2
};
```

- TS Handbook - https://www.typescriptlang.org/docs/handbook/intro.html

---
- Browsers cannot understand TS