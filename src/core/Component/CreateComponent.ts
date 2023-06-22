import { Component } from "../types";
import {Signal} from "../Signals"

export function createComponent(
    render: () => Node,
    signals: Array<Signal>
  ): Component {
    const component: Component = {
      element: null,
      signalUnsubscribes: [],
    };
  
    function update() {
      const newElement = render();
      // console.log({newElement, component})
  
      if (component.element && component.element.parentNode) {
        console.log("parent",component.element.parentNode)
        console.log("element", component.element)
        component.element.parentNode.replaceChild(newElement, component.element);
      }
      component.element = newElement;
      console.log({newElement})
    }
  
    signals.forEach((signal) => {
      component.signalUnsubscribes.push(signal.subscribe(update));
    });
  
    console.log("signalUnsubscribes", component.signalUnsubscribes)
  
    update();
  
    // console.log({component})
  
    return component;
  }
