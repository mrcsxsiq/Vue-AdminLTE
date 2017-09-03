import Main from './components/main.vue'
import Detail from './components/detail.vue'
import Form from './components/form.vue'

export default [
    {path: 'product', component: Main },
    {path: 'product/add', component: Form},
    {path: 'product/:id', name: "ProductDetail", component: Detail},
    {path: 'product/:id/edit', component: Form},
]
