console.log('Log để kiểm tra: Đã nhúng file deleteDM thành công');

//5.1 Khai báo controller createDM
app.controller("deleteDM", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo deleteDM thành công');

    $scope.danhsach = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (response) {
        $scope.danhsach = response.data;

        console.log('Log để in thử giá trị params từ url', $scope.danhsach);
    })

    $scope.onClickDeleteDM = function (id) {
        console.log("Log thử id chọn xóa:", id);

        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/danh-muc/' + id
        }).then(function (response) {
            alert("Xóa thành công ")
        })
    }
})