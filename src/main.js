import { createApp, VueElement } from 'vue'
import App from './App.vue'

import router from './router/index.js'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './assets/main.css'

createApp(App).use(router).mount('#app')