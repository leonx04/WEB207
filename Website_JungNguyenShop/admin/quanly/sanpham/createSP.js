console.log("Log để kiểm tra đã nhúng file createSP thành công");

app.controller("createSP", function ($scope, $http, $routeParams) {
    console.log("Khai báo createSP thành công");

    $scope.sanpham = {
        id: '',
        ten: '',
        hinh_anh: '',
        danh_muc: '',
        gia_niem_yet: '',
        gia_ban: '',
        uu_dai: '',
        ngay_tao: '',
        ngay_cap_nhat: '',
        so_luong: '',
        so_luong_da_ban: '0',
        trang_thai: 'Đang bán',
        chat_lieu: '',
        bao_hanh: ''
    }

    

    // Khai báo hàm định dạng giá tiền
    function formatCurrency(input) {
        // Sử dụng NumberFormat để thực hiện định dạng
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });

        // Định dạng giá và trả về
        return formatter.format(input);
    }

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (response) {

        $scope.danhmuc = response.data;

        console.log('Log in thử giá trị của biến $scope.danhsach:', $scope.danhmuc);
    })



    $scope.formMessage = '',
        $scope.formStatus = true;

    
    $scope.createSP = function () {
        console.log("Log thử giá trị được thêm ", $scope.sanpham);

        $scope.formMessage = '',
            $scope.formStatus = true;

        if ($scope.sanpham.ten === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập tên sản phẩm';
            return;
        }
        if ($scope.sanpham.id === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập mã sản phẩm';
            return;
        }
        //if ($scope.sanpham.hinh_anh === '') {
        //$scope.formStatus = false;
        //$scope.formMessage = 'Vui lòng chọn ảnh cho sản phẩm';
        //return;
        //}
        if ($scope.sanpham.danh_muc === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng chọn danh mục cho sản phẩm';
            return;
        }
        if ($scope.sanpham.gia_niem_yet === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá gốc sản phẩm';
            return;
        }
        if (isNaN($scope.sanpham.gia_niem_yet)) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá niêm yết sản phẩm là số';
            return;
        }
        if (Number($scope.sanpham.gia_niem_yet) < 1000) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá niêm yết sản phẩm phải lớn hơn 1000';
            return;
        }
        if ($scope.sanpham.gia_ban === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá bán sản phẩm';
            return;
        }
        if (isNaN($scope.sanpham.gia_ban)) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá bán sản phẩm là số';
            return;
        }
        if (Number($scope.sanpham.gia_ban) < 1000) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập giá bán sản phẩm phải lớn hơn 1000';
            return;
        }
        if ($scope.sanpham.uu_dai === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập ưu đãi cho sản phẩm';
            return;
        }
        if (isNaN($scope.sanpham.uu_dai)) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập ưu đãi cho sản phẩm là số';
            return;
        }
        if ($scope.sanpham.chat_lieu === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập chất liệu sản phẩm';
            return;
        }
        if ($scope.sanpham.so_luong === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập số lượng sản phẩm';
            return;
        }
        if (isNaN($scope.sanpham.so_luong)) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập số lượng sản phẩm là số';
            return;
        }
        if (Number($scope.sanpham.so_luong) < 1) {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập số lượng sản phẩm phải lớn hơn 1';
            return;
        }
        if ($scope.sanpham.bao_hanh === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng nhập thông tin bảo hành sản phẩm';
            return;
        }
        if ($scope.sanpham.ngay_tao === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Vui lòng chọn ngày tạo sản phẩm';
            return;
        }
        //if ($scope.sanpham.ngay_cap_nhat === '') {
        //$scope.formStatus = false;
        //$scope.formMessage = 'Vui lòng chọn ngày cập nhật sản phẩm';
        //return;
        //}
        //if ($scope.sanpham.trang_thai === '') {
        //    $scope.formStatus = false;
        //    $scope.formMessage = 'Vui lòng chọn trạng thái cho sản phẩm';
        //    return;
        //}

        // Định dạng giá niêm yết và giá bán trước khi gửi đi
        $scope.sanpham.gia_niem_yet = formatCurrency($scope.sanpham.gia_niem_yet);
        $scope.sanpham.gia_ban = formatCurrency($scope.sanpham.gia_ban);
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/san-pham',
            data: $scope.sanpham
        }).then(function (response) {
            alert('Đã tạo mới thành công');
            console.log("Thông tin hợp lệ");
        })
    }

})