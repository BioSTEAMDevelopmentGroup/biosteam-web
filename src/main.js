import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VTooltip from 'v-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faBars, faSearch, faCaretDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faClone, faHandPointer } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faBars, faClone, faSearch, faCaretDown, faHandPointer, faInfoCircle)

Vue.use(VTooltip)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
