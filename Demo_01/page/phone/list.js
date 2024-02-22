
console.log("Khởi tạo thành công file list")
app.controller("listCtrl", function ($scope, $http, $routeParams) {
    console.log("Khai báo thành công listCtrl")

    $scope.phone = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product'
    }).then(function (response) {
        $scope.phone = response.data;

    })

    $scope.OnClickDelete = function (idmuonxoa) {
        
        let confirmValue = confirm("Bạn chắc chắn muốn xóa ?");

        if (confirmValue) { 
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/product/' + idmuonxoa
            }).then(function (response) {
                alert("Xóa thành công");

                window.location.href = '#!list-phone'

            })
        }

    }
})

