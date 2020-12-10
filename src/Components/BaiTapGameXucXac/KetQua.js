import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className="container">
                <h1> Ban chon: <span className="text-danger">{this.props.datCuoc ? 'Tai' : 'Xiu'}</span> </h1>
                <h1> So ban thang: <span className="text-success">{this.props.soBanThang}</span> </h1>
                <h1> So ban choi :<span className="text-primary">{this.props.soBanChoi}</span> </h1>
               
             
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanChoi: state.stateGameXucXac.soBanChoi
    }
}
export default connect(mapStateToProps)(KetQua)

