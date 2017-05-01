<template>
    <div class="page has-navbar" v-nav="{ title: title,showBackButton: true }">
        <div class="page-content">

            <von-input type="text" v-model="favName" placeholder="收藏名称"></von-input>
            <button class="button button-positive button-block">保存</button>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            var title = "添加收藏";
            if (this.$route.query.type == "edit") {
                title = "编辑收藏";
            }
            return {
                title,
                favName: ''
            }
        }
    }

</script>