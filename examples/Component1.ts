import { Signal, createComponent, elements } from "../src";
// import { counter2 } from "./stateValues";

const {div, button} = elements
const counter2 = new Signal(0)

export const counterComponent2 = createComponent(() => {
    return div({}, [
        `Counter 2: ${counter2.get()} `,
        button({ onClick: () => counter2.set(counter2.get() + 1) }, ['Increment Counter 2']),
    ])
}, [counter2])
