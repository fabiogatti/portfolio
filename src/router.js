import { createMemoryHistory, createRouter } from 'vue-router'
//import Router from 'vue-router'
import about from './views/about.vue'
import contact from './views/contact.vue'
import skills from './views/skills.vue'
import portfolio from './views/portfolio.vue'



export const router = createRouter({
    mode: 'hash',
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'about',
            component: about
        },
        {
            path: '/skills',
            name: 'skills',
            component: skills
        },
        {
            path: '/projects',
            name: 'portfolio',
            component: portfolio
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ]
})