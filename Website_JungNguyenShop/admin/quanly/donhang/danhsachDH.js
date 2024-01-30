console.log("Liên kết route đến danhsachDH thành công");

app.controller('danhsachDH', function ($scope, $http, $routeParams) {
    console.log("Khai báo thành công controller danhsachDH ");

    $scope.donhang = [];
    $scope.donhangchitiet = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/don-hang'
    }).then(function (response) {
        $scope.donhang = response.data;

        console.log("Log in thử giá trị: ", $scope.donhang)
    })

    //Mỗi khi nhấn nút xem thêm ở từng đơn hàng sẽ hiển thị bảng đơn hàng chi tiết có id_dh tương ứng với ma_don_hang trong bảng don_hang_chi_tiet
    // Code để hiển thị đơn hàng chi tiết dựa vào id_dh được chọn ở nút xem thêm
    $scope.onClickDetailDH = function (id) {
        console.log('Đơn hàng được chọn :' + id);

        $http({
            method: 'GET',
            url: 'http://localhost:3000/don_hang_chi_tiet',
            params: { ma_don_hang: id }
        }).then(function (response) {
            $scope.donhangchitiet = response.data;

            console.log("Log in thử giá trị donhangchitiet: ", $scope.donhangchitiet)
        })
    }
    
    
})