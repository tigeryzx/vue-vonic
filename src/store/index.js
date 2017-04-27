import Vue from 'vue'
import Vuex from 'Vuex'
import login from './modules/login'

// 判断一下再加载，开发时会加载，发布不能再调用这个来加载，因为Store会让Vuex自动注册
if (!(typeof window !== 'undefined' && window.Vue)) {
  Vue.use(Vuex);
}

const state = {
    // 支持三种主题样式 ios/android/weixin
    theme: 'ios'
}

export default new Vuex.Store({
  state,
  modules: {
    login
  }
})