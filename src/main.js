import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import validation from './includes/validation'

const app = createApp(App)
app.use(validation)
app.use(createPinia())
app.use(router)

app.mount('#app')
