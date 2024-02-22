
console.log("Khởi tạo thành công file create")
app.controller("createCtrl", function ($scope, $http) {
    console.log("Khai báo thành công createCtrl")

    $scope.phone = {
        id: '',
        ten: '',
        hang: '',
        gia: ''
    }

    $scope.formMessage = "";
    $scope.formStatus = true;
    $scope.OnClickCreate = function () {
        console.log("Dữ liệu được thêm vào là : ", $scope.phone);


        $scope.formMessage = "";
        $scope.formStatus = true;

        if ($scope.phone.id === "") {
            $scope.formMessage = "Vui lòng nhâp vào ID";
            $scope.formStatus = false;
            return;
        }
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
            method: "POST",
            url: 'http://localhost:3000/product',
            data: $scope.phone
        }).then(function (response) {
            alert("Thêm thành công ")
        })
    }
})

