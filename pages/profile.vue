<template>
    <div class="flex mt-2">
        <div class="w-3/12 flex flex-col mr-3">
            <div class="font-bold text-xl text-red-700 p-4 border-b-2 bg-white shadow-md">TÀI KHOẢN</div>
            <div class="p-4 bg-white shadow-md">
                <div class="border-b py-3 text-sm text-orange-700 cursor-pointer">Bảng điều khiển tài khoản</div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="isProfileTab = true">Thông tin tài khoản</div>
                <div class="border-b py-3 text-sm cursor-pointer">Đơn hàng của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer">Voucher của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer">Thông báo</div>
            </div>
        </div>
        <div class="w-9/12 flex flex-col">
            <ProfileDashboard :class="{
                hidden: !isDashboardTab
            }" />
            <!-- <ProfileCart /> -->
            <ProfileUser :class="{
                hidden: !isProfileTab
            }" />
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';

const isDashboardTab = ref(true);
const isProfileTab = ref(false);

// definePageMeta({
//     middleware: [
//         'auth'
//     ]
// })

</script>