<template>
    <div class="flex items-center border-2 rounded-lg p-3">
        <button class=" text-gray-400 font-bold w-1/3" @click="decreaseCount">
            -
        </button>
        <input class="w-1/3 text-center font-bold focus:border-none" type="number" :value="count">
        <button class=" text-gray-400 font-bold w-1/3" @click="increaseCount">
            +
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const count = ref(0);

const decreaseCount = () => {
    if (count.value > 0) {
        count.value--;
    } else {
        alert("Giá trị không được nhỏ hơn 0");
    }
};

const increaseCount = () => {
    count.value++;
};
</script>
  