import Vue from 'vue'
import Router from 'vue-router'
import about from './views/about.vue'
import contact from './views/about.vue'
import skills from './views/skills.vue'
import portfolio from './views/portfolio.vue'
import notFound from './views/notFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            path: '/portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound
        }
    ]
})