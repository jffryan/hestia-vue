import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Mount the router
app.use(router);

// Mount the store
app.use(createPinia());

app.mount("#app");
