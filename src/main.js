import './assets/style.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { firebaseApp, analytics } from './firebase'

const app = createApp(App)

app.use(router)
app.use(firebaseApp)
app.use(analytics)

app.mount('#app')
