console.log('Log để kiểm tra: Đã nhúng file danhsachDM thành công');

//5.1 Khai báo controller QLDonHang
app.controller("danhsachDM", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo danhsachDM thành công');

    

    $scope.danhsach = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (response) {
        $scope.danhsach = response.data;

        console.log('Log để in thử giá trị params từ url', $scope.danhsach);
    })
})