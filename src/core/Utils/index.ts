import { createUpdateLifeCycleEvents, destroyLifeCycleEvents } from "../types";

export const kebabize = (str: string) =>{
    str.replace(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
      );
};

export function trigger(
  eventName: keyof (createUpdateLifeCycleEvents & destroyLifeCycleEvents),
  lifeCycleEvents: createUpdateLifeCycleEvents | destroyLifeCycleEvents
) {
  const eventArray = (lifeCycleEvents as createUpdateLifeCycleEvents & destroyLifeCycleEvents)[eventName] ?? [];
  eventArray.forEach((callback: () => void) => callback());
}




