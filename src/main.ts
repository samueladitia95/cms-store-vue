import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { key, store } from "./store";
import "./index.css";

createApp(App).use(router).use(store, key).mount("#app");
