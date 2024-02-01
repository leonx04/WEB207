app.controller('GioHangController', function ($scope, $http) {
    console.log("Nhúng file GioHangController thành công");

    $scope.giohang = [];
    $scope.selectedItems = []; // Danh sách sản phẩm được chọn
    $scope.selectedTotalPrice = 0; // Tổng giá trị của các sản phẩm được chọn

    // Mặc định tổng giá trị là 0
    $scope.tongTien = 0;

    // Hàm lấy danh sách giỏ hàng
    function getGioHang() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/gio-hang'
        }).then(function (response) {
            $scope.giohang = response.data;
        });
    }

    // Hàm để xóa sản phẩm khỏi giỏ hàng
    $scope.deleteProduct = function (id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/gio-hang/' + id,
        }).then(function (response) {
            
            // Sau khi xóa, cập nhật lại danh sách và tổng giá trị
            getGioHang();
        });
    };

    // Hàm tính tổng giá trị thanh_tien
    $scope.calculateTotalPrice = function () {
        // Kiểm tra xem có sản phẩm được chọn hay không
        if ($scope.selectedItems && $scope.selectedItems.length > 0) {
            // Hiển thị tổng giá trị của các sản phẩm được chọn
            $scope.tongTien = $scope.selectedTotalPrice;
        } else {
            // Hiển thị tổng giá trị của toàn bộ giỏ hàng nếu có sản phẩm trong giỏ hàng
            if ($scope.giohang && $scope.giohang.length > 0) {
                $scope.tongTien = $scope.giohang.reduce(function (total, item) {
                    return total + item.thanh_tien;
                }, 0);
            } else {
                // Không có sản phẩm trong giỏ hàng, tổng giá trị là 0
                $scope.tongTien = 0;
            }
        }
    };

    // Hàm được gọi khi checkbox của một sản phẩm thay đổi
    $scope.updateSelectedProducts = function () {
        $scope.selectedItems = $scope.giohang.filter(function (item) {
            return item.selected;
        });

        // Tính tổng giá trị của các sản phẩm được chọn
        $scope.selectedTotalPrice = $scope.selectedItems.reduce(function (total, item) {
            return total + item.thanh_tien;
        }, 0);

        // Kiểm tra xem có sản phẩm được chọn hay không
        if ($scope.selectedItems.length > 0) {
            // Hiển thị tổng giá trị của các sản phẩm được chọn
            $scope.tongTien = $scope.selectedTotalPrice;
        } else {
            // Không có sản phẩm được chọn, đặt tổng giá trị về 0
            $scope.tongTien = 0;
        }
    };


    // Hàm được gọi khi click vào checkbox SelectAllSP
    $scope.selectAllProducts = function () {
        $scope.selectAll = !$scope.selectAll; // Đảo ngược trạng thái selectAll

        angular.forEach($scope.giohang, function (item) {
            item.selected = $scope.selectAll;
        });

        // Cập nhật danh sách các sản phẩm được chọn
        $scope.updateSelectedProducts();
    };

    $scope.deleteGioHangChecked = function () {
        if ($scope.selectedItems && $scope.selectedItems.length > 0) {
            var confirmDelete = confirm("Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?");
            if (confirmDelete) {
                // Tạm lưu lại tổng giá trị của các sản phẩm được chọn
                var selectedTotalBeforeDelete = $scope.selectedTotalPrice;

                angular.forEach($scope.selectedItems, function (item) {
                    console.log("Đang xóa sản phẩm với ID:", item.id);
                    $scope.deleteProduct(item.id);
                });

                // Sau khi đã xóa tất cả, cập nhật lại tổng giá trị
                $scope.tongTien = selectedTotalBeforeDelete;
                alert("Xóa thành công");
            }
        } else {
            // Không có sản phẩm nào được chọn, đặt tổng giá trị về 0
            $scope.tongTien = 0;
            alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
        }
    };


    // Gọi hàm lấy danh sách giỏ hàng khi trang được tải lên
    getGioHang();
});
