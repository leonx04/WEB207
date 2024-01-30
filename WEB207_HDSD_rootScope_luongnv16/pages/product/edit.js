console.log('Log để kiểm tra: Đã nhúng file pages/product/edit.js thành công');

// Khai báo controller editProductCtrl
app.controller('editProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);


})
