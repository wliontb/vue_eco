<template>
    <div class="flex gap-x-5">
        <div class="flex flex-col w-2/5 gap-y-5">
            <div class="flex shadow-xl rounded-lg flex-col p-5 gap-y-3 h-fit bg-white">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize text-gray-500">Tổng quan</div>
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg text-gray-500">100</div>
                            <div class="text-sm text-gray-500">Nhà cung cấp</div>
                        </div>
                    </div>
                    <!-- <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg">200</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg ">3000</div>
                            <div class="text-sm text-gray-400">Đã bán</div>
                        </div>
                    </div> -->
                </div>

            </div>

        </div>
        <div class="w-3/5 flex flex-col gap-y-5">
            <div class="flex p-5 flex-col shadow-xl bg-white rounded-lg gap-y-3">
                <div class="font-bold text-lg text-gray-500">Tìm kiếm theo :</div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400 outline-none border border-gray-200">
                            <option value="" disabled selected>Tên ngành hàng</option>
                            <option value="">Sách</option>
                            <option value="">Văn phòng phẩm</option>
                            <option value="">Điện thoại</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Plan</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Status</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="flex flex-col pt-5 bg-white shadow-xl rounded-md gap-y-5">
        <div class="flex px-5">
            <div
                class="border border-gray-300 px-3 py-1.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                Export
            </div>
            <div class="ml-auto flex gap-x-5">
                <input type="text"
                    class="border border-gray-200 bg-admin rounded px-3 py-1.5 focus:border-red-500 outline-none placeholder:text-sm"
                    placeholder="Tìm danh mục...">
                <NuxtLink to="/admin/supplier/add" class="bg-green-500 text-white px-3 py-1.5 rounded">
                    Thêm danh mục
                </NuxtLink>
            </div>
        </div>
        <AdminItemTable :headers="headers" v-model:items="items" @changeSelect="changeSelect" @removeItem="removeItem" />
    </div>
</template>
<script setup>
import { ref } from "vue";

definePageMeta({
    layout: 'admin'
})

const headers = ref([
    { text: "Tên", value: "name" },
    { text: "Email", value: "email", sortable: true },
    { text: "SĐT", value: "phone", sortable: true },
    { text: "url", value: "url", sortable: true },
    { text: "Mô tả", value: "description", sortable: true },
    { text: "Địa chỉ", value: "address", sortable: true },
    { text: "Logo", value: "logo", sortable: true },
    { text: "Số sản phẩm", value: "prodQty", sortable: true }
])

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


const { data } = await useFetch('http://localhost:3000/api/suppliers');
let items = ref([]);
items.value = data.value.result.map((item) => {
    return {
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        url: item.url,
        prodQty: 0,
        description: item.description,
        address: item.address,
        logo: item.logo,
        isSelected: false
    }
});

const removeItem = async (itemId) => {
    await useFetch(`http://localhost:3000/api/suppliers/${itemId}`, {
        method: 'DELETE',
        onResponse(response) {
            console.log(response)
            if(response.ok) {
                items.value = items.value.filter(item => item.id !== itemId)
                alert('Remove item successfully')
            }
        }
    })
}

</script>