>JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar _HTML-like_ syntax.


```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

Gets converted to

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
