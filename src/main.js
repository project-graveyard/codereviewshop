import "./assets/style.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { firebaseApp, analytics, firestore } from "./firebase";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* add icons to the font-awesome-icon library */
library.add(faJava);
library.add(faPython);
library.add(faHtml5);
library.add(faCss3Alt);
library.add(faTerminal);
library.add(faCodeBranch);
library.add(faGithub);
library.add(faXmark);
library.add(faBars);
library.add(faCircleCheck);
library.add(faEnvelope);

const app = createApp(App);

app.use(firebaseApp);
app.use(analytics);
app.use(firestore);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
