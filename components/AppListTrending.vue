<template>
    <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="text-orange-500 p-2 border border-orange-500 rounded-lg font-semibold">Xu Hướng Theo Ngày</div>
        <div class="p-2 ml-4">Sách HOT - Giảm Sốc</div>
        <div class="p-2 ml-4">Bestseller Ngoại Văn</div>
    </div>
    <div class="flex bg-white flex-col">
        <div class="flex flex-wrap">
            <div class="w-1/5" v-for="product in products.result" :id="product.id">
                <ItemTrending :product="product" />
            </div>
        </div>
        <div class="text-center text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg w-1/6 mx-auto my-4 font-semibold">
            Xem thêm</div>
    </div>
</template>
<script setup>
const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        trending: true,
        limit: 10
    }
})
</script>