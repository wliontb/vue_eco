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
    <div class="flex border-b border-gray-200 pb-4">
      <IconMenu />
      <div class="font-bold">
        Danh mục sản phẩm
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat1.jpg" alt="">
        VPP DCHS
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat2.jpg" alt="">
        Đồ Chơi
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat3.jpg" alt="">
        Ngôn tình đam mỹ
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat4.jpg" alt="">
        Sách học ngoại ngữ
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat5.jpg" alt="">
        Manga
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat6.jpg" alt="">
        Tâm linh luân hồi
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat7.jpg" alt="">
        Tâm lý thao túng
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat8.jpg" alt="">
        Đối mặt thức tỉnh
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat9.jpg" alt="">
        Tiểu thuyết
      </div>
      <div class="w-1/12 flex flex-col">
        <img src="/img/categories/cat10.jpg" alt="">
        Light Novel
      </div>
    </div>
  </div>
  <!-- trending -->
  <AppTrending />

  <!-- category -->
  <AppCategoryIndex v-for="goodCate in goodCates.result" :goodCate="goodCate" />

  <div class="flex bg-white mt-4 p-4">
    <img src="/img/banner/uni1.jpg" alt="" class="w-1/12"><img src="/img/banner/uni2.jpg" alt="" class="w-1/12">
    <img src="/img/banner/uni3.jpg" alt="" class="w-1/12"><img src="/img/banner/uni4.jpg" alt="" class="w-1/12">
    <img src="/img/banner/uni5.jpg" alt="" class="w-1/12"><img src="/img/banner/uni6.jpg" alt="" class="w-1/12">
    <img src="/img/banner/uni7.jpg" alt="" class="w-1/12"><img src="/img/banner/uni6.jpg" alt="" class="w-1/12">
    <img src="/img/banner/uni4.jpg" alt="" class="w-1/12"><img src="/img/banner/uni4.jpg" alt="" class="w-1/12">
  </div>
</template>
<script setup>

const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');

</script>
  