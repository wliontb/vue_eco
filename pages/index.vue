<template>
  <!-- slider -->
  <AppSlideHeader />
  <!-- banner sale -->
  <div class="flex">
    <div class="w-3/12 p-2 pl-0"><img src="/img/banner/subbanner1.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2"><img src="/img/banner/subbanner2.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2"><img src="/img/banner/subbanner3.png" class="w-full" alt=""></div>
    <div class="w-3/12 p-2 pr-0"><img src="/img/banner/subbanner2.png" class="w-full" alt=""></div>
  </div>
  <!-- category -->
  <AppCategoryHeader />
  <!-- flash sale -->
  <AppFlashsale />
  <!-- danh muc -->
  <div class="flex mt-4 flex-col bg-white p-4">
    <div class="flex border-b border-gray-200 pb-4 items-center gap-x-2">
      <IconMenu />
      <div class="font-bold">
        Danh mục ngành hàng
      </div>
    </div>
    <div class="flex mt-4 flex-wrap">
      <div class="w-1/12 flex flex-col items-center justify-between gap-y-2" v-for="goodCate in goodCates.result" :id="goodCate.id">
        <img :src="goodCate.picture" alt="" class="mx-auto max-h-24">
        <NuxtLink :to="'/good_cate/'+goodCate.id" class="text-center text-sm font-semibold">{{ goodCate.goodName }}</NuxtLink>
      </div>
    </div>
  </div>
  <!-- trending -->
  <AppTrending />

  <!-- category -->
  <AppCategory v-for="goodCate in goodCates.result" :goodCate="goodCate" />

  <div class="flex bg-white mt-4 p-4 justify-between items-center max-h-48">
    <div class="w-1/6"><img src="/img/banner/uni1.jpg"></div>
    <div class="w-1/6"><img src="/img/banner/uni2.jpg"></div>
    <div class="w-1/6"><img src="/img/banner/uni3.jpg"></div>
    <div class="w-1/6"><img src="/img/banner/uni4.jpg"></div>
    <div class="w-1/6"><img src="/img/banner/uni5.jpg"></div>
    <div class="w-1/6"><img src="/img/banner/uni8.jpg"></div>
  </div>


</template>
<script setup>

const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');

</script>
  