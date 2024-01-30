console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('detailProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    //1. Khai báo biến cần thiết
    //mở file create.js copy phần khai báo biến $scope.product
    $scope.product = {
        id: '',
        name: '',
        price: '',
        category: ''
    };

    //call api lấy thông tin chi tiét sp
    $http({
        method: 'get',
        url: 'http://localhost:3000/product/' + $routeParams.id
    }).then(function (response) {
        //xử lú logic sau khi call api thành công
        //gán giá trị vào biến $scope.product
        $scope.product = response.data;

        console.log('Log để kiểm tra: $scope.product' + $scope.product);
    })

    //3 Gán link điều hướng cho các btn


})