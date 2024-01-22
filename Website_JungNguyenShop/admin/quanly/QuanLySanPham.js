var app = angular.module("myApp", []);

        app.controller("nameCtrl", function ($scope, $http) {
            $scope.danhsach = [];
            $scope.newProduct = {};

            // Hàm này được thêm vào để chuyển dữ liệu từ form sang định dạng JSON
            $scope.convertToJSON = function () {
                $scope.newProduct.ngay_tao = new Date(
                    $scope.newProduct.ngay_tao
                ).toLocaleString();
                $scope.newProduct.ngay_cap_nhat = new Date(
                    $scope.newProduct.ngay_cap_nhat
                ).toLocaleString();
                return angular.toJson($scope.newProduct);
            };

            $http({
                method: "GET",
                url: "http://localhost:3000/san-pham",
            }).then(function (response) {
                $scope.danhsach = response.data;
            });

            $scope.addProduct = function () {
                // Gửi dữ liệu lên máy chủ 
                $http({
                    method: "POST",
                    url: "http://localhost:3000/san-pham",
                    data: $scope.convertToJSON(), // Sử dụng hàm convertToJSON để chuyển đổi dữ liệu
                }).then(function (response) {
                    console.log(response.data);
                    // Thực hiện các xử lý khác sau khi gửi thành công
                    // Có thể làm refresh danh sách sản phẩm hoặc thực hiện các bước khác
                    $scope.danhsach.push(response.data); // Thêm sản phẩm mới vào danh sách hiện tại
                    $scope.newProduct = {}; // Đặt lại form sau khi thêm thành công
                });
            };
        });