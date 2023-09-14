<template>
    <div class="bg-white mt-2 flex p-4 items-center rounded-lg">
        <div class="w-1/12">
            <input type="checkbox" class="max-w-full h-5 w-5" :checked="isChecked">
        </div>
        <div class="flex flex-col w-6/12">
            <div class="flex justify-between">
                <img class="w-2/6" :src="item.picture" alt="">
                <div class="flex flex-col w-4/6 justify-between">
                    <NuxtLink :to="'detail_product/'+item.id" class="font-semibold">
                        {{ item.name }}
                    </NuxtLink>
                    <div class="flex items-center">
                        <div class="font-bold mr-2">{{ item.price.toLocaleString() }} đ</div>
                        <div class="line-through text-gray-500 text-sm">{{ (item.price + item.price * item.discount).toLocaleString() }} đ</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/12">
            <ItemInputNumberRange class="max-w-full" :count="item.qtyItem" :max="item.qty" />
        </div>
        <div class="w-2/12 font-bold text-red-700 ml-2">
            {{ (item.qtyItem * item.price).toLocaleString() }} đ
        </div>
        <IconTrash @click="$emit('remove-item', item.id)" class="w-1/12 cursor-pointer" />
    </div>
</template>
<script setup>
const props = defineProps({
    isChecked: {
        type: Boolean,
        default: false
    },
    item: {
        type: Object,
        required: true
    }
})
</script>