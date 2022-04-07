<template>
    <div class="goods">
        <div class="header">
            <el-input v-model="searchItem" placeholder="请输入搜索内容"></el-input>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">添加</el-button>
        </div>
        <div class="wrapper">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
                <el-table-column prop="title" label="商品名称" width="100" show-overflow-tooltip></el-table-column>
                <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
                <el-table-column prop="num" label="商品数量" width="100"></el-table-column>
                <el-table-column prop="category" label="规格类目" width="100"></el-table-column>
                <el-table-column prop="image" label="商品图片" show-overflow-tooltip></el-table-column>
                <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip></el-table-column>
                <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <Pagination :total="total" :pageSize="pageSize" @changePage="changePage"></Pagination>
    </div>
</template>

<script>
    import Pagination from '../../components/pagnation.vue'
    export default {
        components: {
            Pagination
        },
        data () {
            return {
                searchItem: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                total: 100,
                pageSize: 10
            }
        },
        created () {
            this.getGoodsList(1)
        },
        methods: {
            getGoodsList (current) {

            },
            handleEdit () {

            },
            handleDelete () {

            },
            changePage (current) {
                this.getGoodsList(current)
            }
        }
    }
</script>

<style lang="less" scoped>
.goods {
    margin: 20px;
}
.header {
    display: flex;

    button {
        margin-left: 20px;
    }
}
.wrapper {
    margin-top: 20px;
}

</style>