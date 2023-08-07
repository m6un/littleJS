# littleJS

A light Reactive JavaScript UI framework incorporating features like observer
pattern-based state management, lifecycle events, and a domain specific
language for HTML generation.

### Here is an example usage 
```ts
//creating functions which in turn create html elements when called
const { div, button, br } = elements;
//creating a signal for tracking state changes
const state = new Signal({ counter1: 0, counter2: 0 });

//component creation 
const counterComponent = createComponent(() => {
  return div({}, [
    `Counter 1: ${state.get().counter1} `,
    button({ onClick: () => state.get().counter1++ }, ['Increment Counter 1']),
    br(),
    `Counter 2: ${state.get().counter2} `,
    button({ onClick: () => state.get().counter2++ }, ['Increment Counter 2']),
  ]);
}, [state]);

document.body.appendChild(counterComponent.element);
```
