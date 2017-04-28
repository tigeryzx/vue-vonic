<template>
    <div class="page has-navbar" v-nav="{title: '内容列表', showBackButton: true}">
        <scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
            <item v-for="(item, index) in items" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
                <div class="cssContentCard">
                    <div class="cssImage">
                        Image
                    </div>
                    <div>
                        <div class="cssTitle">
                            {{ item }}
                        </div>
                        <div class="cssDes">
                            2017-01-01
                        </div>
                    </div>
                    <div class="cssFav">
                        <i class="icon ion-android-favorite-outline"></i>
                    </div>
                </div>

            </item>

            <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
        </scroll>
    </div>

</template>

<style>
    .cssContentCard {
        box-shadow: 0 0 10px rgba(0, 204, 204, .5);
        border: 5px solid white;
        position: relative;
    }
    
    .cssImage {
        height: 150px;
        background-color: ghostwhite;
    }
    
    .cssTitle {
        color: #4A90E2;
        font-size: 18px;
        padding: 5px 0 2px 0;
    }
    
    .cssDes {
        color: gray;
        font-size: 12px;
        padding-top: 2px;
    }
    
    .cssFav {
        position: absolute;
        top: 2px;
        right: 5px;
        color: white;
    }
</style>

<script>
    export default {
        data() {
            return {
                items: [],
                infiniteCount: 0
            }
        },

        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.top = 1
            this.bottom = 20
        },

        methods: {
            onRefresh(done) {
                setTimeout(() => {
                    let start = this.top - 1
                    for (let i = start; i > start - 10; i--) {
                        this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                    }
                    this.top = this.top - 10;

                    done()
                }, 1500)
            },

            onInfinite(done) {
                setTimeout(() => {
                    if (this.infiniteCount < 2) {
                        let start = this.bottom + 1
                        for (let i = start; i < start + 10; i++) {
                            this.items.push(i + ' - keep walking, be 2 with you.')
                        }
                        this.bottom = this.bottom + 10;

                        this.infiniteCount++
                    }

                    done()
                }, 1500)
            },

            onItemClick(index) {
                this.$router.forward({ path: '/content', query: { id: index } });
            }
        }

    }

</script>