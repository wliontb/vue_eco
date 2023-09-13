<template>
    <div class="flex flex-col gap-y-4 my-4">
        <!-- address -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Địa chỉ giao hàng</div>
            <div class="flex justify-between items-center">
                <div class="w-1/12 flex justify-center text-rose-700">
                    <input type="radio" name="address" class=" border-green-500">
                </div>
                <div class="w-10/12">Nguyễn Tuấn Anh | ABC - Hà Nội</div>
                <button class="w-1/12 text-blue-500 text-right">Sửa</button>
            </div>
            <div class="flex justify-between items-center">
                <div class="w-1/12 flex justify-center text-rose-700">
                    <input type="radio" name="address" class=" border-green-500">
                </div>
                <div class="w-10/12">Nguyễn Tuấn Anh | ABC - Hà Nội</div>
                <button class="w-1/12 text-blue-500 text-right">Sửa</button>
            </div>
            <div class="flex justify-between cursor-pointer">
                <div class="w-1/12">
                    <IconCirclePlus class="text-rose-700 mx-auto" />
                </div>
                <div class="w-11/12">Giao hàng đến địa chỉ khác</div>
            </div>
        </div>

        <!-- ship -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Phương thức vận chuyển</div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-rose-700">
                    <input type="radio" name="address" class=" border-green-500">
                </div>
                <div class="w-11/12">Giao hàng tiêu chuẩn</div>
            </div>
        </div>

        <!-- payment -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Phương thức thanh toán</div>
            <div class="flex justify-between">
                <div class="w-1/12 flex justify-center text-rose-700">
                    <input type="radio" name="address" class=" border-green-500">
                </div>
                <div class="w-11/12 flex gap-x-2">
                    <IconBankNote />
                    Thanh toán bằng tiền mặt khi nhận hàng
                </div>
            </div>
        </div>

        <!-- voucher -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Mã khuyến mãi/mã quà tặng</div>
            <div class="flex justify-between">
                <div class="w-2/12">
                    Mã KM/Quà tặng
                </div>
                <div class="w-10/12 flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-3">
                        <div class="relative w-3/6">
                            <input type="text" class="border px-6 py-3 rounded-lg w-full outline-none"
                                placeholder="Nhập mã khuyến mãi/Quà tặng">
                            <button
                                class="bg-blue-500 text-white rounded-lg px-3 py-1.5 absolute right-2 top-1.5 shadow-sm">
                                Áp dụng
                            </button>
                        </div>
                        <div class="w-auto text-blue-500 underline text-sm">
                            Chọn mã khuyến mãi
                        </div>
                    </div>
                    <div class="flex items-center text-gray-400 gap-x-3 text-sm">
                        Có thể áp dụng đồng thời nhiều mã
                        <IconNotice />
                    </div>
                </div>
            </div>
        </div>

        <!-- re-check -->
        <div class="bg-white px-4 py-1.5">
            <div class="border-b font-bold uppercase py-2 mb-2">Kiểm tra lại đơn hàng</div>
            <div class="bg-white">
                <div class="flex justify-between">
                    <div class="w-2/12 border p-4 font-semibold text-sm">Ảnh</div>
                    <div class="w-6/12 border p-4 font-semibold text-sm">Tên sản phẩm</div>
                    <div class="w-1/12 border p-4 font-semibold text-sm">Giá</div>
                    <div class="w-2/12 border p-4 font-semibold text-sm">Số lượng</div>
                    <div class="w-1/12 border p-4 font-semibold text-sm">Thành tiền</div>
                </div>
                <div class="flex border-b border-r border-l">
                    <div class="w-2/12 p-4">
                        <img src="/img/product/op.jpg" class="w-1/2" alt="">
                    </div>
                    <div class="w-6/12 p-4">
                        [Anime Comics] One Piece Stampede - Tập 2
                    </div>
                    <div class="w-1/12 flex flex-col p-4">
                        <div>73.150đ</div>
                        <div class="text-gray-300 line-through">77.000đ</div>
                    </div>
                    <div class="w-2/12 p-4">
                        1
                    </div>
                    <div class="w-1/12 p-4">
                        73.150đ
                    </div>
                </div>
            </div>
        </div>

        <!-- confirm -->
        <div class="bg-white px-4 py-1.5">
            <div class="flex border-b items-center py-2">
                <div class="w-8/12"></div>
                <div class="w-3/12 flex-col flex">
                    <div>Thành tiền</div>
                    <div>Phí vận chuyển (Giao hàng tiêu chuẩn)</div>
                    <div class="font-bold">Tổng Số Tiền (gồm VAT)</div>
                </div>
                <div class="w-1/12 flex flex-col">
                    <div>58.500 đ</div>
                    <div>19.000 đ</div>
                    <div>77.500 đ</div>
                </div>
            </div>
            <div class="flex justify-between p-4 items-center">
                <NuxtLink to="/cart" class="w-8/12 flex gap-x-3 items-center">
                    <IconBack/> Quay về giỏ hàng
                </NuxtLink>
                <NuxtLink to="/checkout/two" class="w-4/12 bg-rose-700 text-white px-4 py-2 rounded-lg uppercase text-center font-semibold hover:bg-rose-600">
                    xác nhận thanh toán
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: white;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--tw-text-opacity);
    /* Windows High Contrast Mode */
    background-color: rgb(190 18 60 / var(--tw-text-opacity));
}

input[type="radio"]:checked::before {
    transform: scale(1);
}
</style>