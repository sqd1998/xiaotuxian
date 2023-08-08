<script setup>
import LayoutNav from "./components/LayouNav.vue";
import LayoutHeader from "./components/LayouHeader.vue";
import LayoutFooter from "./components/LayouFooter.vue";
import LayouStickt from "./components/LayouStickt.vue";
import { cateGoryStore } from "@/stores/catagory.js";
import { onMounted } from "vue";

//获取pinia数据
const category = cateGoryStore();

onMounted(() => {
  category.getCategory();
});
</script>

<template>
  <LayouStickt></LayouStickt>
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key破坏缓存  达到刷新页面 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>