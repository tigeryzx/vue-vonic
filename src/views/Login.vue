<template>
    <div class="page">
        <div class="page-content padding-top">
            <von-input type="text" v-model="loginInput.username" placeholder="用户名" label="用户名" required></von-input>
            <von-input type="password" v-model="loginInput.password" placeholder="密码" label="密码" required style="margin-bottom: 5px;"></von-input>

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
                loginInput: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch(types.A_LOGIN_IN, this.loginInput).then(result => {
                    if (result) {
                        this.$router.forward({ path: '/Index' });
                    }
                })
            }
        }
    }

</script>