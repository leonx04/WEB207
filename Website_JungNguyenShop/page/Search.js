console.log("Tạo file search thành công");

app.controller('SearchProductController', function ($scope, $http, $routeParams) {
    $scope.danhsachSP = [];
    $scope.danhsachDM = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (reponse) {
        console.log("Success sản phẩm!");

        $scope.danhsachSP = reponse.data;
    })

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (reponse) {
        console.log("Hiển thị thành công danh mục!");

        $scope.danhsachDM = reponse.data;
    })

    $scope.onClickDM = function (id) {
        console.log('Danh sach được chọn :' + id);
        $http({
            method: 'GET',
            url: 'http://localhost:3000/san-pham',
            params: {
                danh_muc: id
            }
        }).then(function (response) {
            console.log('Dữ liệu api trả về:', response.data);

            $scope.danhsachSP = response.data;
        });
    }


    // Hàm xử lý sự kiện sắp xếp từ cao đến thấp
    $scope.sortByPriceDesc = function () {
        $scope.danhsachSP.sort(function (a, b) {
            return b.gia_ban.localeCompare(a.gia_ban);
        });
    };

    // Hàm xử lý sự kiện sắp xếp từ thấp đến cao
    $scope.sortByPriceAsc = function () {
        $scope.danhsachSP.sort(function (a, b) {
            return a.gia_ban.localeCompare(b.gia_ban);
        });
    };

   
})