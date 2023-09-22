<template>
    <div class="flex flex-col">
        <table class="table-auto border-collapse">
            <thead>
                <tr class="bg-gray-200">
                    <th class="p-2 text-center">
                        <input type="checkbox" @click="toggleAllCheckbox()">
                    </th>
                    <th v-for="item in headers" :key="item"
                        class="text-gray-500 text-center uppercase font-semibold text-sm py-2.5 px-5">{{
                            item.text }}</th>
                    <th class="text-center text-gray-500 uppercase font-semibold text-sm" v-if="showAction">Tác vụ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in displayedItems" :key="item.id" class=" border-b">

                    <td class="text-center">
                        <input type="checkbox" class="outline-gray-500" v-model="item.isSelected"
                            @change="$emit('changeSelect', item.id, item.isSelected)" />
                    </td>

                    <td class="text-center px-5 py-2.5 text-sm text-gray-500" v-for="header in headers" :key="header"
                        v-html="item[header.value]">
                    </td>
                    <td class="text-center p-4" v-if="showAction">
                        <NuxtLink :to="`${route.path}/${item.id}`" class="rounded bg-sky-500 text-white px-3 py-1.5"
                            v-if="showView">Xem</NuxtLink>
                        <NuxtLink :to="`${route.path}/edit/${item.id}`"
                            class="rounded bg-orange-500 text-white px-3 py-1.5 mx-1">Sửa</NuxtLink>
                        <NuxtLink :to="`${route.path}/remove/${item.id}`" class="rounded bg-red-500 text-white px-3 py-1.5">
                            Xóa</NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- pagination -->
        <div class="flex px-4 py-2 gap-x-2 justify-end">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                class="border px-2 py-1 bg-sky-500 text-white rounded">Trang trước</button>
            <div v-for="page in totalPages" :key="page">
                <button @click="goToPage(page)" class="border px-2 py-1 bg-sky-500 text-white rounded"
                    :class="{ '!bg-red-500': currentPage === page }">{{ page }}</button>
            </div>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="border px-2 py-1 bg-sky-500 text-white rounded">Trang sau</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const route = useRoute();
const currentPage = ref(1);

const checkboxCheck = ref(false);

const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    showAction: {
        type: Boolean,
        default: true
    },
    showView: {
        type: Boolean,
        default: false
    },
    max: {
        type: Number,
        default: 5
    }
});

const items = ref(props.items);

const displayedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * props.max;
    const endIndex = startIndex + props.max;
    return items.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(items.value.length / props.max);
});

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

</script>