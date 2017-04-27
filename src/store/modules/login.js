/**
 * 登录模块
 */
import * as types from '../types'
import api from '../../api'

const state = {
    user: {}
}

const mutations = {
    [types.M_LOGIN_SET_USER](state, payload) {
        state.user = payload
    },
    [types.M_LOGIN_CLEAR_USER](state) {
        state.user = {};
    }
}

const getters = {

}

const actions = {
    [types.A_LOGIN_IN]({ commit }) {
        api.getAllValues().then(response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        }).catch(response => {

        })
    }
}

export default {
    state, mutations, getters, actions
}