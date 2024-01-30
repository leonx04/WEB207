console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listProductCtrl
app.controller('listProductCtrl', function ($scope, $rootScope, $http) {
    console.log('Log để kiểm tra: Khai báo listProductCtrl thành công');

    $scope.onClickAddToCart = function () {
        $rootScope.cartNumber += 1;
    }


})
