<template>
    <div class="page">
        <div class="page-content padding-top">
            <von-input type="text" v-model="username" placeholder="用户名" label="用户名"></von-input>
            <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

            <div class="padding">
                <button class="button button-positive button-block" @click="login">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'Vuex'
    import * as types from '../store/types'

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions({
                login: types.A_LOGIN_IN
            })
        }
    }

</script>