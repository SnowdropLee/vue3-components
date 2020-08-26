import Docs from './views/Docs.vue';
import Docdemo from './components/Docdemo.vue';
import Home from './views/Home.vue';
import Switchdoc from './components/Switchdoc.vue';
import Buttondoc from './components/Buttondoc.vue';
import Dialogdoc from './components/Dialogdoc.vue';
import Tabsdoc from './components/Tabsdoc.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Docs,
            children: [
                { path: 'switch', component: Switchdoc },
                { path: 'button', component: Buttondoc },
                { path: 'dialog', component: Dialogdoc },
                { path: 'tabs', component: Tabsdoc },
                { path: '', component: Docdemo },
            ]
        },
    ]
})