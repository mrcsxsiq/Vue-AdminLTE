import store from "../vuex"

const isLoginRoute = route => route.path.indexOf('/login') !== -1
const isForgotRoute = route => route.path.indexOf('/forgot') !== -1
const isRegisterRoute = route => route.path.indexOf('/register') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {

    if (isRegisterRoute(to)) {
        next();
    } else if (isForgotRoute(to)) {
        next();
    } else if (!isLoginRoute(to) && !isLogged() ) {
        next('/login');
    } else {
        next();
    }
}
