import React, { Component } from 'react'
import Modal from './Modal'
import SanPhamGioHang from './SanPhamGioHang'
import productList from './data/SanPhamGioHang.json'

export default class BaiTapGioHang extends Component {
    state = {
        gioHang: [
           
        ]
    }
    // THem gio hang
    themGioHang = (sanPhamChon) => {
        //B1 : TU sp dc chon tao ra san pham gio hang
        let spGioHang = {
            "maSP": sanPhamChon.maSP,
            "tenSP": sanPhamChon.tenSP,
            "giaBan": sanPhamChon.giaBan,
            "hinhAnh": sanPhamChon.hinhAnh,
            "soLuong": 1
        }
        //Kiem tra san pham chon co trong gio hang chua
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            //San pham duoc click da co trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        } else {
            //San pham duoc click chua co trong this.state.gioHang
            gioHangCapNhat.push(spGioHang);
        }
        //Set state de component render lai
        this.setState({
            gioHang: gioHangCapNhat
        })
        // Code loi chi cong them vi tri KHONG CONG VAO SO LUONG
        // this.setState({
        //     gioHang: [...this.state.gioHang, sanPhamChon]
        // })
    }

    // Dat su kien xoa gio hang tai bai tap gio hang
    xoaGioHang = (maSP) => {
        //Tim trong gio hang co san pham chua maSP duoc click thi xoa no di
        //Cach 1 : 
        // var gioHangDuocXoa = [...this.state.gioHang];
        // let index= gioHangDuocXoa.findIndex(sp=>sp.maSP===maSP)
        // if(index!==-1){
        //     gioHangDuocXoa.splice(index,1);
        // }
        //Cach 2 :
        var gioHangDuocXoa = this.state.gioHang.filter(sp => sp.maSP !== maSP)
        //Cap nhat lai state
        this.setState({
            gioHang: gioHangDuocXoa
        })
    }
    //Tang giam so luong
    tangGiamSoLuong = (maSP, tangGiam) => { //tangGiam===true:tang so luong, tangGiam===false:giam so luong
        var gioHangDuocThem = [...this.state.gioHang]
        let index = gioHangDuocThem.findIndex(sp => sp.maSP === maSP)
        if (tangGiam) {// Cach ghi tat cho tangGiam===true
            gioHangDuocThem[index].soLuong += 1;
        }else{
            if(gioHangDuocThem[index].soLuong>1){
                gioHangDuocThem[index].soLuong -=1;
            }
        }
        // Cap nhat lai gia tri cua gio hang va render lai
        this.setState({
            gioHang:gioHangDuocThem
        })

    }
    render() {
        let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, product, index) => {
            return tongSoLuong += product.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-success">Bai tap gio hang</h3>
                <div className="text-left my-4">
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Gio Hang({tongSoLuong})
                    </button>
                </div>
                <Modal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></Modal>
                <SanPhamGioHang mangSanPham={productList} themGioHang={this.themGioHang}></SanPhamGioHang>

            </div>
        )
    }
}
