<template>
    <div class="flex flex-col bg-white mt-4">
        <div class="font-bold p-4">
            ĐỒ CHƠI
        </div>
        <div class="flex border-gray-300 border-b pb-4">
            <ul class="flex py-2 px-8 items-center">
                <li class="mr-4">Đồ Chơi Giá Sốc</li>
                <li class="mr-4 px-4 py-2 text-orange-500 border-orange-500 border rounded-lg">Board Game</li>
                <li class="mr-4">Búp Bê - Thú Bông</li>
                <li class="mr-4">Đồ Chơi Sơ Sinh</li>
                <li class="mr-4">Đồ Chơi Nhà Tắm</li>
            </ul>
        </div>
        <div class="flex">
            <img src="/img/banner/bannerdochoi.jpg" class="pl-8 py-4" alt="">
            <div class="flex flex-col">
                <div class="flex flex-wrap p-4">
                    <ItemCategoryIndex />
                    <ItemCategoryIndex />
                    <ItemCategoryIndex />
                    <ItemCategoryIndex />
                </div>
                <div
                    class="text-center text-red-500 border-2 border-red-500 px-4 py-2 rounded-lg w-1/6 mx-auto my-4 font-semibold">
                    Xem Thêm
                </div>
            </div>
        </div>

    </div>
</template>