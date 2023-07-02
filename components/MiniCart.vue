<template>
    <div class="flex flex-col absolute top-full -right-28 w-96 shadow-sm border-2 rounded-lg" :class="{ hidden: isHoveringCart }">
        <div class="flex border-b border-gray-300 py-3 items-center bg-white px-3">
            <IconCart class="text-sm text-gray-300 mr-2" />
            <div class="font-semibold">Giỏ hàng (1)</div>
        </div>
        
        <ItemMiniCart />
        <ItemMiniCart />
        <ItemMiniCart />
        <div class="flex justify-between items-center bg-white px-3 pb-2 rounded-b-lg">
            <div class="flex flex-col">
                <div>Tổng cộng</div>
                <div class="text-red-700 font-semibold text-lg">69.300 đ</div>
            </div>
            <NuxtLink to="/cart" class="text-white bg-red-700 font-semibold px-4 py-2 rounded-lg">Xem giỏ hàng</NuxtLink>
        </div>
    </div>
</template>
<script setup>
import ItemMiniCart from './ItemMiniCart.vue';


const props = defineProps({
    isHoveringCart: {
        type: Boolean,
        default: true
    }
})

</script>