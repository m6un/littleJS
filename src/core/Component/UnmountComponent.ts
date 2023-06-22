import { Component } from "../types";

export function unmountComponent(component: Component) {
    component.signalUnsubscribes.forEach((unsubscribe) => unsubscribe());
    if (component.element && component.element.parentNode) {
      component.element.parentNode.removeChild(component.element);
    }
  }
