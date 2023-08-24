<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-1/2">
        <div class="text-lg font-semibold text-gray-500">Thêm Chuyên Mục Mới</div>
        <div class="flex flex-col gap-y-3">
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên chuyên mục</div>
                <input type="text" name="" id="" placeholder="nhập tên" class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                <textarea name="" id="" placeholder="nhập mô tả" class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:capitalize focus:border-red-500"></textarea>
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Từ khóa SEO</div>
                <input type="text" name="" id="" placeholder="nhập keyword seo" class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Đường dẫn tùy chọn</div>
                <input type="text" name="" id="" placeholder="nhập đường dẫn" class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
        </div>
        <div class="flex flex-col gap-y-3">
            <div class="w-2/3 flex ml-auto gap-x-3">
                <button class="text-white bg-green-500 rounded py-1 px-4">Thêm</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
</script>