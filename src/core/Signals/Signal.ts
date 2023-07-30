import { Listener } from "../types";

export class Signal {
    private proxy: any;
    private listeners: Array<Listener>;
  
    constructor(value: any) {
      this.listeners = [];
      this.proxy = this.observe(value);
    }
  
    private observe(obj: any): any {
      if (obj !== null && typeof obj === 'object') {
        for (const key in obj) {
          obj[key] = this.observe(obj[key]);
        }
        return new Proxy(obj, {
          set: (target, property, value) => {
            target[property] = this.observe(value);
            this.notifyListeners();
            return true;
          },
        });
      }
      return obj;
    }
  
    private notifyListeners(): void {
      this.listeners.forEach((listener) => listener());
    }
  
    get(): any {
      return this.proxy;
    }
  
    set(value: any): void {
      this.proxy = this.observe(value);
      this.notifyListeners();
    }
  
    subscribe(listener: Listener): () => void {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
  }
