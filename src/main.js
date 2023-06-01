import "./assets/style.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { analytics } from "./firebase";

const app = createApp(App);

app.use(analytics);
app.use(router);

app.mount("#app");
