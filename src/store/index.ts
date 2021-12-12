import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey, State } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT: function (state: State, payload: number = 0): void {
      state.count = payload;
    },
  },
  actions: {},
});

export function useStore() {
  return baseUseStore(key);
}
