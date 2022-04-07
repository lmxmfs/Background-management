<template>
    <div class="pagnation">
        <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :total="total"
            :page-size="pageSize"
            @current-change="changePage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            total: {
                type: Number,
                default: 100
            },
            pageSize: {
                type: Number,
                default: 10
            }
        },
        methods: {
            changePage (current) {
                this.$emit('changePage', current)
            }
        }
    }
</script>

<style lang="less" scoped>
.pagnation {
    text-align: center;
    margin: 20px;
}
</style>