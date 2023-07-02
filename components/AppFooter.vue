<template>
    <div class="bg-gray-400 px-5 py-4 w-5/6 mx-auto mt-5 rounded-t-lg">
        <div class="flex justify-center items-center">
            <div class="flex w-2/6 items-center">
                <IconLetter class="text-white me-1" />
                <div class="text-white text-xl">ĐĂNG KÝ NHẬN BẢN TIN</div>
            </div>
            <div class="p-1 bg-white rounded-md w-3/6 flex">
                <input type="text" placeholder="Nhập địa chỉ email của bạn" class="pl-4 w-5/6 h-auto focus:border-transparent focus:outline-none">
                <button class="bg-orange-400 text-white rounded-md py-2 px-5 w-1/6">Đăng ký</button>
            </div>
        </div>
    </div>
    <div class="bg-white w-5/6 mx-auto flex pt-5 px-4">
        <div class="w-2/6 mr-2">
            <img src="img/logo.png" alt="">
            <div class="mt-4">
                <p>
                    Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM
                    Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 - 62 Lê Lợi,
                    Quận 1, TP. HCM, Việt Nam
                </p>
                <p class="mt-2">
                    Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp
                    tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                </p>
            </div>
            <img src="img/logocongthuong.png" class="w-2/6 mt-4" alt="">
            <div class="flex mt-4">
                <IconSymBol />
                <IconSymBol />
                <IconSymBol />
            </div>
        </div>
        <div class="w-4/6 border-l border-gray-400 pl-4">
            <div class="flex">
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        DỊCH VỤ
                    </div>
                    <ul>
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách bảo mật thông tin cá nhân</li>
                        <li>Chính sách bảo mật thanh toán</li>
                        <li>
                            <NuxtLink to="/about">
                                Giới thiệu
                            </NuxtLink>
                        </li>
                        <li>Hệ thống trung tâm - nhà sách</li>
                    </ul>
                </div>
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        HỖ TRỢ
                    </div>
                    <ul>
                        <li>Chính sách đổi - trả - hoàn tiền</li>
                        <li>Chính sách bảo hành - bồi hoàn</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách khách sỉ</li>
                        <li>Phương thức thanh toán và xuất HĐ</li>
                    </ul>
                </div>
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        TÀI KHOẢN CỦA TÔI
                    </div>
                    <ul>
                        <li>Đăng nhập/Tạo mới tài khoản</li>
                        <li>Thay đổi địa chỉ khách hàng</li>
                        <li>Chi tiết tài khoản</li>
                        <li>Lịch sử mua hàng</li>
                    </ul>
                </div>
            </div>
            <div class="mt-4">
                <div class="font-bold mb-4">
                    LIÊN HỆ
                </div>
                <div class="flex">
                    <div class="w-2/6 flex">
                        <IconMapPin class="mr-2" />
                        60-62 Lê Lợi, Q.1, TP.HCM
                    </div>
                    <div class="w-2/6 flex">
                        <IconLetter class="mr-2" />
                        cskh@fahasa.com.vn
                    </div>
                    <div class="w-2/6 flex">
                        <IconPhone class="mr-2" />
                        1900636467
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex">
                    <div class="w-1/5">
                        <img src="img/transport/vnpost1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/transport/ahamove_logo3.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/transport/icon_giao_hang_nhanh1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/transport/icon_snappy1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/transport/Logo_ninjavan.png" class="max-h-28" alt="">
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/5">
                        <img src="img/payment/vnpay_logo.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/payment/ZaloPay-logo-130x83.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/payment/momopay.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/payment/shopeepay_logo.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="img/payment/logo_moca_120.jpg" class="max-h-28" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="text-gray-300 w-5/6 mx-auto bg-white text-center pt-5">
        Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005,
        đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
    </div>
</template>