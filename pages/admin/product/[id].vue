<template>
    <Adminproduct.value.resultBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sản phẩm: {{ product.result.name }}</div>
            <div class="flex gap-x-3">
                <div class="flex flex-col gap-y-3 w-1/2">
                    <div class="flex product.value.results-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Nhà cung cấp
                        </div>
                        <div class="text-gray-600 font-semibold">
                            {{ product.result.supplier.name }}
                        </div>
                    </div>
                    <div class="flex product.value.results-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Danh mục
                        </div>
                        <div class="text-gray-600 font-semibold">
                            {{ product.result.category.categoryName }}
                        </div>
                    </div>

                    <div class="flex product.value.results-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên</div>
                        <div class="text-gray-600 font-semibold">
                            {{ product.result.name }}
                        </div>
                    </div>
                    <div class="flex product.value.results-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Mô tả</div>
                        <div class="text-gray-600 font-semibold">{{ product.result.description }}</div>
                    </div>
                    <div class="flex product.value.results-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô tả</div>
                        <div class="text-gray-600 font-semibold">
                            {{ product.result.picture }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3 w-1/2">
                    <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giá</div>
                    <div class="text-gray-600 font-semibold">
                        {{ product.result.price }}
                    </div>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá</div>
                    <div class="text-gray-600 font-semibold">
                        {{ product.result.discount }}
                    </div>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá
                    </div>
                    <div class="text-gray-600 font-semibold">
                        {{ product.result.discountAvailable ? 'Giảm' : 'Không' }}
                    </div>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Trạng thái
                    </div>
                    <div class="text-gray-600 font-semibold">
                        {{ product.result.productAvailable ? 'Active' : 'Disactive' }}
                    </div>
                </div>
                </div>
                
            </div>
        </div>

        <div class="w-1/3 flex gap-x-3 mx-auto">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editProduct">Sửa</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
const idProd = useRoute().params.id;
const { $objstring } = useNuxtApp();

const { data: product } = await useFetch('http://localhost:3000/api/products/' + idProd);

const { data: categories } = await useFetch('http://localhost:3000/api/category');

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');


const editProduct = async () => {
    const formData = ref({
        name: product.value.result.name,
        description: product.value.result.description,
        picture: product.value.result.picture,
        price: product.value.result.price,
        discount: product.value.result.discount,
        discount_available: product.value.result.discountAvailable ? 1 : 0,
        product_available: product.value.result.productAvailable ? 1 : 0,
        supplier_id: product.value.result.supplierId,
        category_id: product.value.result.categoryId
    });

    await useFetch('http://localhost:3000/api/products/' + idProd, {
        method: 'PATCH',
        body: $objstring(formData.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Edit success');
                // useRouter().back()
            } else {
                alert('Edit failed')
            }
        }
    })
}

</script>