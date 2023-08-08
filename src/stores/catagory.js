import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layou.js"

export const cateGoryStore = defineStore('category', () => {

  //存放导航栏数据
  const categoryList = ref([])
  ////获取导航栏数据
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return { categoryList, getCategory }
})
