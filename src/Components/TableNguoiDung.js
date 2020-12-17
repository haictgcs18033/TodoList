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
            <button className='btn btn-danger'>Xoa</button>
          </td>
          <td>
            <button className='btn btn-primary'>Sua</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table
          className='table mt-4 table-striped'
          style={{ width: '90%', margin: '0 auto' }}>
          <thead className=' bg-primary text-light'>
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
    );
  }
}
const mapStateToProps = (state) => ({
  mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
});

export default connect(mapStateToProps)(TableNguoiDung);
