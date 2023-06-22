import { elements, Signal, createComponent } from "../src/index";

const { div, button, br } = elements;

console.log("div",elements.div)
const state = new Signal({ counter1: 0, counter2: 0 });

const counterComponent = createComponent(() => {
  return div({}, [
    `Counter 1: ${state.get().counter1} `,
    button({ onClick: () => state.get().counter1++ }, ['Increment Counter 1']),
    br(),
    `Counter 2: ${state.get().counter2} `,
    button({ onClick: () => state.get().counter2++ }, ['Increment Counter 2']),
  ]);
}, [state]);

if(counterComponent.element){
  document.body.appendChild(counterComponent.element);
}

