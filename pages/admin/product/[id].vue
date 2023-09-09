<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
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
        <AdminItemTable :headers="headers"  v-model:items="items" />
        <div class="w-1/3 flex gap-x-3 mx-auto">
            <button class="text-white bg-green-500 rounded py-1 px-4 flex items-center" @click="toggleProductDetail"><IconPlus/>sản phẩm con</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
        <div class="border border-green-500 rounded p-4 flex flex-col gap-y-3" :class="{hidden: hiddenAddProdDetailBox}">
            <div class="flex">
                <div class="w-1/2 text-red-500">Tên sản phẩm con</div>
                <input v-model="prodDetail.nameDetail" type="text" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2" placeholder="nhập tên sản phẩm con">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Ảnh mô tả</div>
                <input v-model="prodDetail.picture" type="text" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Số lượng</div>
                <input v-model="prodDetail.qty" type="number" min="0" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Giá</div>
                <input v-model="prodDetail.price" type="number" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Giảm giá</div>
                <input v-model="prodDetail.discount" type="number" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Đang giảm giá</div>
                <select v-model="prodDetail.discountAvailable" class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
                    <option value="true">Giảm</option>
                    <option value="false">Không</option>
                </select>
            </div>
            <div class="flex mx-auto w-1/6">
                <button class="w-1/2 border rounded text-white bg-green-500" @click="addProductDetail">Thêm</button>
                <button class="w-1/2 border rounded text-white bg-sky-500">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
const idProd = useRoute().params.id;
const { $objstring } = useNuxtApp();
const hiddenAddProdDetailBox = ref(true);

const { data: product } = await useFetch('http://localhost:3000/api/products/' + idProd);

const {data: productDetails} = await useFetch('http://localhost:3000/api/productdetails', {
    method: 'GET',
    query: {
        product: idProd
    }
});

const headers = ref([
    { text: "Sản phẩm con", value: "nameDetail" },
    { text: "Ảnh", value: "picture", sortable: true },
    { text: "Giá", value: "price", sortable: true },
    { text: "Giảm giá", value: "discount", sortable: true },
    { text: "Số lượng", value: "qty", sortable: true },
])

const items = ref([])
items.value = productDetails.value.result.map((item) => {
    return {
        id: item.id,
        nameDetail: item.nameDetail,
        picture: item.picture,
        price: item.price,
        discount: item.discount,
        qty: item.qty
    }
})

const toggleProductDetail = () => {
    hiddenAddProdDetailBox.value = !hiddenAddProdDetailBox.value;
}

const prodDetail = ref({
    nameDetail: '',
    price: 0,
    discount: 0,
    discountAvailable: false,
    picture: 'imgur',
    qty: 1,
    productId: idProd
})

const addProductDetail = async () => {

    await useFetch('http://localhost:3000/api/productdetails/', {
        method: 'POST',
        body: $objstring(prodDetail.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success');
                const item = response._data.result;
                items.value.unshift({
                    id: item.id,
                    nameDetail: item.nameDetail,
                    picture: item.picture,
                    price: item.price,
                    discount: item.discount,
                    qty: item.qty
                })
                // useRouter().back()
            } else {
                alert('Add failed')
            }
        }
    })
}

</script>