console.log('Log để kiểm tra: Đã nhúng file list thành công');

//5.1 Khai báo controller listProductCtrl
app.controller("listProductCtrl", function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo listProductCtrl thành công')

    //1 Khai báo biến cần thiết
    $scope.listProduct = [];

    //2 Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product'
    }).then(function (response) {
        //Gán giá trị sau khi calll api thành công
        $scope.listProduct = response.data;

        // sử dụng ng-repeat để in dữ liệu ra 
    })

    $scope.onlClickDeleted = function (id) {
        console.log('Log thử', id);

        // Call api để xóa bản ghi
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/product/' + id
        }).then(function (response) {
            // Xư lý sau khi xóa thành công
            alert('Xóa thành công')
            
        })
    }
})