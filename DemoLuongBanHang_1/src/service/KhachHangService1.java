/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package service;

import java.util.ArrayList;
import model.KhachHang1;
import repository.KhachHangRepo;


public class KhachHangService1 {
    KhachHangRepo repoKH = new KhachHangRepo();
    public ArrayList<KhachHang1> getAll(){
        return repoKH.getAll();
    }

}
