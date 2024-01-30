console.log('Log để kiểm tra: Đã nhúng file createDM thành công');

//5.1 Khai báo controller createDM
app.controller("createDM", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo createDM thành công');

    $scope.danhmuc = {
        id: '',
        ten: '',
        mo_ta: '',
        ngay_tao: '',
        ngay_cap_nhat: '',
        trang_thai: 'Đang bán'
    }

    $scope.formMessage = '';
    $scope.formStatus = true;

    $scope.OnClickCreateDN = function () {
        console.log("Log thử giá trị biến ", $scope.danhmuc);

        $scope.formMessage = '';
        $scope.formStatus = true;


        if ($scope.danhmuc.ten_dm === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập tên danh mục';
            return;
        }
        if ($scope.danhmuc.id === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập mã danh mục';

            return;
        }
        if ($scope.danhmuc.mo_ta === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập mô tả danh mục';
            return;
        }
        // if ($scope.danhmuc.ngay_tao === '') {
        //    $scope.formStatus = false;
        //    $scope.formMessage = 'Mời bạn chọn ngày tạo cho danh mục';
        //     return;
        // }
        //if ($scope.danhmuc.trang_thai === '') {
        //    $scope.formStatus = false;
        //    $scope.formMessage = 'Mời bạn chọn trạng thái cho danh mục';
        //    return;
        //}

        $http({
            method: 'POST',
            url: 'http://localhost:3000/danh-muc',
            data: $scope.danhmuc
        }).then(function (response) {
            alert('Đã tạo mới thành công');
            console.log("Thông tin hợp lệ");
        })

    }
})