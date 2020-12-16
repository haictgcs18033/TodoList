import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormDangKy extends Component {
    handleChangeInput=(event)=>{
       let{value,name}=event.target;
       const newValues = { ...this.props.nguoiDungRedux.values };
       newValues[name] = value;
       this.props.dispatch({
        type: 'SET_USER',
        nguoiDungRedux: {
            values: newValues,
        }
    })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.dispatch({
            type: 'THEM_KHACH_HANG',
            khachHang: this.props.nguoiDungRedux.values
        })
    }
    render() {
        let { taiKhoanKH, matKhau,hoTen, email, soDienThoai } = this.props.nguoiDungRedux.values;
        return (
           
            <div>
                 <form className="card text-left" onSubmit={this.handleSubmit}>
                    <div className="card-header bg-dark text-white text-center font-weight-bold">Thong tin nguoi dung</div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Tai khoan</h3>
                                    <input className="form-control" name="taiKhoanKH" onChange={this.handleChangeInput}
                                        value={taiKhoanKH} />
                                </div>
                                <div className="form-group">
                                    <h3>Mat khau</h3>
                                    <input className="form-control" name="matKhau" onChange={this.handleChangeInput}
                                        value={matKhau} />
                                </div>
                                <div className="form-group">
                                    <h3>Email</h3>
                                    <input className="form-control" name="email" onChange={this.handleChangeInput}
                                        value={email} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Ho ten</h3>
                                    <input typeInput="email" className="form-control" name="hoTen" onChange={this.handleChangeInput}
                                        value={hoTen} />
                                </div>
                                <div className="form-group">
                                    <h3>So dien thoai</h3>
                                    <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput}
                                        value={soDienThoai} />
                                 
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success" type="submit">Dang ky</button>
                        <button className="btn btn-warning" type="button">Cap nhat </button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        nguoiDungRedux:state.BaiTapQuanLyNguoiDungReducer.nguoiDungRedux
    }
}
export default connect(mapStateToProps)(FormDangKy)
