<template>
    <div class="flex flex-col">
        <div class="flex uppercase font-semibold text-gray-600 text-sm">
            <IconMinus />
            <div class="uppercase">Chuyên mục</div>
        </div>
        <ul class="flex flex-col px-5 gap-5">
            <li class="flex">
                <IconMapPin />
                <div class="ml-2">
                    <NuxtLink to="/admin/category">Tổng quan</NuxtLink>
                </div>
            </li>
            <li class="flex">
                <IconMapPin />
                <div class="ml-2">
                    <NuxtLink to="/admin/category">Danh sách</NuxtLink>
                </div>
            </li>
            <li class="flex">
                <IconMapPin />
                <div class="ml-2">
                    <NuxtLink to="/admin/category">Thêm mới</NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>