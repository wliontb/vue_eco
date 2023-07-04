import { reactive, computed } from 'vue';

export default function useCart() {
  const state = reactive({
    items: [
        {id: 1, name: 'item1', price: 100, qty: 1},
        {id: 2, name: 'item2', price: 100, qty: 2},
        {id: 3, name: 'item3', price: 100, qty: 3}
    ],
  });

  const cartItems = computed(() => state.items);

  function addItem(item) {
    state.items.push(item);
  }

  function removeItem(index) {
    state.items.splice(index, 1);
  }

  function clearCart() {
    state.items = [];
  }

  return {
    cartItems,
    addItem,
    removeItem,
    clearCart,
  };
}
