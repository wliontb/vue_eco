<template>
    <!-- breadcrumb -->
    <div class="flex my-2">
        SÁCH TIẾNG VIỆT > MANGA - COMIC > MANGA > SERIES MANGA
    </div>
    <div class="bg-white rounded-lg">
        <div class="flex p-4">
            <div class="flex flex-col w-1/12">
                <img src="/img/product/op.jpg" alt="">
                <img src="/img/product/op.jpg" alt="">
            </div>
            <div class="flex w-3/12">
                <img src="/img/product/op.jpg" alt="">
            </div>
            <div class="flex w-7/12 flex-col">
                <p class="font-semibold text-2xl">[Anime Comics] One Piece Stampede - Tập 2</p>
                <div class="flex flex-wrap mt-4">
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Nhà cung cấp:</div>
                        <div class="w-1/2">NXB Kim Đồng</div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">
                            Tác giả:
                        </div>
                        <div class="w-1/2">
                            Eiichiro Oda
                        </div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Nhà xuất bản:</div>
                        <div class="w-1/2">Kim Đồng</div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Hình thức bìa:</div>
                        <div class="w-1/2">Bìa Mềm</div>
                    </div>
                    <div class="w-1/2 flex mb-1">
                        <div class="w-1/2 font-semibold">Bộ:</div>
                        <div class="w-1/2">Anime Comics: One Piece Film Strong World</div>
                    </div>
                </div>
                <div class="flex mt-2">
                    <IconStar class="w-4" />
                    <IconStar class="w-4" />
                    <IconStar class="w-4" />
                    <IconStar class="w-4" />
                    <IconStar class="w-4" />
                    <div class="text-orange-500 ml-2">(0 đánh giá)</div>
                </div>
                <!-- flash sale -->
                <div class="flex items-center mt-4">
                    <div class="text-red-700 font-bold text-3xl mr-3">
                        69.300 đ
                    </div>
                    <div class="line-through mr-3">
                        77.000 đ
                    </div>
                    <div class="bg-red-700 font-semibold text-white p-1 rounded-md">-10%</div>
                </div>
                <div class="flex flex-col mt-4">
                    <div>Thời gian giao hàng: 24-48h</div>
                    <div>
                        Chính sách đổi trả: Đổi trả sản phẩm trong 30 ngày
                        <a href="#" class="text-blue-500 cursor-pointer font-semibold">Xem thêm</a>
                    </div>
                </div>
                <div class="flex items-center mt-4">
                    <div class="font-bold mr-4 w-1/6">Số lượng:</div>
                    <ItemInputNumberRange class="w-1/6" />

                </div>
            </div>
        </div>
        <div class="p-6 flex">
            <div
                class="py-2 px-6 border-2 border-red-700 rounded-lg flex items-center text-red-700 font-bold cursor-pointer">
                <IconCart class="mr-2" /> Thêm vào giỏ hàng
            </div>
            <div class="bg-red-700 py-2 px-10 text-white rounded-lg font-bold cursor-pointer ml-2">
                Mua ngay
            </div>
        </div>
    </div>

    <div class="mt-4 bg-white rounded-lg">
        <div class="flex font-bold text-xl items-center p-4">
            <IconCoupon class="text-red-600 mr-4" /> ƯU ĐÃI LIÊN QUAN
        </div>
        <div class="flex p-4">
            <div class="font-semibold text-red-600">
                Tất cả
            </div>
            <div class="ml-4">
                Mã giảm giá
            </div>
            <div class="ml-4">
                Mã vận chuyển
            </div>
            <div class="ml-4">
                Mã thanh toán
            </div>
            <div class="ml-4">
                Ưu đãi khác
            </div>
            <div class="flex text-gray-400 ml-auto text-sm">
                Có thể áp dụng nhiều mã
                <IconNotice class="ml-1" />
            </div>
        </div>
        <div class="px-4 pb-4 relative">
            <!-- <div class="border-b border-gray-600"></div> -->
            <div class="border-b-2 border-red-600 w-1/12 absolute"></div>
        </div>
        <div class="p-4 flex flex-row items-center">
            <ItemCoupon class="text-orange-500 w-3.5/12 mr-2" :icon="1" />
            <ItemCoupon class="text-green-500 w-3.5/12 mr-2" :icon="2" />
            <ItemCoupon class="text-blue-500 w-3.5/12 mr-2" :icon="3" />
            <div class="flex items-center text-md flex-col ml-auto">
                <div class="bg-red-700 p-1 rounded-full">
                    <IconRight class="text-white" />
                </div>
                <div class="font-semibold text-xs text-red-700">
                    Xem thêm Mã
                </div>
            </div>
        </div>
    </div>

    <!-- related products -->
    <div class="mt-4 bg-white rounded-lg flex flex-col p-4">
        <div class="font-bold mb-4">SẢN PHẨM LIÊN QUAN</div>
        <div>
            <div class="font-semibold text-red-700 mb-2">Series Bộ</div>
            <div class="border-b-2 border-red-700 w-1/12"></div>
        </div>
        <div class="flex">
            <ul class="flex flex-row">
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
            </ul>
        </div>
    </div>

    <!-- buy with product -->
    <div class="mt-4 bg-white rounded-lg flex flex-col p-4">
        <div class="font-bold mb-4">SẢN PHẨM CÙNG MUA</div>
        <div class="flex">
            <ul class="flex flex-row">
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" :isOOS="false" />
                </li>
                <li>
                    <ItemTrending :isFlashSale="false" />
                </li>
            </ul>
        </div>
    </div>

    <!-- product information -->
    <div class="mt-4 bg-white p-4 rounded-lg">
        <div class="font-bold text-md mb-4">Thông tin sản phẩm</div>
        <div class="flex flex-col">
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Mã hàng</div>
                <div>8935244891294</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Độ Tuổi</div>
                <div>15+</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Tên Nhà Cung Cấp</div>
                <div>Nhà Xuất Bản Kim Đồng</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Tác giả</div>
                <div>Eiichiro Oda, Jump Comics</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Người Dịch</div>
                <div>Itsuwa Rei</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">NXB</div>
                <div>Kim Đồng</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Năm XB</div>
                <div>2023</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Ngôn Ngữ</div>
                <div>Tiếng Việt</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Trọng lượng (gr)</div>
                <div>280</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Kích Thước Bao Bì</div>
                <div>17.6 x 11.3 x 1.2 cm</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Số trang</div>
                <div>256</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Hình thức</div>
                <div>Bìa Mềm</div>
            </div>
            <div class="flex">
                <div class="font-semibold mr-2 w-1/2">Sản phẩm bán chạy nhất</div>
                <div>Top 100 sản phẩm Series Manga bán chạy của tháng</div>
            </div>
        </div>

    </div>
</template>