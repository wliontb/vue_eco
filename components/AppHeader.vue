<template>
  <div class="flex bg-sky-600">
    <div class="w-5/6 mx-auto bg-sky-300">
      <img src="/img/banner/banner-0.jpg" alt="" class="w-full">
    </div>
  </div>
  <div class="bg-white">
    <div class="flex w-5/6 mx-auto justify-between py-2">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/img/fahasa_logo.png" alt="">
        </NuxtLink>
        <div class="relative mt-auto ml-4">
          <div class="group" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            <div class="flex">
              <IconMenuBlack class="text-gray-800 cursor-pointer" />
              <IconSmallDown class="w-3" />
            </div>
            <div class="absolute right-0 top-full bg-white border border-gray-300 rounded-lg shadow-lg"
              :class="{ 'hidden': !isHovering }">
              <!-- Nội dung của dropdown -->
              <div class="p-2">
                <NuxtLink to="/category">Chuyên mục</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-lg border-gray-400 border ps-5 pe-1 flex items-center w-3/6 mx-5">
        <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn.."
          class="w-full focus:border-transparent focus:outline-none">
        <button class="bg-red-600 text-white rounded-lg ms-auto px-5 py-1">
          <IconGlass />
        </button>
      </div>
      <div class="flex justify-between items-center px-1">
        <div class="flex flex-col items-center text-gray-800 mr-2">
          <IconBell />
          <div class="font-semibold">Thông báo</div>
        </div>
        <NuxtLink to="/cart">
          <div class="flex flex-col items-center text-gray-800 mr-2">
            <IconCart />
            <div class="font-semibold">
              Giỏ hàng
            </div>
          </div>
        </NuxtLink>


        <div class="flex flex-col items-center text-gray-800 mr-2">
          <IconUser />
          <div class="font-semibold">Tài khoản</div>

        </div>
        <IconLanguage class="text-gray-800" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import IconBar from './IconBar.vue';

const isHovering = ref(false);
</script>