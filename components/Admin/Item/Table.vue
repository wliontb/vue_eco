<template>
    <table class="table-auto border-collapse">
        <thead>
            <tr class="bg-gray-700">
                <th class="p-2">
                    <input type="checkbox">
                </th> <!-- Add an empty header for the checkbox column -->
                <th v-for="item in headers" :key="item"
                    class="text-left uppercase font-semibold text-sm py-2.5 px-5">{{ item.text }}</th>
                <th class="text-center">Tác vụ</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id" class="border border-gray-600">
                <!-- Checkbox column -->
                <td class="text-center">
                    <input type="checkbox" v-model="item.isSelected"
                        @change="$emit('changeSelect', item.id, item.isSelected)" />
                </td>
                <!-- Data columns -->
                <td class=" text-left px-5 text-sm" v-for="header in headers" :key="header" v-html="item[header.value]">
                </td>
                <td class="text-center">
                    <IconThreeDot />
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { ref } from 'vue';


const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});

const headers = ref(props.headers);
const items = ref(props.items);

</script>