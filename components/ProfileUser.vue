<template>
    <div class="flex flex-col bg-white p-4">
        <div class="font-semibold mb-3">THÔNG TIN TÀI KHOẢN</div>
        <div class="flex flex-col">
            <div class="flex justify-between my-2">
                <div class="w-2/12">Họ*</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1" placeholder="Nhập họ">
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12">Tên*</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1" placeholder="Nhập tên">
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12">Số điện thoại</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1" placeholder="Nhập số điện thoại">
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12">Email</div>
                <input type="email" class="border w-10/12 rounded px-2 py-1" placeholder="Nhập email">
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12">Giới tính</div>
                <div class="w-10/12 flex">
                    <div class="flex items-center mr-2"><input type="radio" name="" id="" class="mr-1"> Nam</div>
                    <div class="flex items-center"><input type="radio" name="" id="" class="mr-1"> Nữ</div>
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12">Ngày sinh*</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-1/3 border rounded px-2 py-1 mr-1" placeholder="ngày">
                    <input type="text" class="w-1/3 border rounded px-2 py-1 mr-1" placeholder="tháng">
                    <input type="text" class="w-1/3 border rounded px-2 py-1" placeholder="năm">
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <div class="w-2/12"></div>
                <div class="w-10/12 flex">
                    <input type="checkbox" name="" id="" class="mr-1">
                    <div class="font-semibold">
                        Đổi mật khẩu
                    </div>
                </div>
            </div>
            <button class="text-center w-2/6 bg-red-700 rounded-lg Px-4 py-2 text-white mx-auto mt-4">
                Lưu thay đổi
            </button>
        </div>
    </div>
</template>