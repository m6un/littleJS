import { createElement } from "./CreateElement";

const elementHandler = {
    get(target: any, prop: any, receiver: any) {
      return createElement.bind({}, prop);
    },
  };

export const elements = new Proxy({}, elementHandler);

