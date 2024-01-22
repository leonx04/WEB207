
package model;

public class KhachHang {
    private int MaKH;
    private String tenKH;
    private String SDT;
    private String DiaChi;

    public KhachHang() {
    }

    public KhachHang(int MaKH, String tenKH, String SDT, String DiaChi) {
        this.MaKH = MaKH;
        this.tenKH = tenKH;
        this.SDT = SDT;
        this.DiaChi = DiaChi;
    }

    public int getMaKH() {
        return MaKH;
    }

    public void setMaKH(int MaKH) {
        this.MaKH = MaKH;
    }

    public String getTenKH() {
        return tenKH;
    }

    public void setTenKH(String tenKH) {
        this.tenKH = tenKH;
    }

    public String getSDT() {
        return SDT;
    }

    public void setSDT(String SDT) {
        this.SDT = SDT;
    }

    public String getDiaChi() {
        return DiaChi;
    }

    public void setDiaChi(String DiaChi) {
        this.DiaChi = DiaChi;
    }
    
}
