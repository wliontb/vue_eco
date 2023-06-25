<template>
    <div class="p-4">
        <div class="relative">
            <img src="/img/product/comic1.jpg" alt="">
            <div class="bg-orange-500 text-white rounded-full absolute top-5 right-0 z-10">10%</div>
            <div v-if="isOOS" class="absolute inset-0 flex items-center justify-center">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="p-2 bg-red-500 text-white font-semibold z-10">
                    Hết hàng
                </div>
            </div>
        </div>
        <div>
            <NuxtLink to="/detail_product">[Anime Comics] One Piece Stampede - Tập 1</NuxtLink>
        </div>
        <div class="flex flex-row justify-between">
            <div class="text-red-600 font-bold">
                69.300đ
            </div>
            <div class="bg-gray-400 text-white rounded-lg px-3">Tập 1</div>
        </div>
        <div class="line-through">
            77.000đ
        </div>
        <div class="flex">
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="text-orange-500 w-4" />
            <IconStar class="w-4" />
            <IconStar class="w-4" />
            <div class="text-orange-500">(0)</div>
        </div>
        <div v-if="isFlashSale" class="text-center">
            <div class="w-full h-4 bg-gray-200 rounded relative">
                <div class="h-full bg-red-600 rounded" style="width: 10%"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                    đá bán 10
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        isFlashSale: {
            type: Boolean,
            default: true
        },
        isOOS: {
            type: Boolean,
             default: true
        }
    })
</script>