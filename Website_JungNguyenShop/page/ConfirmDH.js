console.log("Tạo thành công file ConfirmDH");

app.controller('ConfirmDH', function ($scope, $http) {
    console.log("Nhúng file ConfirmDH thành công");

    $scope.donhang = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        $scope.danhsach = response.data;

    })
})


