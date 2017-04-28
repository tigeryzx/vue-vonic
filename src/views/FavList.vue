<template>
    <div class="page has-navbar" v-nav="{ title: '收藏列表',showBackButton: true }">
        <div class="page-content">
            <div>
                <div>
                    <div class="item item-divider cssAppendBtn" @click="toggleAddPlan">
                        <i class="ion-plus-round"></i> 添加收藏
                    </div>
                    <transition name="von-accordion">
                        <div v-if="showAddPlan">
                            <von-input type="text" v-model="favName" placeholder="收藏名称"></von-input>
                            <button class="button button-positive button-block">保存</button>
                        </div>
                    </transition>
                </div>

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
    export default {
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
            }
        },
        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.favList.push(i)
            }
        },
    }

</script>