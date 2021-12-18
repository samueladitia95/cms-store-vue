import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    count: number;
    isSidebarOpen: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
