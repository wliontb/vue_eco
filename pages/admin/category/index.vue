<template>
    <div class="flex p-5 flex-col border border-gray-500 rounded-lg gap-y-3">
        <div class="font-bold text-lg">Search Filters</div>
        <div class="flex gap-x-3">
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Role</option>
                </select>
            </div>
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Plan</option>
                </select>
            </div>
            <div class="w-1/3">
                <select name="" id="" class="border border-gray-500 px-5 py-3 rounded-lg bg-admin w-full">
                    <option value="">Select Status</option>
                </select>
            </div>
        </div>
    </div>

    <TableUserDashboard />
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
</script>