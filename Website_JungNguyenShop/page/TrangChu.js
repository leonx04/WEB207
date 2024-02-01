app.controller('HomePageController', function ($scope, $http, $routeParams) {
    $scope.danhsach = [];
    $scope.danhsachSanPhamBanChay = [];

    // Lấy dữ liệu sản phẩm từ server
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        $scope.danhsach = response.data;

        
        $scope.sortForSanPhamBanChay();
        // Gọi hàm sắp xếp mặc định khi trang được mở
        $scope.sortForSanPhamMoiNhat();
    });

    // Hàm xử lý sự kiện sắp xếp chỉ cho div có id="SanPhamBanChay"
    $scope.sortForSanPhamBanChay = function () {
        $scope.danhsachSanPhamBanChay = angular.copy($scope.danhsach);
        $scope.danhsachSanPhamBanChay.sort(function (a, b) {
            return b.so_luong_da_ban - a.so_luong_da_ban;
        });
    };

    $scope.sortForSanPhamMoiNhat = function () {
        $scope.danhsachSanPhamMoiNhat = angular.copy($scope.danhsach);
        $scope.danhsachSanPhamMoiNhat.sort(function (a, b) {
            // Chuyển đổi thời gian tạo thành đối tượng Date để so sánh
            var dateA = convertTimeStringToDate(a.ngay_tao);
            var dateB = convertTimeStringToDate(b.ngay_tao);

            // Sắp xếp theo thời gian giảm dần (tạo mới nhất đến cũ nhất)
            return dateB - dateA;
        });
    };

    function convertTimeStringToDate(timeString) {
        // Chuyển đổi định dạng thời gian thành đối tượng Date
        var parts = timeString.split(/[\s:\/]/);
        var date = new Date(parts[3], parts[2] - 1, parts[1], parts[0], parts[4], parts[5], 0);
        return date;
    }
});
