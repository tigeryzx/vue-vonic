<template>
    <div class="page has-navbar" v-nav="{ title: '应用设置',showBackButton: true }">
        <div class="page-content">
            <div class="item item-divider">
                应用主题 {{themeIndex}}:
            </div>
            <von-radio :options="themeList" v-model="selTheme"></von-radio>
            <button class="button button-positive button-block" @click="setTheme">保存设置</button>

        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'Vuex'
    import * as types from '../store/types'
    export default {
        computed: {
            ...mapState({
                themeList: state => state.themeList,
                theme: state => state.theme
            }),
            ...mapGetters({
                themeIndex: types.G_APP_THEME_INDEX
            })
        },
        methods: {
            setTheme() {
                console.log(this.selTheme);
                this.$store.commit(types.M_APP_SET_THEME, this.selTheme);
            }
        },
        data() {
            var v = this.themeIndex;
            return {
                selTheme: v
            }
        }
    }

</script>