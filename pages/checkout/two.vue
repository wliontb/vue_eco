<template>
    <div class="flex flex-col my-4 gap-y-3">
        <div class="flex bg-rose-600 gap-x-2 p-4 items-center justify-between">
            <IconCheck class="text-white w-1/6" />
            <div class="flex flex-col w-3/6 text-white font-semibold">
                <div class="text-xl">Bạn đã đặt hàng thành công !</div>
                <div>Mã đơn hàng của bạn là: <span class="text-yellow-200">#123</span></div>
                <div>Bạn sẽ sớm nhận được email xác nhận đơn hàng từ chúng tôi</div>
            </div>
            <div class="uppercase text-sm border-2 border-red-500 rounded w-1/6 py-4 px-2 text-center text-red-500 font-semibold cursor-pointer bg-rose-200 hover:text-white hover:border-white">
                Xem chi tiết đơn hàng
            </div>
            <div class="uppercase text-sm rounded w-1/6 py-4 px-2 text-center text-white font-semibold cursor-pointer bg-red-500 hover:border-white hover:border-2">
                Tiếp tục mua sắm
            </div>
        </div>
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
            
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Thành tiền</div>
                <div class="w-1/12 px-4 py-2">73000</div>
            </div>
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Phí vận chuyển</div>
                <div class="w-1/12 px-4 py-2">19000</div>
            </div>
            <div class="flex">
                <div class="w-8/12"></div>
                <div class="w-3/12 bg-gray-100 border-r px-4 py-2">Giao hàng tiêu chuẩn</div>
                <div class="w-1/12 px-4 py-2">19000</div>
            </div>
            <div class="flex">
                <div class="w-9/12"></div>
                <div class="w-2/12 border-r px-4 py-2">Tổng số tiền (gồm VAT)</div>
                <div class="w-1/12 text-red-500 px-4 py-2">19000</div>
            </div>
        </div>
    </div>
</template>
<style>
    .bg-birthday {
        background-image: url('/img/banner/birthday.svg');
        height: 45rem;
    }
</style>