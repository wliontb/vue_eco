<template>
    <div class="flex space-x-5">
        <div class="w-1/2 flex border border-gray-500 rounded-lg flex-col p-5 gap-y-3 h-fit">
            <div class="flex">
                <div class="flex flex-col">
                    <div class="font-bold text-lg">Sales Overview</div>
                    <div class="text-gray-400 text-sm">Total 42.5k Sales <span class="text-green-400">+18%</span>
                    </div>
                </div>
                <IconThreeDot class="ml-auto" />
            </div>
            <div class="flex">
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-red-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg">8,458</div>
                        <div class="text-sm text-gray-400">Customers</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-green-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg">8,458</div>
                        <div class="text-sm text-gray-400">Customers</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-blue-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg ">8,458</div>
                        <div class="text-sm text-gray-400">Customers</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-1/2 flex space-x-5">
            <div class="w-1/2 flex border border-gray-500 rounded-lg px-5 pt-5 items-center">
                <div class="w-1/2 flex flex-col gap-y-3">
                    <div class="font-bold text-lg">Ratings</div>
                    <div class="bg-rose-200 text-red-500 rounded-full p-0.5 text-center">Year of 2023</div>
                    <div class="font-bold text-lg">8.14k <span class="text-green-500 text-sm">+15.6%</span></div>
                </div>
                <div class="w-1/2 place-self-end">
                    <img src="/img/avatar/boy.png" alt="">
                </div>
            </div>
            <div class="w-1/2 flex border border-gray-500 rounded-lg px-5 pt-5 items-center">
                <div class="w-1/2 flex flex-col gap-y-3">
                    <div class="font-bold text-lg">Ratings</div>
                    <div class="bg-rose-200 text-red-500 rounded-full p-0.5 text-center">Year of 2023</div>
                    <div class="font-bold text-lg">8.14k <span class="text-green-500 text-sm">+15.6%</span></div>
                </div>
                <div class="w-1/2 place-self-end">
                    <img src="/img/avatar/girl.png" alt="">
                </div>
            </div>
        </div>

    </div>
    <div class="flex space-x-5">
        <div class="w-1/2 flex border border-gray-500 rounded-lg flex-col p-5 gap-y-3 bg-red-500">
        </div>
        <div class="w-1/2 flex space-x-5">
            <div class="w-1/2 flex flex-col border border-gray-500 rounded-lg p-5">
                <div class="flex">
                    <div class="w-1/2">
                        <div class="">Total Visits</div>
                        <div class="text-lg font-bold">42.5k</div>
                    </div>
                    <div class="w-1/2 text-green-500 text-right">
                        +18.2%
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/2">
                        Mobile
                    </div>
                    <div class="w-1/2">
                        Desktop
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col border border-gray-500 rounded-lg px-5 pt-5">
                <div class="text-lg font-bold">Sales this month</div>
                <div>Total sale this month</div>
                <div class="text-lg font-semibold">$28,000</div>
            </div>
        </div>
    </div>
    <div class="flex space-x-5">
        <ActivityTimeline />
        <TopReferralSource />
    </div>
    <div class="flex space-x-5">
        <div class="w-2/3 flex gap-x-5">
            <div class="w-2/5 border border-gray-500 rounded-lg flex flex-col h-fit">
                <div class="flex p-5">
                    <div class="w-1/3">
                        <IconPhone class="text-red-500" />
                    </div>
                    <div class="flex flex-col w-2/3">
                        <div class="font-bold text-lg">
                            84K -24%
                        </div>
                        <div class="text-gray-400">Total Impressions</div>
                    </div>
                </div>
                <div class="flex p-5 border-t border-gray-500">
                    <div class="w-1/3">
                        <IconPhone />
                    </div>
                    <div class="flex flex-col w-2/3">
                        <div class="font-bold text-lg">
                            84K -24%
                        </div>
                        <div class="text-gray-400">Total Impressions</div>
                    </div>
                </div>
            </div>
            <div class="w-3/5 flex border border-gray-500 p-5 rounded-lg flex-col gap-y-3">
                <div class="flex flex-col gap-y-1">
                    <div class="font-bold text-lg">Marketing & Sales</div>
                    <div class="text-sm text-gray-400">Total 245.8k Sales <span class="text-green-600">+25%</span>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <img src="/img/logocty.png" class="rounded-lg" alt="">
                    </div>
                    <div class="w-2/3 flex flex-col gap-y-3">
                        <div class="text-lg">Sales Overview</div>
                        <div class="flex flex-wrap gap-y-3">
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <button class="bg-red-900 rounded-md py-0.5 px-3 text-red-500 opacity-90 uppercase">Details</button>
                    <button class="bg-red-700 rounded-md py-0.5 px-3 uppercase">Report</button>
                </div>
            </div>
        </div>
        <div class="w-1/3 flex flex-col border border-gray-500 rounded-lg p-5">
            <div class="flex">
                <div>
                    <div class="font-bold text-lg">Live Visitors</div>
                    <div class="text-sm text-gray-400">Total 890 Visitors Are Live</div>
                </div>
                <div class="ml-auto text-green-500">+78.2%</div>
            </div>

        </div>

    </div>
    <div class="flex space-x-5">
        <TableUserDashboard />
        <div class="w-1/3 flex flex-col border border-gray-500 p-5 rounded-lg">
            <div class="flex flex-col">
                <div>Visits by Day</div>
                <div class="text-sm text-gray-400">Total 248.5k Visits</div>
            </div>
            <div></div>
            <div class="flex items-center">
                <div class="flex flex-col">
                    <div>Most Visited Day</div>
                    <div class="text-sm text-gray-400">Total 62.4k Visits on Thursday</div>
                </div>
                <div class="ml-auto bg-red-400 opacity-90 text-white p-1 rounded text-center">
                    <IconRight />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin'
})
</script>