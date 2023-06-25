<template>
    <div class="bg-white flex p-4 border-b border-gray-300">
        <div class="text-orange-500 p-2 border border-orange-500 rounded-lg font-semibold">Xu Hướng Theo Ngày</div>
        <div class="p-2 ml-4">Sách HOT - Giảm Sốc</div>
        <div class="p-2 ml-4">Bestseller Ngoại Văn</div>
    </div>
    <div class="flex bg-white flex-col">
        <ul class="flex flex-row">
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
        </ul>
        <ul class="flex flex-row">
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
            <li class="w-1/5">
                <ItemTrending />
            </li>
        </ul>
        <div class="text-center text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg w-1/6 mx-auto my-4 font-semibold">
            Xem thêm</div>
    </div>
</template>