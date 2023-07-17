<template>
    <div class="flex">
        <div class="w-1/5 bg-black text-white p-4">
            Company name
        </div>
        <div class="w-4/5 bg-slate-600 p-4">

        </div>
    </div>
    <div class="flex">
        <div class="w-1/5 flex flex-col p-4">
            <div>SAVED REPORTS</div>
            <div>Current Month</div>
            <div>Current Month</div>
            <div>Current Month</div>
            <div>Current Month</div>

        </div>
        <div class="w-4/5 border-l border-slate-600">
            <slot />
        </div>
    </div>
    
</template>