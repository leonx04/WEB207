console.log('Log để kiểm tra: Đã nhúng file updateDH thành công');

app.controller('updateDH', function ($scope, $http, $routeParams) {
    console.log("Khai bao updateDH thành công")

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


    $scope.formMessage = '';
    $scope.formStatus = true;

    $http({
        method: 'GET',
        url: 'http://localhost:3000/don-hang/' + $routeParams.id
    }).then(function (response) {

        $scope.donhang = response.data;

        console.log('Log in thử giá trị của biến $scope.danhsach:', $scope.donhang);
    })

    $scope.OnClickUpdateDH = function () {
        console.log("Log thử giá trị được chọn :", $scope.donhang);

        $scope.formMessage = '';
        $scope.formStatus = true;

        if ($scope.donhang.sdt_khach_hang === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập số điện thoại ';
            return;
        }

        if (isNaN($scope.donhang.sdt_khach_hang)) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập số điện thoại đúng địng dạng là số';
            return;
        }

        if ($scope.donhang.dia_chi_ghichu === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập địa chỉ nhận hàng ';
            return;
        }

        if ($scope.donhang.don_vi_van_chuyen === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng chọn đơn vị vận chuyển ';
            return;
        }

        if ($scope.donhang.trang_thai === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng chọn trạng thái ';
            return;
        }

        $http({
            method: "PUT",
            url: "http://localhost:3000/don-hang/" + $routeParams.id,
            data: $scope.donhang
        }).then(function (response) {
            alert('Cập nhật đơn hàng thành công')
        })
    }
})