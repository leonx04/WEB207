
console.log('Log để kiểm tra: Đã nhúng file QLDanhMuc thành công');

//5.1 Khai báo controller QLDanhMuc
app.controller("QLDanhMuc", function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo QLDanhMuc thành công');

    //app.config(function ($routeProvider) {
    //$routeProvider
    //    .when("/danhsach-danhmuc", {
    //        templateUrl: "admin/quanly/danhmuc/danhsach.html",
    //        controller: "danhsachDM",
    //    })
    //    .when("/chitiet-danhmuc", {
    //        templateUrl: "admin/quanly/danhmuc/chitiet.html",
    //        controller: "chitietDM",
    //   })
    //   .when("/create-danhmuc", {
    //       templateUrl: "admin/quanly/danhmuc/create.html",
    //       controller: "createDM",
    //  })
    //  .when("/update-danhmuc", {
    //      templateUrl: "admin/quanly/danhmuc/update.html",
    //      controller: "updateDM",
    //  })
    //  .when("/delete-danhmuc", {
    //     templateUrl: "admin/quanly/danhmuc/delete.html",
    //     controller: "deleteDM",
    // })
    //})
})