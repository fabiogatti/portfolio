import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './index.css'
import i18n from './i18n'
import VueAnime from 'vue-animejs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight,faInfo,faEnvelope,faGlobe,faPalette,faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faSkype,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight,faGlobe,faInfo,faEnvelope,faSkype,faLinkedin,faPalette,faPaintBrush)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router: router,
  i18n,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnime)