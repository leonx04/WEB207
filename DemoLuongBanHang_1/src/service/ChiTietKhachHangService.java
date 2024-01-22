/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package service;


import java.util.ArrayList;
import model.ChiTietKhachHang;
import repository.ChiTietKhachHangRepo;



public class ChiTietKhachHangService {
    ChiTietKhachHangRepo detailKH = new ChiTietKhachHangRepo();
    public ArrayList<ChiTietKhachHang> getAll(){
        return detailKH.getAll();
    }
        public String addNew(ChiTietKhachHang detail){
        if(detailKH.addNew(detail)== true){
            return "Thêm Thanh Cong";
        }
        else{
            return "Thêm That Bai";
        }
    }
      
}
