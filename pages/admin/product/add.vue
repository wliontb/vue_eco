<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
                <div class="text-lg font-bold text-gray-700" id="add">Thêm sản phẩm mới :</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Ngành hàng
                        </div>
                        <select
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                            <option value="1">Sách</option>
                            <option value="1">Truyện</option>
                            <option value="1">Vở</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Nhà cung cấp
                        </div>
                        <select
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                            <option value="1">Sách</option>
                            <option value="1">Truyện</option>
                            <option value="1">Vở</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                        <textarea name="" id="" placeholder="nhập mô tả"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Số lượng mỗi đơn vị</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">đơn vị đo kích thước</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">đơn vị giá</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">MSRP</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Kích thước có sẵn</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Màu sắc có sẵn</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Giảm giá</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Đơn vị cân nặng</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Đơn vị cân nặng</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Unit in stocks</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Unit on order</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Reorder level</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tình trạng giảm giá</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">vị trí hiện tại</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">vị trí xếp hạng</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Ghi chú</div>
                        <input type="text" name="" id="" placeholder="nhập tên danh mục"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Ảnh đại diện</div>
                        <input type="text" name="" id="" placeholder="https://"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tình trạng sản phẩm
                        </div>
                        <select
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                            <option value="1">Active</option>
                            <option value="1">Disactive</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="w-2/3 flex ml-auto gap-x-3">
                        <button class="text-white bg-green-600 rounded py-1 px-4">Thêm</button>
                        <button class="text-gray-400 border border-gray-400 rounded py-1 px-4">Reset</button>
                    </div>
                </div>
            </div>

        <div class="flex flex-col gap-y-3 mx-auto">
            <div class="w-1/3 flex gap-x-3">
                <button class="text-white bg-green-500 rounded py-1 px-4" @click="addCate">Thêm</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="resetCate">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})

const category = ref({

})

const { data: goodCates } = await useFetch('http://localhost:3000/api/goods-category');

const resetCate = () => {

}

const addCate = async () => {
    await useFetch('http://localhost:3000/api/category', {
        method: 'POST',
        body: category,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success')
            } else {
                alert('Add failed')
            }
        }
    })
}

</script>