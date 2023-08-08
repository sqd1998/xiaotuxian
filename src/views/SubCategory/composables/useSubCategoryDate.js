// 封装分类数据业务相关代码
import { getCategoryFilterAPI } from "@/apis/category.js"
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

export function useSubCategory () {
  // 获取分类数据
  const filterData = ref({})
  const route = useRoute()
  const getfilterData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    filterData.value = res.result
  }
  onMounted(() => getfilterData())


  return {
    filterData
  }
}