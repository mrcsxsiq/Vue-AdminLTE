import Vue from 'vue'
import App from './App'
import CxltToastr from './toastr'

var toastrConfigs = {
    showMethod: 'swing',
    position: 'top right'
}

Vue.use(CxltToastr, toastrConfigs)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
