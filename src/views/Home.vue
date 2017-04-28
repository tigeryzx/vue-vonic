<template>
    <div class="page has-navbar" v-nav="{ title: '我的小窝' }">
        <div class="page-content">
            <cells :items="menus" :on-cell-click="onCellClick" row="2"></cells>
        </div>
    </div>
</template>

<style lang="scss">
    .entrance {
        height: 100px;
        padding: 35px 0;
    }
    
    .icon {
        font-size: 30px;
        line-height: 30px;
        width: 30px;
        height: 30px;
        margin-bottom: 6px;
    }
</style>

<script>
    export default {
        data() {
            return {
                menus: [
                    '<div class="entrance assertive"><i class="icon ion-social-youtube"></i><br><span>列表</span></div>',
                    '<div class="entrance energized"><i class="icon ion-android-favorite"></i><br><span>收藏</span></div>',
                    '<div class="entrance balanced"><i class="icon ion-gear-a"></i><br><span>设置</span></div>',
                    '<div class="entrance positive"><i class="icon ion-log-out"></i><br><span>注销</span></div>'
                ],
                menusPath: [
                    '/contentList',
                    '/favList',
                    '/setting',
                    '/'
                ]
            }
        },
        methods: {
            onCellClick(cellIndex) {
                let path = this.getPath(cellIndex)
                if (path) {
                    this.$router.forward(path)
                }
            },
            getPath(index) {
                if (index > this.menusPath.length - 1) {
                    return null
                }
                return this.menusPath[index]
            }
        }
    }

</script>