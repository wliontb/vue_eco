import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function addToCart(item, qtyItem) {
    const existingItem = cart.value.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.qtyItem += qtyItem;
    } else {
      cart.value.push({
        ...item,
        qtyItem: qtyItem,
      });
    }
  }

  function removeItem(id) {
    const index = cart.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }

  function removeCart() {
    cart.value = [];
  }

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.qtyItem, 0)
  );

  return {
    cart,
    addToCart,
    totalPrice,
    removeItem,
    removeCart,
  };
}, {
  persist: true,
});
