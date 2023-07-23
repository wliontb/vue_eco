<template>
    <div class="flex bg-admin text-gray-200">
        <div class="w-1/6 border-r border-gray-500 min-h-screen flex-col pt-5 px-3 space-y-4 font-bold">
            <div class="flex items-center">
                <div class="w-3/5">
                    <img src="/img/logo.png" />
                </div>
                <IconCollapseLeft class="w-1/5 max-h-6 ml-auto" />
            </div>
            <div class="flex justify-between items-center rounded px-2.5 py-2 bg-slate-600">
                <div class="w-3/5 flex">
                    <IconHome />
                    <div class="ml-2">
                        Dashboards
                    </div>
                </div>
                <div class="w-1/5 flex items-center">
                    <div class="bg-red-700 text-white rounded-lg p-0.5 text-xs">New</div>
                    <IconDown class="max-h-4" />
                </div>
            </div>
            <div class="flex items-center px-2 py-1">
                <IconStop />
                <div class="ml-2">CRM</div>
            </div>
            <div class="flex items-center px-2 py-1">
                <IconStop />
                <div class="ml-2">CRM</div>
            </div>
            <div class="flex items-center px-2 py-1">
                <IconStop />
                <div class="ml-2">CRM</div>
            </div>
            <div class="flex flex-col">
                <div class="flex uppercase font-semibold text-gray-600 text-sm">
                    <IconMinus />
                    <div>Apps & pages</div>
                </div>
                <ul class="flex flex-col px-2 gap-5">
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <div class="flex uppercase font-semibold text-gray-600 text-sm">
                    <IconMinus />
                    <div>Apps & pages</div>
                </div>
                <ul class="flex flex-col px-2 gap-5">
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <div class="flex uppercase font-semibold text-gray-600 text-sm">
                    <IconMinus />
                    <div>Apps & pages</div>
                </div>
                <ul class="flex flex-col px-2 gap-5">
                    <li class="flex items-center">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                        <IconRight class="max-h-4 ml-auto font-bold" />
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <div class="flex uppercase font-semibold text-gray-600 text-sm">
                    <IconMinus />
                    <div>Apps & pages</div>
                </div>
                <ul class="flex flex-col px-2 gap-5">
                    <li class="flex items-center">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                        <IconRight class="max-h-4 ml-auto font-bold" />
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                    <li class="flex">
                        <IconMapPin />
                        <div class="ml-2">
                            Email
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-5/6 px-5 flex flex-col relative">
            <div class="flex pt-5 transition duration-700" :class="{
                'sticky top-0 border rounded-md px-4 pb-5 border-gray-500 border-t-0 rounded-tl-none rounded-tr-none backdrop-blur-lg': addClassScroll
            }">
                <form class="flex space-x-2 items-center">
                    <button>
                        <IconSearch />
                    </button>
                    <input type="text" placeholder="Search" class="bg-admin">
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
            <div>
                <slot />
                <ItemCategoryIndex />
            </div>
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