<template>
    <div
        class="border-r border-gray-500 min-h-screen flex-col space-y-4 font-bold h-screen overflow-y-auto sticky top-0 scroll-custom">
        <div class="flex items-center sticky top-0 bg-admin pt-5 pb-2 px-3">
            <div class="w-3/5">
                <NuxtLink to="/admin"><img src="/img/logo.png" /></NuxtLink>
            </div>
            <IconCollapseLeft class="w-1/5 max-h-6 ml-auto" />
        </div>
        <AdminLeftBarHeadMenu />

        <AdminLeftBarItem v-for="route in dataRoute" :name="route.name" :data="route.data"  />


    </div>
</template>
<script setup>
const dataRoute = ref([
    {
        name: 'Danh mục sản phẩm',
        data: [
            {
                url: '/admin/category',
                name: 'Tổng quan'
            },
            {
                url: '/admin/category/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Danh mục con',
        data: [
            {
                url: '/admin/subcategory',
                name: 'Danh sách'
            },
            {
                url: '/admin/subcategory/add',
                name: 'Thêm mới'
            }
        ]
    }
])
</script>
<style>
.scroll-custom::-webkit-scrollbar {
    width: 1px;
    /* Độ rộng của thanh scrollbar */
}

.scroll-custom::-webkit-scrollbar-thumb {
    background-color: #888;
    /* Màu của thumb (phần kéo) */
    border-radius: 4px;
    /* Bo góc cho thumb */
}

.scroll-custom::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* Màu của thumb khi hover */
}
</style>