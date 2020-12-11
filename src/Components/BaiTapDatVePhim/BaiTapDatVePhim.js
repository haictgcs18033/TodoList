import React, { Component } from 'react'
import styleMovie from '../BaiTapDatVePhim/BaiTapDatVePhim.module.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../../data/DatGhe.json'
export default class BaiTapDatVePhim extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return (
                <div key={index} className="text-left" >
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
                </div>
            )
        })
    }
    render() {
        return (

            <div className={`${styleMovie.bgMovie} container-fluid bookingMovie`}>
                <div className={`container-fluid ${styleMovie['booking-content']}`}>
                    <div className="row">
                        <div className="col-8">
                            <h1 className="text-danger ">Đặt vé xem phim Cyberlearn.vn</h1>
                            <h3 className="text-light" style={{ fontSize: '15px' }}>Màn hình</h3>
                            <div className="screen-chair  mt-4" >
                                <div className={`${styleMovie.screen}  mb-4`}></div>
                                {this.renderHangGhe()}
                            </div>
                        </div>
                        <div className="col-4">
                            <h1 className="text-warning mt-5 ">Danh sách ghế bạn chọn</h1>
                            <ThongTinDatGhe></ThongTinDatGhe>
                        </div>
                    </div>
                </div>
                <div className={`${styleMovie.overlay}`}></div>
            </div>
        )
    }
}
