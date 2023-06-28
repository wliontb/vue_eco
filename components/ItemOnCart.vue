<template>
    <div class="bg-white mt-2 flex p-4 items-center rounded-lg">
        <div class="w-1/12">
            <input type="checkbox" class="max-w-full h-5 w-5" :checked="isChecked">
        </div>
        <div class="flex flex-col w-6/12">
            <div class="flex justify-between">
                <img class="w-2/6" src="/img/product/op.jpg" alt="">
                <div class="flex flex-col w-4/6 justify-between">
                    <div class="text-md">
                        [Anime Comics] One Piece Stampede - Tập 2
                    </div>
                    <div class="flex items-center">
                        <div class="font-bold mr-2">73.150 đ</div>
                        <div class="line-through text-gray-500 text-sm">77.000 đ</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/12">
            <ItemInputNumberRange class="max-w-full" :count="2" />
        </div>
        <div class="w-2/12 font-bold text-red-700 ml-2">
            73.150 đ
        </div>
        <IconTrash class="w-1/12" />
    </div>
</template>
<script setup>
const props = defineProps({
    isChecked: {
        type: Boolean,
        default: false
    }
})
</script>