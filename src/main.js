import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import store from './store/index'
import router from './router/index'

axios.defaults.baseURL = 'https://fakestoreapi.com'

createApp(App).use(router).use(store).mount('#app')
