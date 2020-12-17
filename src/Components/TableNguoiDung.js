/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableNguoiDung extends Component {
    renderNguoiDung = () => {
        return this.props.mangNguoiDung.map((user, index) => {
            // index ++
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.taiKhoanKH}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.matKhau}</td>
                    <td>{user.email}</td>
                    <td>{user.soDienThoai}</td>
                    <td>{user.loaiKhachHang}</td>
                    <td>
                        {/* Sử dụng this.props.dispatch thì không dùng được mapDispatchToProps */}
                        <button className='btn btn-danger'
                            onClick={
                                () => {
                                    //Cach viet tắt
                                    // this.props.dispatch(
                                    //     {
                                    //         type:'XOA_NGUOI_DUNG',
                                    //         taiKhoanKH:user.taiKhoanKH
                                    //     }
                                    // ) 
                                    const action = {
                                        type: 'XOA_NGUOI_DUNG',
                                        taiKhoanKH: user.taiKhoanKH
                                    }
                                    this.props.dispatch(action)
                                }

                            }>Xoa</button>
                    </td>
                    {/* this.props.xoaNguoiDung(user.taiKhoanKH) */}
                    {/* {this.props.suaNguoiDung(user)}   */}
                    <td><button className="btn btn-primary" onClick={() => {
                        this.props.dispatch({
                            type: 'SUA_USER',
                            nguoiDungSua: user
                        })
                    }}>Sua</button></td>
                </tr>
            );
        });
    };
    render() {
        return (

            <div>
                <div className="card text-left mt-3" style={{width:'90%',margin:'0 auto'}}>
                    <div className="card-header bg-dark text-light font-weight-bold">Danh sach nguoi dung</div>
                    <div className="card-body">
                        <table className='table mt-4 table-striped'>
                            <thead >
                                <tr>
                                    <th>STT</th>
                                    <th>Tai khoan</th>
                                    <th>Ho ten</th>
                                    <th>Mat khau</th>
                                    <th>Email</th>
                                    <th>So dien thoai</th>
                                    <th>Loai nguoi dung</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>{this.renderNguoiDung()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
});
// const mapDispatchToProps = dispatch => {
//     return {
//         xoaNguoiDung: (taiKhoanKH) => {
//             dispatch({
//                 type: 'XOA_NGUOI_DUNG',
//                 taiKhoanKH
//             })
//         },
//         suaNguoiDung:(user)=>{
//             dispatch({
//                 type:'SUA_USER',
//                 nguoiDungSua:user
//             })
//         }
//     }
// }

export default connect(mapStateToProps)(TableNguoiDung);
