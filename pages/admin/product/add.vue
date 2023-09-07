<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
                <div class="text-sm font-bold text-gray-700 uppercase">Thêm sản phẩm mới :</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Nhà cung cấp
                        </div>
                        <select v-model="product.supplier_id"
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin text-sm ">
                            <option value="">Chọn nhà cung cấp</option>
                            <option v-for="sup in suppliers.result" :value="sup.id">{{ sup.name }}</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Danh mục
                        </div>
                        <select v-model="product.category_id"
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                            <option value="">Chọn danh mục</option>
                            <option v-for="cate in categories.result" :value="cate.id">{{ cate.categoryName }}</option>
                        </select>
                    </div>
                    
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên</div>
                        <input type="text" v-model="product.name" placeholder="nhập tên sản phẩm"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Mô tả</div>
                        <textarea v-model="product.description" placeholder="nhập mô tả cho sản phẩm"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div> 
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô tả</div>
                        <input type="text" v-model="product.picture" placeholder="nhập link ảnh mô tả"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giá</div>
                        <input type="number" v-model="product.price" placeholder="nhập giá"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá</div>
                        <input type="number" v-model="product.discount" placeholder="nhập giảm giá"
                            class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá
                        </div>
                        <select v-model="product.discount_available"
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                            <option value="">Chọn trạng thái</option>
                            <option value="1">giảm</option>
                            <option value="0">không giảm</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Trạng thái
                        </div>
                        <select v-model="product.product_available"
                            class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                            <option value="">Chọn trạng thái</option>
                            <option value="1">Active</option>
                            <option value="0">Disactive</option>
                        </select>
                    </div>
                </div>
            </div>

        <div class="flex flex-col gap-y-3 mx-auto">
            <div class="w-1/3 flex gap-x-3">
                <button class="text-white bg-green-500 rounded py-1 px-4" @click="addProduct">Thêm</button>
                <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="resetProduct">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})

const {$objstring} = useNuxtApp();

const product = ref({
    name: '',
    description: '',
    picture: '',
    price: '',
    discount: '',
    discount_available: '',
    product_available: '',
    supplier_id: '',
    category_id: ''
})

const { data: categories } = await useFetch('http://localhost:3000/api/category');

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');

const resetProduct = () => {

}

const addProduct = async () => {
    await useFetch('http://localhost:3000/api/products', {
        method: 'POST',
        body: $objstring(product.value),
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