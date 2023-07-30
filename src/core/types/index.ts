export interface createUpdateLifeCycleEvents {
  beforeMount ?: Array<() => void> ;
  mounted ?: Array<() => void>;
  beforeUpdate ?: Array<() => void>;
  updated ?: Array<() => void>;
}

export interface destroyLifeCycleEvents {
  beforeDestroy ?: Array<() => void>;
  destroyed ?: Array<() => void>;
}

export interface Component {
    element: Node | null;
    signalUnsubscribes: Array<() => void>;
  }

export type Listener = () => void;


