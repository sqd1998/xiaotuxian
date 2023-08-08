// 封装分类数据业务相关代码
import { getSubCategoryAPI } from "@/apis/category.js"
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"


export function useGoodList () {
  // 获取基础列表数据渲染
  const goodList = ref([])
  const route = useRoute()
  const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })

  const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    console.log(res)
    goodList.value = res.result.items
  }

  onMounted(() => getGoodList())


  return {
    goodList,
    getGoodList,
    reqData
  }
}