console.log('Log để kiểm tra: Đã nhúng file create thành công');

//5.1 Khai báo controller detailProductCtrl
app.controller("createProductCtrl", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);
})