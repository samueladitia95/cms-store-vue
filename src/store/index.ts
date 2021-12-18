import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey, State } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    isSidebarOpen: true,
  },
  mutations: {
    SET_COUNT(state: State, payload: number = 0): void {
      state.count = payload;
    },
    SET_IS_SIDEBAR_OPEN(state: State, payload: boolean = false): void {
      state.isSidebarOpen = payload;
    },
  },
  actions: {},
});

export function useStore() {
  return baseUseStore(key);
}
