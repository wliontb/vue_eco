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
          class="w-full focus:border-transparent focus:outline-none" autocomplete="false">
        <button class="bg-red-600 text-white rounded-lg ms-auto px-5 py-1">
          <IconGlass />
        </button>
      </div>
      <div class="flex justify-between items-center px-1 text-sm">
        <div class="flex flex-col items-center text-gray-800 mr-2">
          <IconBell />
          <div>Thông báo</div>
        </div>

        <div class="relative">
          <div class="group" @mouseenter="isHoveringCart = false" @mouseleave="isHoveringCart = true">
            <div class="flex flex-col items-center text-gray-800 mr-2 text-sm">
              <IconCart class="font-semibold" />
              <div>Giỏ hàng</div>
            </div>
            <MiniCart :isHoveringCart="isHoveringCart" />
          </div>


        </div>


        <div class="relative">
          <div class="group" @mouseenter="isHoveringAccount = false" @mouseleave="isHoveringAccount = true">
            <div class="flex flex-col items-center text-gray-800 mr-2 text-sm">
              <IconUser class="font-semibold" />
              <div>Tài khoản</div>
            </div>
            <div class="flex flex-col absolute bg-white top-full right-0 px-4 py-2 w-60 rounded-b shadow-sm border-t"
              :class="{ hidden: isHoveringAccount }">
              <button class="bg-red-700 text-white px-4 py-2 my-2 rounded-lg text-center font-semibold"
                @click="displayLoginBox">Đăng nhập</button>
              <NuxtLink to="/profile" class="border-2 font-semibold border-red-700 text-red-700 px-4 py-2 rounded-lg text-center">Đăng
                ký</NuxtLink>
            </div>
          </div>


        </div>
        <IconLanguage class="text-gray-800 text-sm" />
      </div>
    </div>
  </div>
  <div class="w-full h-full fixed top-0 left-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    :class="{ hidden: !isDisplayLoginBox }" @click="closeLoginBox">
    <div class="bg-white p-4 mx-auto w-4/12 flex flex-col rounded-md" @click.stop>
      <div class="flex">
        <div class="w-1/2 text-center cursor-pointer" :class="isOnLogin ? onTabStyle : ''" @click="isOnLogin = true">Đăng
          nhập</div>
        <div class="w-1/2 text-center cursor-pointer" :class="isOnLogin ? '' : onTabStyle" @click="isOnLogin = false">Đăng
          ký</div>
      </div>
      <div class="p-4 flex flex-col" :class="{
        hidden: !isOnLogin,
      }">
        <div class="flex flex-col mb-4">
          <div>Số điện thoại/Email</div>
          <input type="text" name="phone" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại hoặc email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="relative flex flex-col">
            <input class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu" :type="passType">
            <div class="absolute right-1.5 top-1.5">
              <button class="text-blue-500 cursor-pointer text-sm" @click="passType == 'text' ? passType = 'password' : passType = 'text'">ẩn hiện</button>
            </div>
          </div>
        </div>
        <div class="text-right mb-4">
          <NuxtLink to="#" class="text-red-700 text-sm">Quên mật khẩu?</NuxtLink>
        </div>
        <button class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3">Đăng
          nhập</button>
        <button
          class="px-4 py-2 text-red-700 bg-white border-red-700 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3" @click="isDisplayLoginBox = false">Bỏ
          qua</button>
        <button
          class="px-4 py-2 text-white bg-blue-500 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 flex justify-center items-center">
          <IconFacebook class="w-5 mr-2" />
          Đăng nhập bằng Facebook
        </button>
      </div>
      <!-- Register  -->

      <div class="p-4 flex flex-col" :class="{
        hidden: isOnLogin,
        'slide-in': !isOnLogin
      }">
        <div class="flex flex-col mb-4">
          <div>Số điện thoại</div>
          <div class="flex flex-col">
            <input type="text" name="phone_reg" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Email</div>
          <input type="email" class="border rounded-sm px-4 py-2" placeholder="Nhập email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Nhập lại mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu">
          </div>
        </div>
        <button class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3">Đăng
          ký</button>
        <button
          class="px-4 py-2 text-red-700 bg-white border-red-700 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3" @click="isDisplayLoginBox = false">Bỏ
          qua</button>
        <div class="text-center text-xs mt-4">
          Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về <br>
          <NuxtLink to="#" class="text-blue-500">Điều khoản dịch vụ</NuxtLink> & <NuxtLink to="#" class="text-blue-500">
            Chính sách bảo mật</NuxtLink>
        </div>
      </div>

      <!-- regis temp -->
      <div class="p-4 flex flex-col" :class="{
        hidden: true,
        'slide-in': !isOnLogin
      }">
        <div class="flex flex-col mb-4">
          <div>Số điện thoại</div>
          <div class="relative flex flex-col">
            <input type="text" name="phone_reg" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại">
            <div class="absolute right-1.5 top-1.5">
              <a href="#" class="text-blue-500 cursor-pointer text-sm">Gửi mã OTP</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Mã xác nhận OTP</div>
          <input type="number" disabled="true" class="border rounded-sm px-4 py-2" placeholder="6 ký tự">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="relative flex flex-col">
            <input type="password" disabled="true" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu">
            <div class="absolute right-1.5 top-1.5">
              <a href="#" class="text-blue-500 cursor-pointer text-sm">Hiện</a>
            </div>
          </div>
        </div>
        <button class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3">Đăng
          ký</button>
        <button
          class="px-4 py-2 text-red-700 bg-white border-red-700 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3" @click="isDisplayLoginBox = false">Bỏ
          qua</button>
        <div class="text-center text-xs mt-4">
          Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về <br>
          <NuxtLink to="#" class="text-blue-500">Điều khoản dịch vụ</NuxtLink> & <NuxtLink to="#" class="text-blue-500">
            Chính sách bảo mật</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideIn 0.3s forwards;
}
</style>
<script setup>
import { ref, computed } from 'vue';

const isHovering = ref(false);

const isHoveringAccount = ref(true);

const isHoveringCart = ref(true);

const isDisplayLoginBox = ref(false);

const isOnLogin = ref(true);

const passType = ref('password')

const onTabStyle = computed(() => {
  if (isOnLogin) {
    return {
      'text-red-700': true,
      'border-b-2': true,
      'border-red-700': true,
      'pb-2': true,
      'font-semibold': true
    }
  } else {
    return {}
  }
})

const displayLoginBox = () => {
  isDisplayLoginBox.value = true;
};

const closeLoginBox = () => {
  isDisplayLoginBox.value = false;
};

</script>