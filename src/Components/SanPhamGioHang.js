import React, { Component } from 'react'
import SanPham from './SanPham'



export default class SanPhamGioHang extends Component {
    renderProduct = () => {
        const{mangSanPham,themGioHang}=this.props;
        return mangSanPham.map((product, index) => {
            return (
                <div className="col-4">
                    <SanPham prop={product} key={index} themGioHang={themGioHang}></SanPham>
                </div>
            )
        })
    }
    render() {

        //  let { productDetail } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderProduct()}
                    </div>
               
                </div>
            </div>
        )
    }
}
