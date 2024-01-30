console.log('Log để kiểm tra: Đã nhúng file detailDM thành công');

//5.1 Khai báo controller detailDM
app.controller("detailDM", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailDM thành công');

    $scope.danhmuc = {
        id: '',
        ten: '',
        mo_ta: '',
        ngay_tao: '',
        ngay_cap_nhat: '',
        trang_thai: ''
    }


    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc/' + $routeParams.id
    }).then(function (response) {

        $scope.danhmuc = response.data;

        console.log('Log in thử giá trị của biến $scope.danhsach:', $scope.danhmuc);
    })
})