

app.controller('CreateStudentController', function ($scope, $http) {
    console.log("Khai báo CreateStudentController thành công")

    $scope.Studen = {
        id: "",
        hoTen: "",
        namSinh: "",
        chuyenNghanh: ""
    }

    $scope.formMessage = "";
    $scope.formStatus = true;

    $scope.OnClickCreate = function () {
        console.log($scope.Student);

        $scope.formMessage = "";
        $scope.formStatus = true;

        if ($scope.Studen.id === '') {
            $scope.formStatus = false;
            $scope.formMessage = "ID LÀ THÔNG TIN BẮT BUỘC";
            return;
        }

        if ($scope.Studen.hoTen === '') {
            $scope.formStatus = false;
            $scope.formMessage = "Tên là thông tin bắt buộc";
            return;
        }

        if ($scope.Studen.namSinh === ''
            || isNaN($scope.Studen.namSinh)) {
            $scope.formStatus = false;
            $scope.formMessage = "Năm sinh là thông tin bắt buộc và phải là số";
            return;
        }

        if ($scope.Studen.chuyenNghanh === '') {
            $scope.formStatus = false;
            $scope.formMessage = "Chuyên ngành LÀ THÔNG TIN BẮT BUỘC";
            return;
        }

        $http({
            method: 'POST',
            url: '  http://localhost:3000/hoctap',
            data: $scope.Studen
        }).then(function (response) {
            alert("Tạo mới thành công")
        })
    }
})