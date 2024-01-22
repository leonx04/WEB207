package service;

import java.util.List;
import model.KhachHang;
import repository.KhachHangRepository;

public class KhachHangService {

    KhachHangRepository khRepo = new KhachHangRepository();

    public List<KhachHang> getAllKhachHang() {
        return khRepo.getAllKhachHang();
    }

}
