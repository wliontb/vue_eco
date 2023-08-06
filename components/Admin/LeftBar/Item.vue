<template>
    <div class="flex flex-col">
        <div class="flex uppercase font-semibold text-gray-600 text-sm">
            <IconMinus />
            <div class="uppercase">{{ name || 'Danh mục' }}</div>
        </div>
        <ul class="flex flex-col px-5 gap-5">
            <li class="flex" v-for="item in data">
                <IconMapPin />
                <div class="ml-2">
                    <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps(['name', 'data'])

</script>