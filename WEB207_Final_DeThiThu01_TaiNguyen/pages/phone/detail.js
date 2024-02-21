console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailPhoneCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('detailPhoneCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailPhoneCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);



})
