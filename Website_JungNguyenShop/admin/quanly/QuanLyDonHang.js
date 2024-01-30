console.log('Log để kiểm tra: Đã nhúng file QLDonHang thành công');

//5.1 Khai báo controller QLDonHang
app.controller("QLDonHang", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo QLDonHang thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);
})