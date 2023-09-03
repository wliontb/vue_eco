<template>
    <div class="flex gap-y-5 flex-col">
        <div class="flex gap-x-5">
            <div class="w-1/2 flex bg-white shadow-xl rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize text-gray-700">Tổng quan</div>
                        <div class="text-gray-500 text-sm">Đã bán 10k đơn <span class="text-green-500">+18%</span>
                        </div>
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">100</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">200</div>
                            <div class="text-sm text-gray-400">Đã bán</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">3000</div>
                            <div class="text-sm text-gray-400">Tồn kho</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex p-5 flex-col bg-white shadow-xl rounded-lg gap-y-3">
                <div class="font-bold text-lg text-gray-700">Tìm kiếm theo</div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-300 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-500 outline-none">
                            <option value="" disabled selected>Tên ngành hàng</option>
                            <option value="">Sách</option>
                            <option value="">Văn phòng phẩm</option>
                            <option value="">Điện thoại</option>
                        </select>
                    </div>
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Plan</option>
                        </select>
                    </div>
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Status</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col pt-5 bg-white shadow-xl rounded-md gap-y-5">
            <div class="flex px-5">
                <div
                    class="border border-gray-500 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                    Export
                </div>
                <div class="ml-auto flex gap-x-5">
                    <input type="text"
                        class="border border-gray-300 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm"
                        placeholder="Tìm danh mục...">
                    <NuxtLink to="/admin/product/add" class="bg-green-500 text-white px-3 py-1.5 rounded">
                        Thêm sản phẩm
                    </NuxtLink>
                </div>
            </div>
            <AdminItemTable :headers="headers" :items="items" @changeSelect="changeSelect" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin'
})

const headers = ref([
    { text: "Tên danh mục", value: "name" },
    { text: "sản phẩm", value: "prodQty", sortable: true },
    { text: "Đơn đã bán", value: "prodSoldQty", sortable: true }
])

const items = ([
    { id: 1, "name": "Tin Tức", "prodQty": 77, "prodSoldQty": 20, isSelected: false },
])

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>