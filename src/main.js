import Vue from 'vue'
import App from './App.vue'
import Store from './config/store/store.js'
import Router from './config/router/router.js'
import Axios from './config/axios/axios.js'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
  router: Router,
  store: Store,
  axios: Axios,
  render: h => h(App)
}).$mount('#app')
