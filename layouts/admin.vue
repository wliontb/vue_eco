<template>
    <div class="flex bg-admin text-gray-200">
        <AdminLeftBar class="w-left" />
        <div class="w-right px-5 flex flex-col relative gap-y-5">
            <div class="flex pt-4 transition duration-700 mb-8" :class="{
                'sticky top-0 border rounded-md px-4 pb-4 border-gray-500 border-t-0 rounded-tl-none rounded-tr-none bg-hehe': addClassScroll
            }">
                <form class="flex space-x-2 items-center">
                    <button>
                        <IconSearch />
                    </button>
                    <input type="text" placeholder="Search" class="bg-transparent">
                </form>
                <div class="flex ml-auto space-x-2 items-center justify-end">
                    <IconLanguage />
                    <IconNight />
                    <IconBell />
                    <div class="rounded-full bg-rose-500 p-1.5">
                        adu
                    </div>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const addClassScroll = ref(false);

if (process.client) {
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            addClassScroll.value = false;
        }
        if (window.scrollY > 5) {
            addClassScroll.value = true;
        }
    });
}


</script>
<style>
.w-left {
    width: 13%;
}

.w-right {
    width: 87%;
}

.bg-hehe {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    background-color: rgb(40, 42, 66, .9);
}
</style>