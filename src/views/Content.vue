<template>
    <div class="page has-navbar" v-nav="{ title: '具体内容' ,showBackButton: true}">
        <div class="page-content">
            <div class="cssMain">
                <von-input type="text" v-model="url" placeholder="地址栏"></von-input>

                <div class="cssContentCard" v-for="(item,index) in sourceList" :key="index">
                    <div class="cssImage">
                        Image
                    </div>
                    <div class="cssCover">
                        <i class="icon ion-checkmark-circled"></i>
                    </div>
                </div>

                <button class="button button-assertive button-block">删除</button>
            </div>

        </div>
    </div>
</template>

<style>
    .cssMain {
        padding: 5px;
    }
    
    .cssContentCard {
        box-shadow: 0 0 10px rgba(0, 204, 204, .5);
        border: 5px solid white;
        position: relative;
        margin: 2px 0px 3px 0px;
    }
    
    .cssImage {
        height: 150px;
        background-color: ghostwhite;
    }
    
    .cssCover {
        position: absolute;
        top: 2px;
        right: 5px;
        color: white;
    }
</style>

<script>
    export default {
        mounted() {
            for (let i = 1; i <= 6; i++) {
                this.sourceList.push(i)
            }
        },
        data() {
            return {
                url: '',
                sourceList: [

                ]
            }
        }
    }

</script>