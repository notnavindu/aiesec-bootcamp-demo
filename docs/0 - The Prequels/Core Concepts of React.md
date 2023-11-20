---
done:
---
## On the web...
```html
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>
```

## With React...
- You can create your own components
- A component is a reusable UI element


---
https://react.dev/learn/your-first-component#using-a-component

```jsx
function ProfileImage() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
```
```jsx
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <ProfileImage />
      <ProfileImage />
      <ProfileImage />
    </section>
  );
}
```



--- 

## Writing JavaScript inside JSX
- use curly braces `{ }`

```jsx
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

Eg: https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-curly-braces-a-window-into-the-javascript-world

--- 

## Props
- use _props_ to communicate with each other. 
- Every parent component can pass some information to its child components by giving them props.
- Kinda like HTML Attributes
```jsx
import { getImageUrl } from './utils.js';

// Child Component
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Parent Component
export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
```

Demo: https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component


--- 

## Conditional Rendering
- Multiple Ways ([D](https://react.dev/learn/conditional-rendering))
- Ternary Operator ([Docs](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--))
```js
(condition) ? (if true do this) : (else do this)
```

- Docs: https://react.dev/learn/conditional-rendering

--- 

## Loops
```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  
  return <ul>
	{
		people.map(person =>
		    <li>{person}</li>
		  )
	}
  </ul>;
}

```

Docs - https://react.dev/learn/rendering-lists#rendering-data-from-arrays
