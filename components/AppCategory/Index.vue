<template>
    <div class="flex flex-col bg-white mt-4">
        <div class="font-bold p-4 uppercase">
            <NuxtLink :to="'/good_cate/' + goodCate.id">Ngành hàng: {{ goodCate.goodName }}</NuxtLink>
        </div>
        <div class="flex border-gray-300 border-b pb-4">
            <div class="flex py-2 px-8 items-center">
                <button @click="changeTab(category.id)"
                    class="mr-4 px-4 py-2" :class="{
                        'text-rose-700 border-rose-700 border rounded-lg': listItem[category.id]
                    }"
                    v-for="category in categories.result" :id="category.id">{{ category.categoryName }}</button>
            </div>
        </div>
        <div class="flex py-4 gap-x-3">
            <div class="pl-8 w-1/3">
                <NuxtLink :to="'/good_cate/' + goodCate.id"><img :src="goodCate.picture" class="h-80 w-full">
                </NuxtLink>
            </div>
            <template v-for="category in categories.result">
                <AppCategoryItem  :id="category.id" :category="category" v-if="listItem[category.id]"/>
            </template>

        </div>


    </div>
</template>
<script setup>
const props = defineProps({
    goodCate: {
        type: Object,
        required: true
    }
})

const goodCate = ref(props.goodCate);

const { data: categories } = await useFetch('http://localhost:3000/api/category/', {
    method: 'GET',
    query: {
        goodCateId: goodCate.value.id
    }
});

const listItem = ref({});

categories.value.result.forEach((item, idx) => {
    if(idx==0){
        listItem.value[item.id] = true;
    } else {
        listItem.value[item.id] = false;
    }
})

const changeTab = (idx) => {
    console.log('chantab', idx)
    for(const item in listItem.value) {
        console.log('item', item)
        if(item == idx)
            listItem.value[item] = true;
        else
            listItem.value[item] = false;
    }

    console.log(listItem.value)
}


</script>