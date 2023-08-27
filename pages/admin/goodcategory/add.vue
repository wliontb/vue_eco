<template>
    <div class="flex bg-white shadow-sm text-gray-500 font-semibold p-4 rounded">
        Admin > Supplier > Add
    </div>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white">
        <div class="text-sm font-semibold text-gray-500 uppercase" id="add">Thêm nhà cung cấp mới</div>
        <div class="flex gap-x-10">
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Tên</div>
                    <input type="text" v-model="supplier.name" placeholder="nhập tên nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Mô tả</div>
                    <textarea v-model="supplier.description" placeholder="nhập mô tả cho nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Số điện thoại</div>
                    <input type="text" v-model="supplier.phone" placeholder="nhập số điện thoại"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Email</div>
                    <input type="email" v-model="supplier.email" placeholder="nhập email"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Địa chỉ</div>
                    <textarea v-model="supplier.address" placeholder="nhập địa chỉ"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Thành phố</div>
                    <input type="text" v-model="supplier.city" placeholder="nhập thành phố"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Quốc gia</div>
                    <input type="text" v-model="supplier.country" placeholder="nhập quốc gia"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Mã bưu điện</div>
                    <input type="text" v-model="supplier.postal_code" placeholder="nhập mã bưu cục"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Trang web</div>
                    <input type="text" v-model="supplier.url" placeholder="nhập đường dẫn tới trang web"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Logo</div>
                    <input type="text" v-model="supplier.logo" placeholder="nhập url logo"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Xếp hạng</div>
                    <input type="number" min="1" v-model="supplier.ranking" placeholder="nhập số thứ tự trên index"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-500 after:content-[':'] after:ml-1.5">Trạng thái
                    </div>
                    <select v-model="supplier.active"
                        class="w-2/3 px-2 py-2 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin">
                        <option value="true">Hoạt động</option>
                        <option value="false">Tắt hoạt động</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-green-600 rounded py-1 px-4" @click="createSupplier()">Thêm</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})

const supplier = ref({
    "name": "An An",
    "description": "Test mô tả",
    "phone": "0987196812",
    "email": "anan@gmail.com",
    "address": "Hưng Yên",
    "city": "Hưng Yên",
    "country": "Việt Nam",
    "postal_code": "0123456",
    "url": "https://anan.vn",
    "logo": "imgur.com",
    "ranking": 1,
    "active": false
})

const createSupplier = async () => {
    console.log('create');
    await useCustomFetch('api/suppliers', {
        method: 'POST',
        body: supplier.value,
        async onResponse({
            request, response, options
        }) {
            if(response.ok) {
                console.log(response._data.result)
            } else {
                alert('Tạo supplier không thành công')
            }
        }
    })
}

</script>