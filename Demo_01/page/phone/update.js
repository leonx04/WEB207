
console.log("Khởi tạo thành công file UPDATE")
app.controller("updateCtrl", function ($scope, $http,$routeParams) {
    console.log("Khai báo thành công updateCtrl")

    $scope.phone = {
        id: '',
        ten: '',
        hang: '',
        gia: ''
    }

    $http({
        method: 'GET',
        url: 'http://localhost:3000/product/' + $routeParams.id
    }).then(function (response) {
        $scope.phone = response.data;

    })
    $scope.formMessage = "";
    $scope.formStatus = true;
    $scope.OnClickUpdate = function () {
        console.log("Dữ liệu được thêm vào là : ", $scope.phone);
        $scope.formMessage = "";
        $scope.formStatus = true;

        if ($scope.phone.ten === "") {
            $scope.formMessage = "Vui lòng nhâp vào Tên";
            $scope.formStatus = false;
            return;
        }
        if ($scope.phone.hang === "") {
            $scope.formMessage = "Vui lòng chọn hãng";
            $scope.formStatus = false;
            return;
        }
        if ($scope.phone.gia === "") {
            $scope.formMessage = "Vui lòng nhâp vào gia tien";
            $scope.formStatus = false;
            return;
        }
        if (isNaN($scope.phone.gia) ||
            Number($scope.phone.gia) < 100) {
            $scope.formMessage = "Vui lòng nhâp vào giá tiền phải là số và lớn hơn 100";
            $scope.formStatus = false;
            return;
        }
        $http({
            method: "PUT",
            url: 'http://localhost:3000/product/' + $routeParams.id,
            data: $scope.phone
        }).then(function (response) {
            alert("Cập nhật thành công")
        })
    }
})

