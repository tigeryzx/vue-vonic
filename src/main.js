import Vue from 'vue'
import Vonic from 'vonic'
import routes from './router'
import store from './store'

// https://wangdahoo.github.io/vonic-documents/#/?id=vonic
// https://wangdahoo.github.io/vonic-doc/v1/zh-CN/

// Components
import MyButton from './components/MyButton.vue'

Vue.component('my-button', MyButton)

// Config
Vonic.app.setConfig('routerOptions', {
  mode: 'history',
  saveScrollPosition: true
})

Vue.use(Vonic.app, {
  routes,
  store
})