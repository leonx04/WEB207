console.log("Log để kiểm tra: Đã nhúng file danhsachSP thành công");

//5.1 Khai báo controller createSP
app.controller("danhsachSP", function ($scope, $http, $routeParams) {
    console.log("Log để kiểm tra: Khai báo danhsachSP thành công");

    // 1. Khai báo biến cần thiết
    $scope.danhsachSP = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        // Gán giá trị sau khi call api thành công
        $scope.danhsachSP = response.data
        console.log("Log thử giá trị biến QLSanPham", $scope.danhsachSP);

    })

});