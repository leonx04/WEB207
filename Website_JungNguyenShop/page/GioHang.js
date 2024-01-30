console.log("Tạo thành công file GioHangController");

app.controller('GioHangController', function ($scope, $http) {
    console.log("Nhúng file GioHangController thành công");

    $scope.danhsach = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        $scope.danhsach = response.data;

    })
})