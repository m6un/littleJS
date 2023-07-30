import { trigger } from "../Utils";
import { Component, destroyLifeCycleEvents } from "../types";

export function unmountComponent(component: Component, lifeCycleEvents: destroyLifeCycleEvents) {
    trigger('beforeDestroy', lifeCycleEvents)
    component.signalUnsubscribes.forEach((unsubscribe) => unsubscribe());
    if (component.element && component.element.parentNode) {
      component.element.parentNode.removeChild(component.element);
    }
    trigger('destroyed', lifeCycleEvents)
  }
