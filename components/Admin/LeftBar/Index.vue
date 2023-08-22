<template>
    <div
        class="min-h-screen flex-col space-y-4 font-bold h-screen overflow-y-auto sticky top-0 scroll-custom">
        <div class="flex items-center sticky top-0 pt-5 pb-2 px-5 z-50 bg-admin">
            <div class="w-3/5">
                <NuxtLink to="/admin"><img src="/img/logo.png" /></NuxtLink>
            </div>
            <IconCollapseLeft class="w-1/5 max-h-6 ml-auto" />
        </div>
        <AdminLeftBarHeadMenu class="px-2" />

        <AdminLeftBarItem class="px-2" v-for="route in dataRoute" :name="route.name" :data="route.data" />


    </div>
</template>
<script setup>
const dataRoute = ref([
    {
        name: 'Ngành hàng',
        data: [
            {
                url: '/admin/goodcategory',
                name: 'Tổng quan'
            },
            {
                url: '/admin/goodcategory/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Danh mục',
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
        name: 'Nhà cung cấp',
        data: [
            {
                url: '/admin/supplier',
                name: 'Tổng quan'
            },
            {
                url: '/admin/supplier/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Sản phẩm',
        data: [
            {
                url: '/admin/product',
                name: 'Tổng quan'
            },
            {
                url: '/admin/product/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Khách hàng',
        data: [
            {
                url: '/admin/customer',
                name: 'Tổng quan'
            },
            {
                url: '/admin/product/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Shipper',
        data: [
            {
                url: '/admin/shipper',
                name: 'Tổng quan'
            },
            {
                url: '/admin/product/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Hình thức thanh toán',
        data: [
            {
                url: '/admin/payment',
                name: 'Tổng quan'
            },
            {
                url: '/admin/product/add',
                name: 'Thêm mới'
            }
        ]
    },
])
</script>
<style>
.scroll-custom::-webkit-scrollbar {
    width: 1px;
    /* Độ rộng của thanh scrollbar */
}

.scroll-custom::-webkit-scrollbar-thumb {
    /* background-color: #ccc; */
    /* Màu của thumb (phần kéo) */
    border-radius: 4px;
    /* Bo góc cho thumb */
}

.scroll-custom::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* Màu của thumb khi hover */
}
</style>