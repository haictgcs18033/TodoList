import React, { Component } from 'react'
import styleDatGhe from '../BaiTapDatVePhim/BaiTapDatVePhim.module.css'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/actions/BaiTapDatVeAction'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="text-left " >
                    <div className="danhSachGhe my-2">
                        <button className={`${styleDatGhe['gheDuocChon']}`}></button>
                        <span className="text-white ml-3">Ghe duoc chon</span>
                    </div>
                    <div className="danhSachGhe my-2">
                        <button className={`${styleDatGhe['gheDangChon']}`}></button>
                        <span className="text-white ml-3">Ghe dang chon</span><br />
                    </div>
                    <div className="danhSachGhe my-2">
                        <button className={`${styleDatGhe['ghe']}`}></button>
                        <span className="text-white ml-3">Ghe chua chon</span>
                    </div>
                </div>
                <table className="table" border="3">
                    <thead>
                        <tr className="text-light">
                            <th>So ghe</th>
                            <th>Gia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-light">
                        {
                            this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia.toLocaleString()}</td>
                                        <td><button
                                            onClick={() => {
                                                this.props.dispatch(
                                                    huyGheAction(gheDangDat.soGhe)
                                                )
                                            }}
                                            className="btn btn-danger">&times;</button></td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className="text-warning">
                            <td></td>
                            <td >Tong tien</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.gia;
                            }, 0).toLocaleString()}</td>
                        </tr>

                    </tfoot>
                </table>

            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.stateDatVePhim.danhSachGheDangDat
    }

}
//Cach cu
// const mapDispatchToProps= dispatch=>{
//     return {
//         huyGhe : (soGhe)=>{
//             dispatch(huyGheAction(soGhe))
//         }
//     }
// }
export default connect(mapStateToProps)(ThongTinDatGhe)
