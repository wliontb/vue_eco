<template>
    <div class="cart">
    <h2>Giỏ hàng</h2>
    <div v-if="cartItems.length === 0">
      <p>Giỏ hàng trống.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }} đ
          <button @click="removeItem(index)">Xóa</button>
        </li>
      </ul>
      <button @click="clearCart">Xóa toàn bộ giỏ hàng</button>
    </div>
  </div>

    <div class="flex flex-col my-3">
        <div class="flex my-2 items-center">
            <div class="text-xl mr-2">GIỎ HÀNG</div>
            <div>(1 sản phẩm)</div>
        </div>
        <div class="flex">
            <div class="w-2/3 flex-col">
                <div class="bg-white flex p-4 rounded-lg">
                    <div class="w-1/12">
                        <input type="checkbox" class="max-w-full h-5 w-5" @click="checkedAll = !checkedAll">
                    </div>
                    <div class="flex w-6/12 items-center">
                        <div class="mr-1 font-bold">Chọn tất cả</div>
                        <div>(1 sản phẩm)</div>
                    </div>
                    <div class="w-2/12">Số lượng</div>
                    <div class="w-2/12">Thành tiền</div>
                    <div class="w-1/12">Tác vụ</div>
                </div>
                <ItemOnCart :isChecked="checkedAll" />
                <ItemOnCart :isChecked="checkedAll" />
            </div>
            <div class="w-1/3 flex flex-col ml-3">
                <div class="bg-white py-3 px-3 flex flex-col rounded-lg">
                    <div class="flex justify-between">
                        <div class="flex text-blue-500">
                            <IconCoupon /> 
                            KHUYẾN MÃI
                        </div>
                        <div class="flex text-blue-500 text-sm">
                            Xem thêm
                            <IconRight />
                        </div>
                    </div>
                    <ItemVoucher />
                    <ItemVoucher />
                    <ItemVoucher />
                    <div class="border-b border-dashed border-gray-300 my-2"></div>
                    <div class="flex bg-blue-200 text-blue-600 text-sm mt-1 py-2 px-3 justify-between rounded-lg">
                        <div>3 khuyến mãi đủ điều kiện</div>
                        <div><IconRight /></div>
                    </div>
                    <div class="text-gray-400 text-sm mt-1 flex">
                        Có thể áp dụng nhiều mã
                        <IconNotice class="ml-1" />
                    </div>
                </div>
                <!-- thanh toan -->
                <div class="bg-white py-3 px-3 flex flex-col rounded-lg mt-4">
                    <div class="flex justify-between">
                        <div class="flex">
                            Thành tiền
                        </div>
                        <div class="flex text-sm">
                            69.300 đ
                        </div>
                    </div>
                    <div class="border-b border-dashed border-gray-300 my-2"></div>
                    <div class="flex justify-between">
                        <div class="font-semibold">Tổng Số Tiền (gồm VAT)</div>
                        <div class="font-bold text-red-700">69.300 đ</div>
                    </div>
                    <div class="mt-3 bg-red-700 py-2 px-4 rounded-lg text-white text-center font-semibold text-xl">
                        THANH TOÁN
                    </div>
                    <div class="text-red-700 text-sm">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue';

    const checkedAll = ref(false);

    const { cartItems, addItem, removeItem, clearCart } = useCart();
</script>