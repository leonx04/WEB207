console.log('Log để kiểm tra: Đã nhúng file edit  thành công');

//5.1 Khai báo controller detailProductCtrl
app.controller("editProductCtrl", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);
})