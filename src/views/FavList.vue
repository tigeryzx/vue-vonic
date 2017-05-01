<template>
    <div class="page has-navbar" v-nav="{ 
        title: '收藏列表',
        showBackButton: true ,
        showMenuButton:true ,
        onMenuButtonClick: showAction}">
        <div class="page-content">
            <div>
                <list class="list-ios">
                    <item class="item-icon-right" v-for="(item,index) in favList" :key="index">
                        Item - {{item}}
                        <span class="item-note"><badge num="2"></badge></span>
                        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
                    </item>
                </list>
            </div>
        </div>

    </div>
</template>

<style>
    .cssAppendBtn {
        color: gray;
        text-align: center;
    }
    
    .cssAddPlan {
        position: fixed;
    }
</style>
<script>
    import { mapState } from 'Vuex'

    export default {
        computed: {
            ...mapState({
                theme: state => state.theme
            })
        },
        data() {
            return {
                showAddPlan: false,
                favName: '',
                favList: [

                ]
            }
        },
        methods: {
            toggleAddPlan() {
                this.showAddPlan = !this.showAddPlan;
            },
            toggleSidebar() {
                this.sidebar.toggle()
            },
            showAction() {
                $actionSheet.show({
                    theme: this.theme,
                    title: '收藏管理',
                    buttons: {
                        '添加收藏': () => {
                            this.$router.forward({ path: '/favSave', query: { type: 'add' } });
                        }
                    }
                })
            }
        },
        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.favList.push(i)
            }
        }
    }

</script>