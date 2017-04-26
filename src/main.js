import Vue from 'vue'
import Vonic from 'vonic'

// https://wangdahoo.github.io/vonic-documents/#/?id=vonic
// https://wangdahoo.github.io/vonic-doc/v1/zh-CN/

// Components
import MyButton from './components/MyButton.vue'

Vue.component('my-button',MyButton)

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

Vue.use(Vonic.app, {
  routes: routes
})
