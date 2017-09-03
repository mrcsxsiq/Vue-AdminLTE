import Vue from 'vue'
import VueResource from 'vue-resource'
import VueSweetAlert from 'vue-sweetalert'
import VueCxltToastr from 'cxlt-vue2-toastr'

import router  from './router'
import store  from './vuex'

//import "~assets/css/bootstrap.min.css" 

const Index = {
  template: '<router-view></router-view>',
  script: "export default {name: 'App'}"
}

Vue.use(VueResource)
Vue.use(VueSweetAlert)
Vue.use(VueCxltToastr)

Vue.http.options.root = 'https://mrcsxsiq-server.herokuapp.com';

const app = new Vue({
  router,
  store,
  render: h => h(Index)
//  render: h => h({template: '<router-view></router-view>'})
}).$mount('#app')
