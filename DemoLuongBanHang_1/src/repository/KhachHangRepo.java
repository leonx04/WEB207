/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import model.KhachHang1;

/**
 *
 * @author Phan_Triu
 */
public class KhachHangRepo {
    DBConnection dbConnection;
    
   public ArrayList<KhachHang1> getAll(){
        
        ArrayList<KhachHang1> listKH = new ArrayList<>();
        try {
            String sql = "SELECT [id] ,[ten] ,[sdt] ,[email] ,[diachi] FROM [dbo].[KhachHang]";
                   Connection conn = DBConnection.getDBConect();
                PreparedStatement pst = conn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            while (rs.next()) { 
                   KhachHang1 kh  = new KhachHang1();
                kh.setId(rs.getInt(1));
                kh.setTen(rs.getString(2));
                kh.setSdt(rs.getString(3));
                kh.setEmai(rs.getString(4));
                kh.setDiaChi(rs.getString(5));
                
//                kh.setImage(rs.getString(7));
//                Integer id = rs.getInt("id");
//                String ten = rs.getString("ten");
//                String sdt = rs.getString("sdt");
//                String email = rs.getString("email");
//                String ngayThamGia = rs.getString("ngay_tham_gia");
//                boolean trangThai = rs.getBoolean("trang_thai");
//
//                KhachHang kh = new KhachHang(id, ten, email, ngayThamGia, trangThai);
//              
                listKH.add(kh);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listKH;
    }
    public int deleteKH(String maKH) {
        String sql = "DELETE [id],[ten] ,[sdt] ,[email] ,[ngay_tham_gia] ,[trang_thai] FROM KhachHang WHERE id = ?";
        try (Connection conn = DBConnection.getDBConect();
            PreparedStatement pst = conn.prepareStatement(sql)){
            

            pst.setObject(1, maKH);
            return pst.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 1;
    }
//    public int update(KhachHang kh) {
//        
//        String sql = "UPDATE KhachHang SET ten = ?,sdt = ?,email = ?,diaChi = ? WHERE [id] = ?";
//        try (Connection conn = dbConnection.getConnection();
//            PreparedStatement pst = conn.prepareStatement(sql)){
//            
//            
//            pst.setObject(1, kh.getTenKH());
//            pst.setObject(2, kh.getSdt());
//            pst.setObject(3, kh.getEmail());
//            pst.setObject(4, kh.getDiaChi());
//            pst.setObject(5, kh.getId());
//            return pst.executeUpdate();
//        } catch (Exception e) {
//            System.out.println(e);
//        }
//        return 0;
//}
    
    
}
