<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sửa sản phẩm con:</div>
            <div class="flex flex-col gap-y-3">
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên sản phẩm con
                    </div>
                    <input type="text" v-model="prodChild.result.nameDetail" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô tả
                    </div>
                    <input type="text" v-model="prodChild.result.picture" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giá
                    </div>
                    <input type="number" v-model="prodChild.result.price" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Số lượng
                    </div>
                    <input type="number" v-model="prodChild.result.qty" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>

                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá</div>
                    <input type="text" v-model="prodChild.result.discount" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Trạng thái sale
                    </div>
                    <select v-model="prodChild.result.discountAvailable"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin text-sm ">
                        <option value="">Chọn trạng thái</option>
                        <option value="true">Giảm</option>
                        <option value="false">Không giảm</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="w-1/3 flex gap-x-3 mx-auto">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editChild">Sửa</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
const idChild = useRoute().params.idChild;
const { $objstring } = useNuxtApp();

const {data: prodChild} = await useFetch('http://localhost:3000/api/productdetails/' + idChild);

const editChild = async () => {
    await useFetch('http://localhost:3000/api/productdetails/' + idChild, {
        method: 'PATCH',
        body: $objstring(prodChild.value.result),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Edit success');
                useRouter().back();
            } else {
                alert('Edit failed')
            }
        }
    })
}

</script>