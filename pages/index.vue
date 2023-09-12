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
  <div class="flex mt-4 flex-col">
    <div class="flex bg-orange-300 w-full p-2">
      <div class="flex items-center mr-2 font-bold">
        <img src="/img/icon/flashsale.png" class="mr-2" alt=""> FLASH SALE
      </div>
      <div class="flex items-center border-l-2 border-gray-600 pl-2">
        Kết Thúc Trong
        <div class="flex items-center ml-2">
          <div class="bg-white rounded-md p-1">00</div> :
          <div class="bg-white rounded-md p-1">38</div> :
          <div class="bg-white rounded-md p-1">05</div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <ul class="flex">
        <li class="w-1/5 p-5">
          <ItemFlashSale />
        </li>
        <li class="w-1/5 p-5">
          <ItemFlashSale />
        </li>
        <li class="w-1/5 p-5">
          <ItemFlashSale />
        </li>
        <li class="w-1/5 p-5">
          <ItemFlashSale />
        </li>
        <li class="w-1/5 p-5">
          <ItemFlashSale />
        </li>
      </ul>
      <div class="px-5 py-2 bg-orange-500 w-2/12 rounded-full text-center mx-auto mt-4 text-white font-semibold mb-5">Xem
        Thêm</div>
    </div>
  </div>
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
  <div class="flex flex-col mt-4">
    <div class="flex bg-pink-200 p-4">
      <img src="/img/icon/ico_dealhot.png" alt="">
      <div class="font-bold ml-2">
        XU HƯỚNG MUA SẮM
      </div>
    </div>
    <AppListTrending />
    <!-- combo -->
    <AppListCombo />
  </div>

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
  