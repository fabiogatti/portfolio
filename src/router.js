import Vue from 'vue'
import Router from 'vue-router'
import about from './views/about.vue'
import contact from './views/contact.vue'
import skills from './views/skills.vue'
import portfolio from './views/portfolio.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/portfolio',
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