import { kebabize } from "../Utils";

export function createElement(tag: any, attributes : {[key : string] : any} = {}, children = []) {
  const element = document.createElement(tag);
  for (let attribute in attributes) {
    if (
      attribute.startsWith('on') &&
      attribute[2].toUpperCase() === attribute[2]
    ) {
      let normalisedAttributeName = attribute.replace('on', '');
      normalisedAttributeName =
        normalisedAttributeName[0].toLowerCase() +
        normalisedAttributeName.slice(1);
      element.addEventListener(normalisedAttributeName, attributes[attribute]);
    } else if (attribute === 'style') {
      if (typeof attributes[attribute] === 'string') {
        element.setAttribute(attribute, attributes[attribute]);
      } else if (
        !Array.isArray(attributes[attribute]) &&
        typeof attributes[attribute] === 'object'
      ) {
        const properties = attributes[attribute];
        for (let propertyName in properties) {
          element.style.setProperty(
            kebabize(propertyName),
            properties[propertyName]
          );
        }
      }
    } else {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  (Array.isArray(children) ? children : [children]).forEach((child : any) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
      // console.log({child})
    } else if (child && child.element) {
      child = child.element;
    }

    if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}
