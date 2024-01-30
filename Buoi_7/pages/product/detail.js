console.log('Log để kiểm tra: Đã nhúng file detail thành công');

//5.1 Khai báo controller detailProductCtrl
app.controller("detailProductCtrl", function($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo listProductCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);


})