import React, { Component } from 'react'
import '../Components/player.css'
import { connect } from 'react-redux'
class Player extends Component {
    renderKeoBuaBao = () => {
        return this.props.mangDatCuoc.map((item, index) => {
            //Xet gia tri dat cuoc them vien cho item chon
            let border={};
            if(item.datCuoc){
                border={border:'3px solid red'};
            }
            return (
                <div className="col-4" key={index}>
                    <button style={border} onClick={()=>{this.props.datCuoc(item.ma)}}>
                        <img className="w-100" src={item.hinhAnh}></img>
                    </button>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="player">
                <div className="theThink">
                    {/* Dung ham find de xac dinh hinh anh trong thinking khop voi lua chon nguoi dung */}
                    <img className="w-50 mt-4" src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh}></img>
                </div>
                <div className="speech-bubble">
                </div>
                <img src="./img/player.png" className="w-75"></img>
                <div className="row">
                    {this.renderKeoBuaBao()}
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.stateOanTuXi.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: 'DAT_CUOC',
                maCuoc
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)