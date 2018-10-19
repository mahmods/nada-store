import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Datatable from 'vue2-datatable-component'
import locale from './vue2-datatable-component/locale/ar'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Datatable, { locale })

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App),
})