# ToDoApp



## Overview
[ToDoApp Live Site](https://alkanoidev.github.io/ToDoApp/)

<code>![screenshot](https://github.com/alkanoidev/ToDoApp/blob/master/Screenshot%202021-11-06%20220613.png)</code>

### Built with
- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Drag and drop API
- ![Mobile support for drag and drop]()

### 

### Something I'm proud of:
```js
window.onload = () => {
  preferences = localStorage.getItem("theme")==undefined ? 1 : localStorage.getItem("theme");
  document.documentElement.className = `theme${preferences}`;
  radios[Number(preferences)-1].checked=true;
};
```

```js
firstOperand = displayValue.split(operator)[0];
secondOperand = displayValue.split(operator).pop();
```

```css
.buttons {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . ."
    "reset reset equals equals";
  height: 600px;
}
```

## Author

- Email - alkanoidev@gmail.com
- @alkanoidev
