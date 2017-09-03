import Main from './components/main.vue'
import Topic from './components/topic.vue'
import Article from './components/article.vue'

export default [
    {path: 'help', component: Main},
    {path: 'help/:topic', component: Topic},
    {path: 'help/:topic/:article', component: Article},
]
