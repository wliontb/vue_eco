<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg border border-gray-600">
        <div class="text-lg font-semibold" id="add">Thêm nhà cung cấp</div>
        <div class="flex gap-x-3">
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên</div>
                    <input type="text" name="" id="" placeholder="nhập tên nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                    <textarea name="" id="" placeholder="nhập mô tả cho nhà cung cấp"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Số điện thoại</div>
                    <input type="text" name="" id="" placeholder="nhập số điện thoại"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Email</div>
                    <input type="email" name="" id="" placeholder="nhập email"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Địa chỉ</div>
                    <textarea name="" id="" placeholder="nhập địa chỉ"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Thành phố</div>
                    <input type="text" name="" id="" placeholder="nhập thành phố"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-y-3">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Quốc gia</div>
                    <input type="text" name="" id="" placeholder="nhập quốc gia"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mã bưu điện</div>
                    <input type="text" name="" id="" placeholder="nhập mã bưu cục"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Trang web</div>
                    <input type="text" name="" id="" placeholder="nhập đường dẫn tới trang web"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Logo</div>
                    <input type="text" name="" id="" placeholder="nhập url logo"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Xếp hạng</div>
                    <input type="text" name="" id="" placeholder="nhập số thứ tự trên index"
                        class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Trạng thái
                    </div>
                    <select
                        class="w-2/3 px-2 py-2 border-gray-600 rounded-lg border-2 outline-none  bg-admin text-gray-400 ">
                        <option value="1">Hoạt động</option>
                        <option value="1">Tắt hoạt động</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-green-600 rounded py-1 px-4">Thêm</button>
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