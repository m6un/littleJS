import { Component } from "../types";
import {Signal} from "../Signals"
import { createUpdateLifeCycleEvents } from "../types";
import { trigger } from "../Utils";

export function createComponent(
    render: () => Node,
    signals: Array<Signal>,
    lifeCycleEvents: createUpdateLifeCycleEvents
  ): Component {
    const component: Component = {
      element: null,
      signalUnsubscribes: [],
    };

    let isMounted = false
  
    function update() {
      if(!isMounted){
        trigger('beforeMount', lifeCycleEvents)
      }
      else{
        trigger('beforeUpdate', lifeCycleEvents)
      }
      const newElement =  render();
      if (component.element?.parentNode) {
        component.element.parentNode.replaceChild(newElement, component.element);
      }
        component.element = newElement;
        if(!isMounted){
          trigger('mounted', lifeCycleEvents)
        }
        else{
          trigger('updated', lifeCycleEvents)
        }
    }


    signals.forEach((signal) => {
      component.signalUnsubscribes.push(signal.subscribe(update));
    });

    update();

    if(!isMounted){
      isMounted = true;
    }
    return component;
  }
