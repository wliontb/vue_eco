<template>
    hehe
</template>
<script setup>
const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})

const category = ref(props.category);

const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        categoryId: category.value.id,
        limit: 4
    }
});

</script>