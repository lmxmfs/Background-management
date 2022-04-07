<template>
    <div>
        <div class="header">
            <i v-if="!isCollapse" @click="changeMenu" class="iconfont icon-right-indent"></i>
            <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isCollapse: {
                type: Boolean
            }
        },
        data () {

        },
        methods: {
            changeMenu () {
                this.$emit('changeCollapse')
            }
        }
    }
</script>

<style lang="less" scoped>
.header {
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #054476;

    .iconfont {
        font-size: 24px;
    }
}
</style>