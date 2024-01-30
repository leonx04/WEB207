console.log('Log để kiểm tra: Đã nhúng file detailSP thành công');

//5.1 Khai báo controller detailDM
app.controller("detailSP", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailSP thành công');

    $scope.sanpham = {
        id: '',
        ten: '',
        hinh_anh: '',
        danh_muc: '',
        gia_niem_yet: '',
        gia_ban: '',
        uu_dai: '',
        ngay_tao: '',
        ngay_cap_nhat: '',
        so_luong: '',
        so_luong_da_ban: '',
        trang_thai: '',
        chat_lieu: '',
        bao_hanh: ''
    }


    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function (response) {

        $scope.sanpham = response.data;

        console.log('Log in thử giá trị của biến $scope.danhsach:', $scope.sanpham);
    })
})