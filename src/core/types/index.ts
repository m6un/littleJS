export interface Component {
    element: Node | null;
    signalUnsubscribes: Array<() => void>;
  }

export type Listener = () => void;


