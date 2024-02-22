
console.log("Khởi tạo thành công file detail")
app.controller("detailCtrl", function ($scope, $http, $routeParams) {
    console.log("Khai báo thành công detailCtrl")

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

})

