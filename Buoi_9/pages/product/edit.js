console.log('Log để kiểm tra: Đã nhúng file edit  thành công');

//5.1 Khai báo controller detailProductCtrl
app.controller("editProductCtrl", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);
    //1. Khai báo biến cần thiết
    //mở file create.js copy phần khai báo biến $scope.product
    $scope.product = {
        id: '',
        name: '',
        price: '',
        category: ''
    };

    // Biến xử lí validate
    $scope.formMessage = "";
    $scope.formStatus = true;

    //Liên kết biến  và html 

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

    //Băt sự kiện click button edit
    // Lưu ý nhớ sửa tên hàm
    // Sửa method của tạo mới từ POST Thành PUT
    $scope.onClickEdit = function () {
        console.log("Log thử giá trị biến $scope.product", $scope.product);

        //validate dữ liệu đầu vào
        //Thiết kế html
        //Khai báo biến cần thiết cho validate
        //Liên kết biến vào html

        // Reset validate
        $scope.formStatus = true;
        $scope.formMessage = "";

        //Validate id: Bắt buộc
        if ($scope.product.id === "") {
            $scope.formStatus = false;
            $scope.formMessage = "Mời bạn nhập id";

            return; // Để kết thúc function luôn
        }

        //Validate name: Bắt buộc
        if ($scope.product.name === "") {
            $scope.formStatus = false;
            $scope.formMessage = "Mời bạn nhập name";

            return; // Để kết thúc function luôn
        }

        //Validate price
        // Ví dụ validate: Bắt buộc, phải là số, không được nhỏ hơn 1,000,000 vnđ
        if (
            $scope.product.price === "" ||
            isNaN($scope.product.price) ||
            Number($scope.product.price) < 1000000
        ) {
            $scope.formStatus = false;
            $scope.formMessage =
                "Mời bạn nhập giá là số và lớn hơn hoặc bằng 1000000";

            return;
        }

        // Nếu code chạy được đến đây thì form hợp lệ
        console.log("Form hợp lệ");

        //3.2: call api để update dl vào db
        $http({
            method: "PUT",
            url: "http://localhost:3000/product/" + $routeParams.id,
            data: $scope.product,
        }).then(function (response) {
            //call api thànhc ông
            //thông thường chúng ta sẽ hiệnr thị thông báo tạo mới thành công
            //Lưu ý: LIve server. Sau khi post, put, patch thành công, trình duyệt sẽ tự refresh lại
            //=> buộc phải dùng alert của js để báo thành công
            alert("Chúc mừng bạn tạo mới thành công");
        });
    };
})