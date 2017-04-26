<template>
  <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <h2 class="padding" @click="showToast">Nothing here.</h2>

      <md-button class="button button-balanced button-block" @click="showToast">
        Show toast...
      </md-button>

      <div class="button button-balanced button-block" @click="showToast">Show toast2...</div>

      <div class="button button-balanced button-block" @click="showAction">Show action...</div>

      <my-button class="button button-balanced button-block" @click="showToast">
        Show MY toast...
      </my-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/')
      },
      showToast() {
        $toast.show("button clicked.")
      },
      showAction() {
        $actionSheet.show({
          // 支持三种主题样式 ios/android/weixin
          theme: 'ios',
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