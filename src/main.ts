import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Topnave from './components/Topnave.vue';
import Home from './components/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Topnave },
        { path: '/home', component: Home },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
