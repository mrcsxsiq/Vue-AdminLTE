import Toastr from './Toastr'

const CxltToastr = {
    install: function (Vue, options) {
        Vue.prototype.$cxltToastrOptions = options

        Vue.component(Toastr.name, Toastr)
    }
}

export default CxltToastr
