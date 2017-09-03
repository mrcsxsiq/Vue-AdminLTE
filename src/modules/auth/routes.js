import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'
import NotFound from './components/NotFound.vue'

export default [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/forgot', component: Forgot},
    {path: '*', component: NotFound}
]
