console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listProductCtrl
app.controller('listProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo listProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.listProduct = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.listProduct = response.data
        console.log("Log thử giá trị biến listProduct", $scope.listProduct);
        
    })


    // 3. Sử dụng ng-repeat để hiển thị dữ liệu ra màn hình
    // Mở file list.html và code


    // 4. Gán link điều hướng vào các button cần thiết


    // 5. Bắt sự kiện delete
    $scope.onClickDelete = function(id) {
        console.log('Log thử id muốn xóa: ', id);

        // Call api để xóa bản ghi
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/product/' + id
        }).then(function(response) {
            // Xử lý logic sau khi xóa thành công
            alert("Mừng bạn xóa thành công.")

            // Đoạn code này chỉ danh cho những bạn ko bị F5 thôi nhé
            // Call api lấy danh sách sản phẩm mới
            // 2. Call api lấy danh sách sản phẩm
            // $http({
            //     method: 'GET',
            //     url: 'http://localhost:3000/product'
            // }).then(function (response) {
            //     // Gán giá trị sau khi call api thành công
            //     $scope.listProduct = response.data
            //     console.log("Log thử giá trị biến listProduct", $scope.listProduct);

            // })

        })


    }


})
