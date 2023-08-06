<template>
    <div class="flex p-5 flex-col border border-gray-500 rounded-lg gap-y-3">
        <div class="font-bold text-lg">Search Filters</div>
        <div class="flex gap-x-3">
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Role</option>
                </select>
            </div>
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Plan</option>
                </select>
            </div>
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Status</option>
                </select>
            </div>
        </div>
    </div>
    <div class="flex flex-col pt-5 border border-gray-500 rounded-md gap-y-5">
        <div class="flex px-5">
            <div class="border border-gray-500 px-3 py-2 text-gray-500 rounded text-sm hover:text-white hover:bg-blue-700 hover:border-none">
                Export
            </div>
            <div class="ml-auto flex gap-x-5">
                <input type="text" class="border border-gray-500 bg-admin rounded px-3 py-2 placeholder:text-sm"
                    placeholder="Tìm danh mục...">
                <button class="bg-red-500 text-white-500 px-3 py-2 rounded font-semibold">
                    Thêm danh mục
                </button>
            </div>
        </div>
        <AdminItemTable :headers="headers" :items="items" @changeSelect="changeSelect" />
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin'
})

const headers = ref([
    { text: "Tên danh mục", value: "name" },
    { text: "Số danh mục con", value: "cateChildQty", sortable: true },
    { text: "Số sản phẩm", value: "prodQty", sortable: true },
    { text: "Đơn đã bán", value: "prodSoldQty", sortable: true }
])

const items = ([
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false }
])

const changeSelect = (itemId, selectedValue) => {
  items.value = items.map(item =>
    item.id === itemId ? { ...item, isSelected: selectedValue } : item
  );
};


</script>