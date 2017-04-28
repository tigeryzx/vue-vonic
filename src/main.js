import Vue from 'vue'
import Vonic from 'vonic'
import routes from './router'
import store from './store'
import sess from './sess'

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

const beforeEach = (toRoute, fromRoute, next) => {
  const to = toRoute.path
  const from = fromRoute.path
  const scrollTop = Vonic.app.pageContentScrollTop()

  let h = sess.get(to)
  if (h && h.history) {
    Vonic.app.nextDirection('back')
    h.history = false
    sess.set(to, h)
  } else {
    sess.set(from || '/', {
      history: true,
      scrollTop: scrollTop
    })
    Vonic.app.nextDirection('forward')
  }

  const tabbarRoutes = [
    '/advanced/tabbar/home',
    '/advanced/tabbar/discount',
    '/advanced/tabbar/cart',
    '/advanced/tabbar/user'
  ]

  if (from && tabbarRoutes.indexOf(from) > -1) {
    sess.set(from, {
      history: false,
      scrollTop: scrollTop
    })
  }

  // 某些页面定制 page transition direction
  if (
    (from == '/' && to == '/login') 
  ) {
    Vonic.app.nextDirection('forward')
  }

  if (
    (to == '/' && from == '/login')
  ) {
    Vonic.app.nextDirection('back')
  }

  next()
}

const afterEach = (toRoute, fromRoute) => {
  const to = toRoute.path
  const from = fromRoute.path
  // [Custom Business] Never use history scrollTop when '/' => '/home'
  if (from == '/' && to == '/login') return

  const h = sess.get(to)
  if (h && h.scrollTop) {
    Vue.nextTick(() => {
      Vonic.app.pageContentScrollTop(h.scrollTop)
    })
  }
}

// Register beforeEach and afterEach Hooks
Vonic.app.setConfig('beforeEach', beforeEach)
Vonic.app.setConfig('afterEach', afterEach)

Vue.use(Vonic.app, {
  routes,
  store
})