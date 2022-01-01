import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.css';
import VTooltip from 'v-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUserSecret,
  faBars, 
  faSearch, 
  faCaretDown, 
  faInfoCircle, 
  faDownload, 
  faChartArea,
  faCalculator,
  faSquare,
    faEnvelope,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faClone,
  faHandPointer

} from '@fortawesome/free-regular-svg-icons'
import {
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret, 
  faBars, 
  faClone, 
  faSearch, 
  faCaretDown, 
  faHandPointer, 
  faInfoCircle, 
  faDownload,
  faChartArea,
  faCalculator,
  faSquare,
    faEnvelope,
faGithubSquare,
    faFileAlt
);

Vue.use(VTooltip);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
