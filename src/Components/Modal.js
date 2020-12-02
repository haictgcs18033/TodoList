import React, { Component } from 'react'
export default class Modal extends Component {
    render() {
        const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
        //Lay du lieu gio hang tu BaiTapGioHang
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Ma san pham</th>
                                                <th>Hinh anh</th>
                                                <th>Ten san pham</th>
                                                <th>So luong</th>
                                                <th>Don gia</th>
                                                <th>Thanh tien</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                gioHang.map((product, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{product.maSP}</td>
                                                            <td>
                                                                <img src={product.hinhAnh} width="30" height="30"></img>
                                                            </td>
                                                            <td>{product.tenSP}</td>
                                                            <td>
                                                                <button className="btn btn-primary mx-3" onClick={() => tangGiamSoLuong(product.maSP, false)}>-</button>
                                                                {product.soLuong}
                                                                <button className="btn btn-primary mx-3" onClick={() => tangGiamSoLuong(product.maSP, true)}>+</button>
                                                            </td>
                                                            <td>{product.giaBan.toLocaleString()}</td>
                                                            <td>{(product.soLuong * product.giaBan).toLocaleString()}</td>
                                                            <td><button className="btn btn-danger" onClick={() => xoaGioHang(product.maSP)}>Xoa</button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <td colSpan="5"></td>
                                            <td>Tong tien</td>
                                            {/* Ham reduce co 3 tham so (tham so dau tien la gia tri tra ve , tham so thu hai la doi tuong dung de duyet qua mang va tham so cuoi cung la index) */}
                                            <td>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                                return tongTien = (spGioHang.soLuong * spGioHang.giaBan).toLocaleString();
                                            }, 0)}</td>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        )
    }
}
