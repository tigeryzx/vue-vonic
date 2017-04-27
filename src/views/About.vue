<template>
  <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <h2 class="padding" @click="showAction">Nothing here.</h2>

      <!--<md-button class="button button-balanced button-block" @click="showToast">
        Show toast...
      </md-button>

      <div class="button button-balanced button-block" @click="showToast">Show toast2...</div>

      <div class="button button-balanced button-block" @click="showAction">Show action...</div>

      <my-button class="button button-balanced button-block" @click="showToast">
        Show MY toast...
      </my-button>

      <my-button class="button button-balanced button-block" @click="login">
        Login...
      </my-button>-->
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'Vuex'
  import * as types from '../store/types'

  export default {
    computed: {
      ...mapState({
        theme: state => state.app.theme
      })
    },
    methods: {
      ...mapActions({
        login: types.A_LOGIN_IN
      }),
      back() {
        $router.back('/')
      },
      showToast() {
        $toast.show("button clicked.")
      },
      showAction() {
        $actionSheet.show({
          theme: this.theme,
          title: '标题',
          buttons: {
            'Action - 1': () => {
              console.log('action 1 called.')
            },

            'Action - 2': () => {
              console.log('action 2 called.')
            }
          }
        })
      }
    }
  }

</script>