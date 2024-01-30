

app.controller('ListStudentController', function ($scope, $http) {
    console.log("Khai báo ListStudentController thành công")

    $scope.ListStudent = [];

    $http({
        method: 'GET',
        url: '  http://localhost:3000/hoctap'
    }).then(function (response) {
        $scope.ListStudent = response.data;
    })
})