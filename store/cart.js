import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    function addToCart(item) {
        cart.value.push({
            ...item,
            qty: 1
        })
    }

    function removeItem(id) {
        cart.value = cart.value.filter((item) => item.id !== id);
    }

    const totalPrice = computed(() => cart.value.reduce((total, item) => total + item.price * item.qty, 0))

    return {
        cart,
        addToCart,
        totalPrice,
        removeItem
    }
}, {
    persist: true
})