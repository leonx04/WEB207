console.log("Nhúng file Detail_product thành công");

app.controller('Detailproduct', function ($scope, $http, $routeParams) {
    console.log("Khai bao Detailproduct thành công ");

    $scope.product = {
        id: '',
        ten: '',
        hinh_anh: '',
        danh_muc: '',
        gia_niem_yet: '',
        gia_ban: '',
        uu_dai: '',
        chat_lieu: '',
        bao_hanh: '',
        danh_muc: ''
    }


    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function (reponse) {
        $scope.product = reponse.data;
    })
})