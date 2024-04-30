import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import './index.css'
//import i18n from './i18n'
import { translateObj } from './i18n.js'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight,faInfo,faEnvelope,faGlobe,faPalette,faPaintBrush,faCode,faLanguage,faUser,faIdCard,faCogs,faBriefcase,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSkype,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight,faGlobe,faInfo,faEnvelope,faSkype,faLinkedin,faPalette,faPaintBrush,faCode,faLanguage,faUser,faIdCard,faCogs,faBriefcase,faPhone)

//Vue.component('font-awesome-icon', FontAwesomeIcon)

//Vue.config.productionTip = false

console.log(translateObj)

const i18n = createI18n(translateObj)

/*createApp({
  router: router,
  i18n,
  render: h => h(App),
}).mount('#app')*/

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(i18n)
  .mount('#app')