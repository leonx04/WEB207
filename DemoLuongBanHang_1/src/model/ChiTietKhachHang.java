/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;


public class ChiTietKhachHang{
    private int id;
    private String ten;
    private String sdt;
    private String emai;
    private String diaChi;
    private String ngay_tham_gia;
    private String gioiTinh;
    private String hinh;
    private String so_CCCD;
    private String ngay_sinh;

    public ChiTietKhachHang(int id, String ten, String sdt, String emai, String diaChi, String so_CCCD) {
        this.id = id;
        this.ten = ten;
        this.sdt = sdt;
        this.emai = emai;
        this.diaChi = diaChi;
        this.so_CCCD = so_CCCD;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getEmai() {
        return emai;
    }

    public void setEmai(String emai) {
        this.emai = emai;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getNgay_tham_gia() {
        return ngay_tham_gia;
    }

    public void setNgay_tham_gia(String ngay_tham_gia) {
        this.ngay_tham_gia = ngay_tham_gia;
    }

    public String gioiTinh() {
        return gioiTinh;
    }

//    public void setgioiTinh(String gioiTinh) {
//        this.gioiTinh = gioiTinh;
//    }

    public String getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getHinh() {
        return hinh;
    }

    public void setHinh(String hinh) {
        this.hinh = hinh;
    }

    public String getSo_CCCD() {
        return so_CCCD;
    }

    public void setSo_CCCD(String so_CCCD) {
        this.so_CCCD = so_CCCD;
    }

    public String getNgay_sinh() {
        return ngay_sinh;
    }

    public void setNgay_sinh(String ngay_sinh) {
        this.ngay_sinh = ngay_sinh;
    }

    public ChiTietKhachHang() {
    }

  
   
}
