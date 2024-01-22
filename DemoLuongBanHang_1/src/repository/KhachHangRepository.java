package repository;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import model.KhachHang;

public class KhachHangRepository {

    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public List<KhachHang> getAllKhachHang() {
        List<KhachHang> listKH = new ArrayList<>();
        Connection conn = null;
        Statement sttm = null;
        ResultSet rs = null;
        try {
            String sSQL = "SELECT * FROM KhachHang";
            conn = DBConnection.getDBConect();
            sttm = conn.createStatement();
            rs = sttm.executeQuery(sSQL);
            while (rs.next()) {
                KhachHang kh = new KhachHang();
                kh.setMaKH(rs.getInt(1));
                kh.setTenKH(rs.getNString(2));
                kh.setSDT(rs.getString(3));
                kh.setDiaChi(rs.getNString(5));
                listKH.add(kh);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            rs.close();
            sttm.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listKH;
    }

}
