console.log('Log để kiểm tra: Đã nhúng file detailDH thành công');

//5.1 Khai báo controller detailDM
app.controller("detailDH", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailDH thành công');

    $scope.donhang = {
        id: '',
        ten_khach_hang: '',
        sdt_khach_hang: '',
        dia_chi_ghichu: '',
        thanh_toan: '',
        don_vi_van_chuyen: '',
        voucher: '',
        ngay_dat_hang: '',
        phi_van_chuyen: '',
        tong_so_luong: '',
        Tong_tien_san_pham: '',
        Tong_thanh_toan: '',
        trang_thai: '',
        ngay_cap_nhat: ''
    }


    $http({
        method: 'GET',
        url: 'http://localhost:3000/don-hang/' + $routeParams.id
    }).then(function (response) {

        $scope.donhang = response.data;

        console.log('Log in thử giá trị của biến $scope.danhsach:', $scope.donhang);
    })
})