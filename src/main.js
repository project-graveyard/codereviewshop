import "./assets/style.css";
import "./icons";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { firebaseApp, analytics, firestore } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(firebaseApp);
app.use(analytics);
app.use(firestore);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
