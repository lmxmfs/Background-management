<template>
    <div>
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#1b3554"
            text-color="#fff"
            active-text-color="#409eef"
            router
            :collapse = isCollapse
        >
            <el-menu-item>
                <span slot="title">某某后台管理系统</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/goods">
                <i class="el-icon-document"></i>
                <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/params">
                <i class="el-icon-setting"></i>
                <span slot="title">规格参数</span>
            </el-menu-item>
            <el-menu-item index="/advert">
                <i class="el-icon-setting"></i>
                <span slot="title">广告分类</span>
            </el-menu-item>
            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/order/orderList">
                        <i class="el-icon-setting"></i>
                        <span slot="title">订单列表</span>
                    </el-menu-item>
                    <el-menu-item index="/order/orderBack">
                        <i class="el-icon-setting"></i>
                        <span slot="title">退货管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
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
            return {
            }
        }
        
    }
</script>

<style lang="less" scoped>
.el-menu {
    border-right: 0;

    .is-active {
        background: #054476 !important;
        color: #fff !important;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

</style>