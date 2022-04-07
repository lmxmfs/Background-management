// 请求方法
import axios from "axios"
import base from "./base"
const api = {
    // 获取商品列表
    getGoodsList (params) {
        return axios.get(base.goodsList), {params}
    }
}

export default api