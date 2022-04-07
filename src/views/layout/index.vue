<template>
    <div class="layout">
        <Menu class="menu" :isCollapse="isCollapse"></Menu>
        <Content 
            class="content" 
            :class="{isActive: isCollapse}"
            @changeCollapse="changeCollapse" 
            :isCollapse="isCollapse">
        </Content>
    </div>
</template>

<script>
    import Menu from './menu.vue'
    import Content from './content.vue'
    export default {
        components: {
            Menu,
            Content
        },
        data () {
            return {
                isCollapse: false
            }
        },
        methods: {
            changeCollapse () {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style lang="less" scoped>
.layout {
    .menu {
        // width: 200px;
        // min-height: 50px;
        background: #1b3554;
        position: fixed;
        top: 0;
        bottom: 0;
    }
    .content {
        margin-left: 200px;
    }
    .isActive {
        margin-left: 64px;
    }
}

</style>