<template>
    <div class="flex items-center border-2 rounded-lg px-3 py-2">
        <button class=" text-gray-400 font-bold w-1/3" @click="decreaseCount">
            -
        </button>
        <input class="w-1/3 text-center font-bold focus:border-none" type="number" v-model="count">
        <button class=" text-gray-400 font-bold w-1/3" @click="increaseCount">
            +
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    count: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 2
    }
});

const count = ref(props.count);
const max = ref(props.max);

const decreaseCount = () => {
    if (count.value > 0) {
        count.value--;
    } else {
        alert("Giá trị không được nhỏ hơn 0");
    }
};

const increaseCount = () => {
    if (count.value < max.value) {
        count.value++;
    } else {
        alert("Giá trị không được lớn hơn "+max.value);
    }
};
</script>
  