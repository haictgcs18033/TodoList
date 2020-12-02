import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let { prop ,themGioHang} = this.props
        return (

            <div className="card text-left">
                <img className="card-img-top w-100" src={prop.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{prop.maSP}</h4>
                    <p className="card-text">{prop.tenSP}</p>
                </div>
                {/* <button className="btn btn-success" onClick={() => viewDetail(prop)}>Xem them</button> */}
                <button className="btn btn-warning" onClick={() => themGioHang(prop)}> Them vao gio hang</button>
            </div>

        )
    }
}
