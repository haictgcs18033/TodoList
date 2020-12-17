/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDangKy extends Component {
    handleChangeInput = (event) => {
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput')
        const newValues = { ...this.props.nguoiDungRedux.values };
        newValues[name] = value;
        //Xu li errors
        const newErrors = { ...this.props.nguoiDungRedux.errors };
        //Truong hop rong 
        newErrors[name] = value.trim() === '' ? 'Không được bỏ trống' : '';
        //Truong hop sai email
        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + ' không đúng định dạng !'
            }
        }
        if (typeInput === 'phone') {
            const regexSo = /^[0-9]+$/
            if (!regexSo.test(value)) {
                newErrors[name] = 'Số điện thoại phải là số'
            }
        }

        this.props.dispatch({
            type: 'SET_USER',
            nguoiDungRedux: {
                values: newValues,
                errors: newErrors
            },
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        //Kiem tra du lieu hop le moi cho submit
        let valid=true;
        for(let key in this.props.nguoiDungRedux.values){
            if(this.props.nguoiDungRedux.values[key].trim()===''){
                valid=false;
            }
        }
        for(let key in this.props.nguoiDungRedux.errors){
            if(this.props.nguoiDungRedux.errors[key] !==''){
                valid=false;
            }
        }
        if(!valid){
            alert('Dữ liệu không hợp lệ');
            return
        }
        this.props.dispatch({
            type: 'THEM_KHACH_HANG',
            khachHang: this.props.nguoiDungRedux.values,
        });
    };

    render() {
        let {
            taiKhoanKH,
            matKhau,
            hoTen,
            email,
            soDienThoai,

        } = this.props.nguoiDungRedux.values;
        let { khachhang1, khachhang2, khachhang3 } = this.props.mangOption;
        return (
            <div className='container'>
                <form className='card text-left' onSubmit={this.handleSubmit}>
                    <div className='card-header bg-dark text-white  font-weight-bold'>
                        Form đăng ký
          </div>

                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <h3>Tai khoan</h3>
                                    <input
                                        className='form-control'
                                        name='taiKhoanKH'
                                        onChange={this.handleChangeInput}
                                        value={taiKhoanKH}
                                    />
                                    <p className="text-danger">{this.props.nguoiDungRedux.errors.taiKhoanKH}</p>

                                </div>
                                <div className='form-group'>
                                    <h3>Mat khau</h3>
                                    <input
                                        type='password'
                                        className='form-control'
                                        name='matKhau'
                                        onChange={this.handleChangeInput}
                                        value={matKhau}
                                    />
                                    <p className="text-danger">{this.props.nguoiDungRedux.errors.matKhau}</p>
                                </div>
                                <div className='form-group'>
                                    <h3>Email</h3>
                                    <input
                                        className='form-control'
                                        typeInput='email'
                                        name='email'
                                        onChange={this.handleChangeInput}
                                        value={email}
                                    />
                                    <p className="text-danger">{this.props.nguoiDungRedux.errors.email}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <h3>Ho ten</h3>
                                    <input
                                        className='form-control'
                                        name='hoTen'
                                        onChange={this.handleChangeInput}
                                        value={hoTen}
                                    />
                                    <p className="text-danger">{this.props.nguoiDungRedux.errors.hoTen}</p>
                                </div>
                                <div className='form-group'>
                                    <h3>So dien thoai</h3>
                                    <input
                                        typeInput='phone'
                                        className='form-control'
                                        name='soDienThoai'
                                        onChange={this.handleChangeInput}
                                        value={soDienThoai}
                                    />
                                    <p className="text-danger">{this.props.nguoiDungRedux.errors.soDienThoai}</p>
                                </div>
                                <div className='form-group'>
                                    <h3>Loai khach hang</h3>
                                    <select
                                        name='loaiKhachHang'
                                        className='form-control'
                                        onChange={this.handleChangeInput}>
                                        <option value={khachhang1}>Khach Hang 1</option>
                                        <option value={khachhang2}>Khach Hang 2</option>
                                        <option value={khachhang3}>Khach Hang 3</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success mr-3' type='submit'>
                            Dang ky
            </button>
                        <button className='btn btn-primary' type='button' onClick={() => {
                            const action = {
                                type: 'CAP_NHAT_NGUOI_DUNG',
                            }
                            this.props.dispatch(action);
                        }}>
                            Cap nhat
            </button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        mangOption: state.BaiTapQuanLyNguoiDungReducer.mangOption,
        nguoiDungRedux: state.BaiTapQuanLyNguoiDungReducer.nguoiDungRedux,
    };
};
export default connect(mapStateToProps)(FormDangKy);
