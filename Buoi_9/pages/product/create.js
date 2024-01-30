console.log("Log để kiểm tra: Đã nhúng file create thành công");

//5.1 Khai báo controller detailProductCtrl
app.controller("createProductCtrl", function ($scope, $http, $routeParams) {
    console.log("Log để kiểm tra: Khai báo createProductCtrl thành công");

    console.log("Log để in thử giá trị params từ url", $routeParams);

    //Khai báo các biến chính cần thiết
    // Bisen lưu thông tin product
    $scope.product = {
        id: "",
        name: "",
        price: "",
        category: "",
    };

    // Biến xử lí validate
    $scope.formMessage = "";
    $scope.formStatus = true;

    //Liên kết biến với html | sử dụng ng-model
    // Mở file hml để liên kết

    //Bắt sự kiện click
    //Khai báo function
    // liên kết function với html bằng ng-click
    $scope.onClickCreate = function () {
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

        //Validate price: Bắt buộc, phải là số, không được nhỏ hơn 1,000,000 vnđ
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

        //3.2: call api để lưu dl vào db
        $http({
            method: "POST",
            url: "http://localhost:3000/product",
            data: $scope.product,
        }).then(function (response) {
            //call api thànhc ông
            //thông thường chúng ta sẽ hiệnr thị thông báo tạo mới thành công
            //Lưu ý: LIve server. Sau khi post, put, patch thành công, trình duyệt sẽ tự refresh lại
            //=> buộc phải dùng alert của js để báo thành công
            alert("Chúc mừng bạn tạo mới thành công");
        });
    };


});