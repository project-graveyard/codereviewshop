import "./assets/style.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { analytics } from "./firebase";

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

/* add icons to the font-awesome-icon library */
library.add(faJava);
library.add(faPython);
library.add(faHtml5);
library.add(faCss3Alt);
library.add(faTerminal);
library.add(faCodeBranch);
library.add(faGithub);

const app = createApp(App);

app.use(analytics);
app.use(router);

app.mount("#app");
