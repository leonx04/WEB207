console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');

// Khai báo controller creatPhoneCtrl
app.controller('creatPhoneCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo creatPhoneCtrl thành công');

    $scope.phone = {
        id: '',
        ten: '',
        hang: '',
        gia: ''
    }

    // Liên kết biến với html

    $scope.onClickSubmit = function () {
        console.log("Log thử giá trị $scope.phone", $scope.phone);


        $http({
            method: 'POST',
            url: 'http://localhost:3000/phone',
            data: $scope.phone
        }).then(function (response) {
            
            alert('Thêm sản phẩm thành công!');
        })
    }



})
