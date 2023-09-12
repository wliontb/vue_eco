<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sản phẩm: {{ product.result.name }}</div>

            <div class="flex flex-col gap-y-3">
                <table class="table-auto shadow-sm">
                    <thead>
                        <tr class="text-gray-700 text-left">
                            <th>Tên</th>
                            <th>Thuộc tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Nhà cung cấp</td>
                            <td class="border p-3 w-2/3">{{ product.result.supplier.name }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Danh mục</td>
                            <td class="border p-3 w-2/3">{{ product.result.category.categoryName }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Tên</td>
                            <td class="border p-3 w-2/3">{{ product.result.name }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Mô tả</td>
                            <td class="border p-3 w-2/3">{{ product.result.description }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Ảnh đại diện</td>
                            <td class="border p-3 w-2/3">{{ product.result.picture }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giá</td>
                            <td class="border p-3 w-2/3">{{ product.result.price }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giảm giá</td>
                            <td class="border p-3 w-2/3">{{ product.result.discount }} {{ product.result.discountAvailable ?
                                'Giảm' : 'Không' }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Trạng thái</td>
                            <td class="border p-3 w-2/3">{{ product.result.productAvailable ? 'Active' : 'Disactive' }}</td>
                        </tr>
                        <tr class="text-gray-600" v-for="item in itemProps.result">
                            <td class="border p-3 w-1/3">{{ item.nameProp }}</td>
                            <td class="border p-3 w-2/3">{{ item.valueProp }}</td>
                        </tr>
                        <tr class="text-gray-600" :class="{ hidden: hiddenAddProdPropBox }">
                            <td class="border p-3 w-1/3">
                                <input v-model="prodProp.nameProp" type="text"
                                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2"
                                    placeholder="nhập tên thuộc tính">
                            </td>
                            <td class="border p-3 w-2/3">
                                <input v-model="prodProp.valueProp" type="text"
                                    class=" text-gray-500 border border-gray-500 outline-none rounded p-2"
                                    placeholder="nhập giá trị thuộc tính">
                                <button class="rounded text-white bg-green-500 p-2 uppercase text-sm font-semibold ml-3"
                                    @click="addProductProp">Thêm</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="w-1/3 flex gap-x-3">
            <button class="text-white rounded py-1 px-4 flex items-center" @click="toggleProductProp" :class="{
                'bg-red-500': !hiddenAddProdPropBox,
                'bg-green-500': hiddenAddProdPropBox,
            }">
                <IconPlus :class="{hidden: !hiddenAddProdPropBox}" />
                <IconMinus :class="{hidden: hiddenAddProdPropBox}" />
                thuộc tính
            </button>
            <button class="text-white bg-green-500 rounded py-1 px-4 flex items-center" @click="toggleProductDetail">
                <IconPlus />sản phẩm con
            </button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
        <div class="border border-green-500 rounded p-4 flex flex-col gap-y-3" :class="{ hidden: hiddenAddProdDetailBox }">
            <div class="flex">
                <div class="w-1/2 text-red-500">Tên sản phẩm con</div>
                <input v-model="prodDetail.nameDetail" type="text"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2"
                    placeholder="nhập tên sản phẩm con">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Ảnh mô tả</div>
                <input v-model="prodDetail.picture" type="text"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Số lượng</div>
                <input v-model="prodDetail.qty" type="number" min="0"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Giá</div>
                <input v-model="prodDetail.price" type="number"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Giảm giá</div>
                <input v-model="prodDetail.discount" type="number"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex">
                <div class="w-1/2 text-red-500">Đang giảm giá</div>
                <select v-model="prodDetail.discountAvailable"
                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2">
                    <option value="true">Giảm</option>
                    <option value="false">Không</option>
                </select>
            </div>
            <div class="flex mx-auto w-1/6">
                <button class="w-1/2 border rounded text-white bg-green-500" @click="addProductDetail">Thêm</button>
                <button class="w-1/2 border rounded text-white bg-sky-500">Reset</button>
            </div>
        </div>
        <AdminItemTable :headers="headers" v-model:items="items" />
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const idProd = useRoute().params.id;
const { $objstring } = useNuxtApp();

const hiddenAddProdDetailBox = ref(true);
const hiddenAddProdPropBox = ref(true);

const { data: product } = await useFetch('http://localhost:3000/api/products/' + idProd);

const { data: productDetails } = await useFetch('http://localhost:3000/api/productdetails', {
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

const toggleProductProp = () => {
    hiddenAddProdPropBox.value = !hiddenAddProdPropBox.value;
}

const prodProp = ref({
    nameProp: '',
    valueProp: '',
    productId: idProd
})

const prodDetail = ref({
    nameDetail: '',
    price: 0,
    discount: 0,
    discountAvailable: false,
    picture: 'imgur',
    qty: 1,
    productId: idProd
})

const {data: itemProps} = await useFetch('http://localhost:3000/api/productprops',{
    method: 'GET',
    query: {
        product: idProd
    },
    pick: ['result']
})

const addProductProp = async () => {
    await useFetch('http://localhost:3000/api/productprops/', {
        method: 'POST',
        body: $objstring(prodProp.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success');
                const item = response._data.result;
                itemProps.value.result.push({
                    nameProp: item.nameProp,
                    valueProp: item.valueProp
                })
                // thêm hàng mới có giá trị item.name và item.value
            } else {
                alert('Add failed')
            }
        }
    })
}

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