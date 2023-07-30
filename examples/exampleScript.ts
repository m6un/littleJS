import { elements, Signal, createComponent, unmountComponent } from "../src/index";

const { div, button, br } = elements;

const counter1 = new Signal(0)

const counterComponent =  createComponent(() => {
  return div({}, [
    `Counter 1: ${counter1.get()} `,
    button({ onClick: () => {counter1.set(counter1.get() + 1)} }, ['Increment Counter 1']),
    br(),
  ]);
}, [counter1], 
{
  beforeMount : [() => console.log("beforeMount")],
  beforeUpdate: [() => console.log("beforeUpdate")],
  updated: [() => console.log("updated")]
});

const buttonComponent = createComponent(() => {
  return button({onClick: () => {unmountComponent(counterComponent, {beforeDestroy : [() => console.log('beforeDestroy')], destroyed: [() => console.log('destroyed')]})}}, ["delete"])
}, [], {})

if(counterComponent.element){
  document.body.appendChild(counterComponent.element);
}
if(buttonComponent.element){
  document.body.appendChild(buttonComponent.element);
}

console.log(counterComponent)



