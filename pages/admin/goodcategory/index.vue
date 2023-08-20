<template>
    <div class="flex gap-x-5">
        <div class="w-2/5 gap-y-5 flex flex-col">
            <div class="flex border border-gray-500 rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize">Tổng quan</div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg">100</div>
                            <div class="text-sm text-gray-400">Ngành hàng</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg">300</div>
                            <div class="text-sm text-gray-400">Danh mục</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-blue-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg ">1000</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col gap-y-5 p-5 rounded-lg border border-gray-600">
                <div class="text-lg font-semibold capitalize" id="add">Thêm ngành hàng mới</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên ngành hàng</div>
                        <input type="text" name="" id="" placeholder="nhập tên"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                        <textarea name="" id="" placeholder="nhập mô tả"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Nhà cung cấp</div>
                        <select name="" id=""
                            class="w-2/3 px-2 py-2 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                            <option value="1">Hehe</option>
                            <option value="1">Hihi</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="w-2/3 flex ml-auto gap-x-3">
                        <button class="text-white bg-green-500 rounded py-1 px-4">Thêm</button>
                        <button class="text-gray-400 border border-gray-400 rounded py-1 px-4">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/5 flex flex-col gap-y-5">
            
            <div class="flex flex-col pt-5 border border-gray-500 rounded-md gap-y-5">
                <div class="flex px-5">
                    <div
                        class="border border-gray-500 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                        Export
                    </div>
                    <div class="ml-auto flex gap-x-5">
                        <input type="text" class="border border-gray-500 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm"
                            placeholder="Tìm ngành hàng...">
                        <a href="#add" class="bg-green-500 text-white-500 px-3 py-1.5 rounded font-semibold">
                            Thêm ngành hàng
                        </a>
                    </div>
                </div>
                <AdminItemTable :headers="headers" :items="items" @changeSelect="changeSelect" />
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin'
})

const headers = ref([
    { text: "Tên", value: "name" },
    { text: "Số danh mục", value: "cateQty", sortable: true }
])

const items = ([
    { id: 1, "name": "Tin Tức", "cateQty": 20, isSelected: false },
])

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>