<template>
    <div class="flex mt-4 flex-col">
        <div class="flex bg-orange-300 w-full p-2">
            <div class="flex items-center mr-2 font-bold">
                <img src="/img/icon/flashsale.png" class="mr-2" alt=""> FLASH SALE
            </div>
            <div class="flex items-center border-l-2 border-gray-600 pl-2">
                Kết Thúc Trong
                <div class="flex items-center ml-2">
                    <div class="bg-white rounded-md p-1">{{ countdown.hours }}</div> :
                    <div class="bg-white rounded-md p-1">{{ countdown.minutes }}</div> :
                    <div class="bg-white rounded-md p-1">{{ countdown.seconds }}</div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <ul class="flex">
                <li class="w-1/5 p-5 hover:shadow-lg" v-for="product in products.result" :id="product.id">
                    <ItemFlashSale :product="product" />
                </li>
            </ul>
            <div class="px-5 py-2 bg-orange-500 w-2/12 rounded-full text-center mx-auto mt-4 text-white font-semibold mb-5">
                Xem Thêm</div>
        </div>
    </div>
</template>
<script setup>
const countdown = ref({
    hours: '00',
    minutes: '45',
    seconds: '00',
});

const startCountdown = () => {
    const targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + 45); // Thời gian kết thúc sau 45 phút

    const updateCountdown = () => {
        const currentTime = new Date();
        const timeDifference = targetTime - currentTime;

        if (timeDifference > 0) {
            const hours = String(Math.floor((timeDifference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((timeDifference / 1000 / 60) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, '0');

            countdown.value = { hours, minutes, seconds };
        }
    };

    updateCountdown(); // Cập nhật thời gian ban đầu

    const countdownInterval = setInterval(updateCountdown, 1000);

    onUnmounted(() => {
        clearInterval(countdownInterval);
    });
};

onMounted(() => {
    startCountdown();
});

const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        flashsale: true,
        limit: 5
    }
})
</script>