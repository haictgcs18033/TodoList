import React, { Component } from 'react'
import styleChair from '../BaiTapDatVePhim/BaiTapDatVePhim.module.css'
import { connect } from 'react-redux'
import { datGheAction } from '../../redux/actions/BaiTapDatVeAction'
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = styleChair.ghe;
            let disabled = false;
            // Trang thai ghe da bi nguoi khac dat
            if (ghe.daDat) {
                cssGheDaDat = styleChair.gheDuocChon;
                disabled = true;
            }
            //Trang thai ghe dang dat
            let cssGheDangDat = styleChair.ghe;
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = styleChair.gheDangChon
            }
            return <button onClick={() => {this.props.datGhe(ghe) }}
                disabled={disabled} className={` ${cssGheDaDat} ${cssGheDangDat} ghe my-2`}
                key={index}
                style={{ marginLeft: "5px", fontSize: "10px" }}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <span className="rowNumber" style={{ marginLeft: "1.9rem", fontSize: "20px" }} key={index}>
                {hang.soGhe}
            </span>

        })

    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        } else {
            return (
                <div>
                    {this.props.hangGhe.hang} {this.renderGhe()}
                </div>
            )
        }
    }
    render() {
        // let {hangGhe}=this.props
        return (
            <div style={{ color: 'yellow', fontSize: '15px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.stateDatVePhim.danhSachGheDangDat
    }

}
const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) =>{
           
            dispatch(datGheAction(ghe))
        } 
              
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)