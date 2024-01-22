/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JDialog.java to edit this template
 */
package UI;


import java.util.List;
import javax.swing.table.DefaultTableModel;

import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.JOptionPane;
import model.ChiTietKhachHang;
import model.model_Form;
import repository.ChiTietKhachHangRepo;
import service.ChiTietKhachHangService;
/**
 *
 * @author Phan_Triu
 */
public class CustomerDetail_Dialog extends javax.swing.JDialog {
    
    ChiTietKhachHangRepo detailKH = new ChiTietKhachHangRepo();
    ChiTietKhachHangService detailSV = new ChiTietKhachHangService();
    
    int row = -1;
    /**
     * Creates new form CustomerDetail_Dialog
     */
    public CustomerDetail_Dialog(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();
        setLocationRelativeTo(null);
        fillTable(detailKH.getAll());
    }
    
    public void fillTable(List<ChiTietKhachHang> list) {
        DefaultTableModel model = new DefaultTableModel();
        model = (DefaultTableModel) tblChiTiet.getModel();
        model.setRowCount(0);
        for (ChiTietKhachHang kh : list) {
            model.addRow(new Object[]{
                kh.getId(),
                kh.getTen(),
                kh.getSdt(),
                kh.getEmai(),
                kh.getNgay_tham_gia(),
                kh.getGioiTinh(),
                kh.getDiaChi(),
                kh.getSo_CCCD(),
                kh.getNgay_sinh(),
            });
        }
    }
    
    public void click(){
        row = tblChiTiet.getSelectedRow();
        
        txtId.setText(tblChiTiet.getValueAt(row, 0).toString());
        txtTenKH3.setText(tblChiTiet.getValueAt(row, 1).toString());
        txtSdt3.setText(tblChiTiet.getValueAt(row, 2).toString());
        txtEmail3.setText(tblChiTiet.getValueAt(row, 3).toString());
        ngaythamgia.setDate(model_Form.layNgayDate(tblChiTiet.getValueAt(row, 4).toString()));
            
            if(tblChiTiet.getValueAt(row, 5).equals("Nam       ")){       
                rdoNam.setSelected(true);
//                System.out.println(detail.getTrangThai());
            }else{
                rdoNu.setSelected(true);
//                System.out.println(detail.getTrangThai());
            }
            
            txtDiachi.setText(tblChiTiet.getValueAt(row, 6).toString());
            txtCCCD3.setText(tblChiTiet.getValueAt(row, 7).toString());
            
            ngaySinh.setDate(model_Form.layNgayDate(tblChiTiet.getValueAt(row, 8).toString()));
    }
    
    ChiTietKhachHang getModel(){
        
           ChiTietKhachHang kh = new ChiTietKhachHang();
           kh.setId(Integer.valueOf(txtId.getText()));
           kh.setTen(txtTenKH3.getText());
           kh.setSdt(txtSdt3.getText());
           kh.setEmai(txtEmail3.getText());
           kh.setGioiTinh(rdoNam.getText());
           String ngay = model_Form.layNgayString(ngaythamgia.getDate());
           kh.setNgay_tham_gia(ngay);
           String ngaySinh = model_Form.layNgayString(this.ngaySinh.getDate());
           kh.setNgay_sinh(ngaySinh);
           kh.setDiaChi(txtDiachi.getText());
           kh.setSo_CCCD(txtCCCD3.getText());
           return kh;
//     
    }
    
    public void showData() {
        row = tblChiTiet.getSelectedRow();
        ChiTietKhachHang detail = detailSV.getAll().get(row);
        if (row >= 0) {
            
            txtTenKH3.setText(tblChiTiet.getValueAt(row, 1).toString());
            txtSdt3.setText(tblChiTiet.getValueAt(row, 2).toString());
            txtEmail3.setText(tblChiTiet.getValueAt(row, 3).toString());
            
            try {
                int srow = tblChiTiet.getSelectedRow();
                Date date = new SimpleDateFormat("yyyy-MM-dd").parse((String) tblChiTiet.getValueAt(srow, 3));
                ngaythamgia.setDate(date);
                } catch (Exception e) {
                    }
            
            if(detail.getGioiTinh().equalsIgnoreCase("Nam       ")){
                rdoNam.setSelected(true);
//                System.out.println(detail.getTrangThai());
            }else{
                rdoNu.setSelected(true);
//                System.out.println(detail.getTrangThai());
            }
            
            txtDiachi.setText(tblChiTiet.getValueAt(row, 6).toString());
            txtCCCD3.setText(tblChiTiet.getValueAt(row, 7).toString());
            
            try {
            int srow = tblChiTiet.getSelectedRow();
            Date birth = new SimpleDateFormat("yyyy-MM-dd").parse((String) tblChiTiet.getValueAt(srow, 8));
            ngaySinh.setDate(birth);
            } catch (Exception e) {
            }
            
            
        }
    }

   private void insert() {
        ChiTietKhachHang kh = getModel();
        try {
            if (detailSV.addNew(kh) != null) {
                JOptionPane.showMessageDialog(this, "them thanh cong");
                fillTable(detailKH.getAll());
            } else {
                JOptionPane.showMessageDialog(this, "them that bai");

            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, " loi nut them");
        }
    }
    
 
    
    private void update() {
        ChiTietKhachHang kh = getModel();
        try {
            if (detailKH.update(kh) != null) {
                JOptionPane.showMessageDialog(this, "Sửa thanh cong");
                fillTable(detailKH.getAll());
            } else {
                JOptionPane.showMessageDialog(this, "Sửa thất bại");
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, " loi nut sửa");
        }
    }
    
    public void clear(){
        txtCCCD3.setText("");
        txtDiachi.setText("");
        txtEmail3.setText("");
        txtSdt3.setText("");
        txtTenKH3.setText("");
        txtId.setText("");
        ngaySinh.setDateFormatString("");
        ngaythamgia.setDateFormatString("");
    }
    
    public void delete() {
        row = tblChiTiet.getSelectedRow();
        String maKH = tblChiTiet.getValueAt(row, 0).toString();
        ChiTietKhachHang kh = getModel();
        if (detailKH.deleteKH(maKH) > 0) {
            JOptionPane.showMessageDialog(this, "Xóa thành công!");
            fillTable(detailSV.getAll());
        } else {
            JOptionPane.showMessageDialog(this, "Xóa thất bại!");
        }
    }
    
    public boolean check() {
        if (txtTenKH3.getText().equalsIgnoreCase("")) {
            JOptionPane.showMessageDialog(this, "Tên không được để trống!");
            return false;
        }
        if (txtCCCD3.getText().equalsIgnoreCase("")) {
            JOptionPane.showMessageDialog(this, "Số căn cước không được để trống!");
            return false;
        }
        if (txtEmail3.getText().equalsIgnoreCase("")) {
            JOptionPane.showMessageDialog(this, "Email không được để trống!");
            return false;
        }
        if (txtSdt3.getText().equalsIgnoreCase("")) {
            JOptionPane.showMessageDialog(this, "Số điện thoại không được để trống!");
            return false;
        }
        if (txtDiachi.getText().equalsIgnoreCase("")) {
            JOptionPane.showMessageDialog(this, "Địa chỉ không được để trống!");
            return false;
        }
        if (ngaySinh.getDate().equals("")) {
            JOptionPane.showMessageDialog(this, "Ngày sinh không được để trống!");
            return false;
        }
        if (ngaythamgia.getDate().equals("")) {
            JOptionPane.showMessageDialog(this, "Ngày tham gia được để trống!");
            return false;
        }
        return true;
        
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        buttonGroup2 = new javax.swing.ButtonGroup();
        buttonGroup3 = new javax.swing.ButtonGroup();
        jButton1 = new javax.swing.JButton();
        txtEmail3 = new javax.swing.JTextField();
        jButton2 = new javax.swing.JButton();
        jLabel53 = new javax.swing.JLabel();
        jButton3 = new javax.swing.JButton();
        txtSdt3 = new javax.swing.JTextField();
        jButton4 = new javax.swing.JButton();
        lblTrangThai = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblChiTiet = new javax.swing.JTable();
        jLabel55 = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();
        jLabel50 = new javax.swing.JLabel();
        txtDiachi = new javax.swing.JTextField();
        txtTenKH3 = new javax.swing.JTextField();
        jLabel56 = new javax.swing.JLabel();
        jLabel51 = new javax.swing.JLabel();
        txtCCCD3 = new javax.swing.JTextField();
        jLabel52 = new javax.swing.JLabel();
        rdoNam = new javax.swing.JRadioButton();
        rdoNu = new javax.swing.JRadioButton();
        jLabel2 = new javax.swing.JLabel();
        txtId = new javax.swing.JTextField();
        ngaythamgia = new com.toedter.calendar.JDateChooser();
        ngaySinh = new com.toedter.calendar.JDateChooser();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);

        jButton1.setText("Thêm");
        jButton1.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jButton1MouseClicked(evt);
            }
        });

        jButton2.setText("Xóa");
        jButton2.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jButton2MouseClicked(evt);
            }
        });

        jLabel53.setText("SĐT");

        jButton3.setText("Cập Nhật");
        jButton3.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jButton3MouseClicked(evt);
            }
        });
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        jButton4.setText("Làm mới");
        jButton4.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jButton4MouseClicked(evt);
            }
        });

        lblTrangThai.setText("Giới tính");

        tblChiTiet.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "#", "Tên", "Sđt", "Email", "Ngày Tham Gia", "Giới Tính", "Địa Chỉ", "Số CCCD", "Ngày Sinh"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        tblChiTiet.setRowHeight(30);
        tblChiTiet.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblChiTietMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tblChiTiet);

        jLabel55.setText("Ngày sinh");

        jLabel1.setText("Địa chỉ");

        jLabel50.setText("Tên khách hàng");

        jLabel56.setText("Ngày tham gia");

        jLabel51.setText("Mã định danh / CCCD");

        jLabel52.setText("Email");

        buttonGroup1.add(rdoNam);
        rdoNam.setText("Nam");

        buttonGroup1.add(rdoNu);
        rdoNu.setText("Nữ");

        jLabel2.setText("Mã khách hàng");

        txtId.setEditable(false);
        txtId.setForeground(new java.awt.Color(204, 0, 0));

        ngaythamgia.setDateFormatString("yyyy-MM-dd");

        ngaySinh.setDateFormatString("yyyy-MM-dd");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jScrollPane1))
            .addGroup(layout.createSequentialGroup()
                .addGap(156, 156, 156)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jLabel2)
                    .addComponent(txtId, javax.swing.GroupLayout.DEFAULT_SIZE, 224, Short.MAX_VALUE)
                    .addComponent(jLabel56, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(rdoNam)
                        .addGap(18, 18, 18)
                        .addComponent(rdoNu))
                    .addComponent(lblTrangThai, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(ngaythamgia, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addGap(76, 76, 76)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel50, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 298, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(txtDiachi)
                            .addComponent(txtSdt3, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtTenKH3, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtCCCD3, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtEmail3, javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(javax.swing.GroupLayout.Alignment.LEADING, layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                    .addComponent(jLabel52, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(jLabel51, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 131, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(jLabel53, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(jLabel55, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 95, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(jLabel1, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 77, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(0, 172, Short.MAX_VALUE))
                            .addComponent(ngaySinh, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jButton1)
                            .addComponent(jButton2)
                            .addComponent(jButton3)
                            .addComponent(jButton4))))
                .addGap(156, 156, 156))
        );

        layout.linkSize(javax.swing.SwingConstants.HORIZONTAL, new java.awt.Component[] {jButton1, jButton2, jButton3, jButton4});

        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jButton1)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel50)
                        .addGap(9, 9, 9)
                        .addComponent(txtTenKH3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jButton3)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(jLabel51)
                                    .addComponent(jButton2))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(txtCCCD3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel2)
                                .addGap(18, 18, 18)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(6, 6, 6)))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(5, 5, 5)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jButton4)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel52)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(txtEmail3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(12, 12, 12))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(lblTrangThai)
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(rdoNam)
                            .addComponent(rdoNu))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)))
                .addComponent(jLabel53)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(txtSdt3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(jLabel56)
                        .addGap(4, 4, 4)))
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(txtDiachi, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(ngaythamgia, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabel55)
                .addGap(18, 18, 18)
                .addComponent(ngaySinh, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(38, 38, 38)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 150, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(69, 69, 69))
        );

        layout.linkSize(javax.swing.SwingConstants.VERTICAL, new java.awt.Component[] {jButton1, jButton2, jButton3, jButton4});

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void tblChiTietMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tblChiTietMouseClicked
        click();
    }//GEN-LAST:event_tblChiTietMouseClicked

    private void jButton4MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jButton4MouseClicked
       int clear = JOptionPane.showConfirmDialog(this, "Bạn có muốn Làm mới không?", "Xác nhận", JOptionPane.YES_NO_OPTION);
        if (clear == JOptionPane.YES_OPTION) {
            clear();
        } else {
            
        }
        
    }//GEN-LAST:event_jButton4MouseClicked

    private void jButton2MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jButton2MouseClicked
        int xoa = JOptionPane.showConfirmDialog(this, "Bạn có muốn xóa không?", "Xác nhận", JOptionPane.YES_NO_OPTION);
        if (xoa == JOptionPane.YES_OPTION) {
            delete();
            fillTable(detailKH.getAll());
        } else {
            
        }
    }//GEN-LAST:event_jButton2MouseClicked

    private void jButton1MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jButton1MouseClicked
        int add = JOptionPane.showConfirmDialog(this, "Bạn có muốn thêm không?", "Xác nhận", JOptionPane.YES_NO_OPTION);
        if (add == JOptionPane.YES_OPTION) {
            insert();
            
        } else {
            
        }
    }//GEN-LAST:event_jButton1MouseClicked

    private void jButton3MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jButton3MouseClicked
        int update = JOptionPane.showConfirmDialog(this, "Bạn có cập nhật không?", "Xác nhận", JOptionPane.YES_NO_OPTION);
        if (update == JOptionPane.YES_OPTION) {
            update();
            fillTable(detailKH.getAll());
        } else {
            
        }
    }//GEN-LAST:event_jButton3MouseClicked

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        // TODO add your handling code here:
        
    }//GEN-LAST:event_jButton3ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(CustomerDetail_Dialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CustomerDetail_Dialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CustomerDetail_Dialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CustomerDetail_Dialog.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the dialog */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                CustomerDetail_Dialog dialog = new CustomerDetail_Dialog(new javax.swing.JFrame(), true);
                dialog.addWindowListener(new java.awt.event.WindowAdapter() {
                    @Override
                    public void windowClosing(java.awt.event.WindowEvent e) {
                        System.exit(0);
                    }
                });
                dialog.setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.ButtonGroup buttonGroup2;
    private javax.swing.ButtonGroup buttonGroup3;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel50;
    private javax.swing.JLabel jLabel51;
    private javax.swing.JLabel jLabel52;
    private javax.swing.JLabel jLabel53;
    private javax.swing.JLabel jLabel55;
    private javax.swing.JLabel jLabel56;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblTrangThai;
    private com.toedter.calendar.JDateChooser ngaySinh;
    private com.toedter.calendar.JDateChooser ngaythamgia;
    private javax.swing.JRadioButton rdoNam;
    private javax.swing.JRadioButton rdoNu;
    private javax.swing.JTable tblChiTiet;
    private javax.swing.JTextField txtCCCD3;
    private javax.swing.JTextField txtDiachi;
    private javax.swing.JTextField txtEmail3;
    private javax.swing.JTextField txtId;
    private javax.swing.JTextField txtSdt3;
    private javax.swing.JTextField txtTenKH3;
    // End of variables declaration//GEN-END:variables
}
