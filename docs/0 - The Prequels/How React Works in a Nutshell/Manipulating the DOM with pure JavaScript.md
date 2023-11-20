---
done:
---

- Vanilla
```js
const app = document.getElementById('app');

app.innerHTML = "<h1>sdfsd</h1>"
```

- jQuery
```js
$(document).ready(function(){  
  $("p").click(function(){  
    $(this).hide();  
  });  
});
```

---
# React Bare Minimum
```html
<html>
  <body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```
