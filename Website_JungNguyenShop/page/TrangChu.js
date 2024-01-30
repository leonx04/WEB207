// Định nghĩa controller 'HomePageController' trong ứng dụng
app.controller('HomePageController', function ($scope, $http) {
    $scope.danhsach = [];
    $scope.danhsachSanPhamBanChay = [];

    // Lấy dữ liệu sản phẩm từ server
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        $scope.danhsach = response.data;

        // Gọi hàm sắp xếp mặc định khi trang được mở
        $scope.sortForSanPhamBanChay();

        // Khởi tạo danh sách sản phẩm hiển thị
        $scope.updateVisibleProducts();
    });

    // Hàm xử lý sự kiện sắp xếp chỉ cho div có id="SanPhamBanChay"
    $scope.sortForSanPhamBanChay = function () {
        // Tạo một bản sao của danh sách sản phẩm hiện tại ($scope.danhsach) bằng cách sử dụng angular.copy().
        $scope.danhsachSanPhamBanChay = angular.copy($scope.danhsach);
        $scope.danhsachSanPhamBanChay.sort(function (a, b) {
            return b.so_luong_da_ban - a.so_luong_da_ban;
        });
    };

    // Số sản phẩm hiển thị trên mỗi slide
    var productsPerSlide = 4;

    // Biến để lưu trữ chỉ số bắt đầu của sản phẩm hiển thị
    $scope.startIndex = 0;

    // Function để cập nhật danh sách sản phẩm hiển thị
    $scope.updateVisibleProducts = function () {
        $scope.visibleProducts = $scope.danhsach.slice($scope.startIndex, $scope.startIndex + productsPerSlide);
    };

    // Function khi bấm nút "Prev"
    $scope.prevProducts = function () {
        if ($scope.startIndex > 0) {
            $scope.startIndex -= productsPerSlide;
            $scope.updateVisibleProducts();
        }
    };

    // Function khi bấm nút "Next"
    $scope.nextProducts = function () {
        if ($scope.startIndex + productsPerSlide < $scope.danhsach.length) {
            $scope.startIndex += productsPerSlide;
            $scope.updateVisibleProducts();
        }
    };
});
