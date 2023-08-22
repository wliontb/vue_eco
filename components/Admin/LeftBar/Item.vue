<template>
    <div class="flex flex-col">
        <div class="flex uppercase font-semibold text-gray-300 text-xs items-center">
            <IconMinus />
            <div class="uppercase">{{ name || 'Danh mục' }}</div>
        </div>
        <ul class="flex flex-col px-5 gap-5">
            <li class="flex" v-for="item in data">
                <IconHashtag class="scale-75 text-gray-500" />
                <div class="ml-2 text-gray-500">
                    <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps(['name', 'data'])

</script>