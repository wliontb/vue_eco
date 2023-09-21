<template>
    <div class="flex mt-2">
        <div class="w-3/12 flex flex-col mr-3">
            <div class="font-bold text-xl text-red-700 p-4 border-b-2 bg-white shadow-md uppercase">
                Quản lý TÀI KHOẢN
            </div>
            <div class="p-4 bg-white shadow-md">
                <div class="border-b py-3 text-sm cursor-pointer" @click="changeTab('dashboard')" :class="{'text-orange-700': isDashboardTab}">
                    Bảng điều khiển tài khoản
                </div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="changeTab('profile')" :class="{'text-orange-700': isProfileTab}">
                    Thông tin tài khoản
                </div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="changeTab('invoice')">Đơn hàng của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="changeTab('voucher')">Voucher của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="changeTab('notify')">Thông báo</div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="logout">Đăng xuất</div>
            </div>
        </div>
        <div class="w-9/12 flex flex-col">
            <ProfileDashboard v-if="listTabDisplay.dashboard"  v-bind:user="user.result" @update-user="showProfileTab" />
            <ProfileUser v-if="listTabDisplay.profile" v-bind:user="user.result" />
            <ProfileInvoice v-if="listTabDisplay.invoice" />
            <ProfileVoucher v-if="listTabDisplay.voucher" />
            <ProfileNotify v-if="listTabDisplay.notify" />
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/store/user';

definePageMeta({
    middleware: ['auth'],
});

const isDashboardTab = ref(true);
const isProfileTab = ref(false);

const listTabDisplay = ref({
    dashboard: true,
    profile: false,
    invoice: false,
    voucher: false,
    notify: false,
})

const changeTab = (nameTab) => {
    for (const key in listTabDisplay.value) {
        if(key == nameTab){
            listTabDisplay.value[key] = true;
        } else {
            listTabDisplay.value[key] = false;
        }
    }
}

const userStore = useUserStore();
const userId = userStore.user.id;
const { data: user } = await useFetch('http://localhost:3000/api/customers/' + userId);

const showDashboardTab = () => {
    isDashboardTab.value = true;
    isProfileTab.value = false;
};

const showProfileTab = () => {
    isDashboardTab.value = false;
    isProfileTab.value = true;
};

if(useRoute().hash == '#edit'){
    showProfileTab();
}

const logout = () => {
    userStore.removeUser();
    navigateTo('/');
}
</script>
  