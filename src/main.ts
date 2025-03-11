import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import naive from 'naive-ui'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(naive)
