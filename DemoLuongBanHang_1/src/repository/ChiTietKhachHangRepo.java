/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import model.ChiTietKhachHang;


public class ChiTietKhachHangRepo {
    DBConnection dbConnection;
    
    public ArrayList<ChiTietKhachHang> getAll(){
        String sql = "SELECT [id] ,[ten]  ,[sdt] ,[email] ,[ngay_tham_gia] "
                + " ,[gioiTinh],[diaChi] ,[so_CCCD] ,[ngay_sinh]"
                + " ,[hinh] FROM ChiTietKhachHang";
        ArrayList<ChiTietKhachHang> list = new ArrayList<>();
        try (Connection conn = DBConnection.getDBConect();
                PreparedStatement pst = conn.prepareCall(sql)
                ){
            ResultSet rs = pst.executeQuery();
            while (rs.next()) { 
                ChiTietKhachHang detail = new ChiTietKhachHang();
                detail.setId(rs.getInt(1));
                detail.setTen(rs.getString(2));
                detail.setSdt(rs.getString(3));
                detail.setEmai(rs.getString(4));
                detail.setNgay_tham_gia(rs.getString(5));
                detail.setGioiTinh(rs.getString(6));
                detail.setDiaChi(rs.getString(7));
                detail.setSo_CCCD(rs.getString(8));
                detail.setNgay_sinh(rs.getString(9));
  
                list.add(detail);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
    public Boolean addNew(ChiTietKhachHang detail){
        String sql = "INSERT INTO ChiTietKhachHang (ten ,sdt ,email,ngay_tham_gia,gioiTinh ,diaChi ,so_CCCD ,ngay_sinh) VALUES (?,?,?,?,?,?,?,?)";
        
        try(Connection conn = DBConnection.getDBConect();
            PreparedStatement pst = conn.prepareStatement(sql)){
            
            pst.setString(1, detail.getTen());
            pst.setString(2, detail.getSdt());
            pst.setString(3, detail.getEmai());
            pst.setString(4, detail.getNgay_tham_gia());
            pst.setString(5, detail.getGioiTinh());
            pst.setString(6, detail.getDiaChi());
            pst.setString(7, detail.getSo_CCCD());
            pst.setString(8, detail.getNgay_sinh());
                    
            int kq = pst.executeUpdate();
            return kq > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public int deleteKH(String maKH) {
        String sql = "DELETE FROM ChiTietKhachHang \n" +
"      WHERE id = ?";
        try (Connection conn = DBConnection.getDBConect();
            PreparedStatement pst = conn.prepareStatement(sql)){
            

            pst.setObject(1, maKH);
            return pst.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 1;
    }
    
   public Integer update(ChiTietKhachHang detail){
       Integer row = null;
       String sql = "UPDATE ChiTietKhachHang SET ten = ?,sdt =?  ,email = ?,ngay_tham_gia = ?,gioiTinh = ? ,diaChi = ? ,so_CCCD = ? ,ngay_sinh = ? WHERE id = ?";
        
        try(Connection conn = DBConnection.getDBConect();
            PreparedStatement pst = conn.prepareStatement(sql)){
            
            pst.setString(1, detail.getTen());
            pst.setString(2, detail.getSdt());
            pst.setString(3, detail.getEmai());
            pst.setString(4, detail.getNgay_tham_gia());
            pst.setString(5, detail.getGioiTinh());
            pst.setString(6, detail.getDiaChi());
            pst.setString(7, detail.getSo_CCCD());
            pst.setString(8, detail.getNgay_sinh());
            pst.setInt(9, detail.getId()); 
            
            int kq = pst.executeUpdate();
            return kq;
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return row;
    }

}
