<template>
    <div class="flex my-3">
        TRANG CHỦ > SÁCH TIẾNG VIỆT > MANGA - COMIC
    </div>
    <div class="flex">
        <div class="w-2/12 bg-white p-4">
            <div>NHÓM SẢN PHẨM</div>
        </div>
        <div class="w-10/12 bg-white flex flex-col ml-2 p-4">
            <div class="border-b border-gray-300 pb-4 mb-2">
                Sắp xếp theo:
                <select name="" id="" class="border rounded-lg px-5 py-2 mr-2">
                    <option value="">
                        Bán Chạy Tuần
                    </option>
                </select>
                <select name="" id="" class="border rounded-lg px-5 py-2">
                    <option value="">
                        24 sản phẩm
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/4 flex flex-col">
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </div>
                <div class="w-1/4 flex flex-col">
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </div>
                <div class="w-1/4 flex flex-col">
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </div>
                <div class="w-1/4 flex flex-col">
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </div>
                <div class="w-1/4 flex flex-col">
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </div>
            </div>
        </div>
    </div>
</template>