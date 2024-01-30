console.log("Log để kiểm tra: Đã nhúng file QLSanPham thành công");

//5.1 Khai báo controller QLDanhMuc
app.controller("QLSanPham", function ($scope, $http, $routeParams) {
  console.log("Log để kiểm tra: Khai báo QLSanPham thành công");

  console.log("Log để in thử giá trị params từ url", $routeParams);

  // 1. Khai báo biến cần thiết
  $scope.QLSanPham = [];


  // 2. Call api lấy danh sách sản phẩm
  $http({
    method: 'GET',
    url: 'http://localhost:3000/san-pham'
  }).then(function (response) {
    // Gán giá trị sau khi call api thành công
    $scope.QLSanPham = response.data
    console.log("Log thử giá trị biến QLSanPham", $scope.QLSanPham);

  })
  
  $scope.product = {
    id: '',
    ten: '',
    hinh_anh: '',
    danh_muc: '',
    gia_niem_yet: '',
    gia_ban: '',
    uu_dai: '',
    ngay_tao: '',
    ngay_cap_nhat: '',
    trang_thai: ''
  }

  
});