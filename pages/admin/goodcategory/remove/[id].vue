<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white w-2/3 mx-auto">
        <div class="text-sm text-gray-700 font-bold" id="add">Bạn có thật sự muốn xóa ngành hàng: {{ goodCate.good_name }} ?</div>
        <div class="flex md:justify-center">
            <div class="flex gap-x-3">
                <button class="text-white bg-orange-600 rounded py-1 px-4" @click="removeGoodCate">Xóa</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})

const route = useRoute();
const idGoodCate = route.params.id;

const goBack = () => {
    useRouter().back();
}

const goodCate = ref({
    "good_name": "",
    "description": "",
    "picture": "",
    "supplier_id": ""
})

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');

const { data: initGoodCate } = await useFetch('http://localhost:3000/api/goods-category/' + idGoodCate, {
    method: 'GET'
})

goodCate.value = {
    ...initGoodCate.value.result,
    good_name: initGoodCate.value.result.goodName,
    supplier_id: initGoodCate.value.result.supplier.id
}

const removeGoodCate = async () => {
    await useFetch('http://localhost:3000/api/goods-category/' + idGoodCate, {
        method: 'DELETE',
        onResponse({ response }) {
            console.log(response)
            if (response.ok) {
                alert('Remove success')
            } else {
                alert('Remove failed')
            }
        },
    })
}

</script>