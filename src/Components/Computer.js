import React, { Component } from 'react'
import stylebublecomputer from '../Components/OanTuXi.module.css'
import {connect} from 'react-redux'
 class Computer extends Component {
    render() {
         //Chen Date.now() de no khong lap di lap lai ham vi neu dinh nghia key frame trung ten no se khong thuc hien lai animation
        //Do vay moi lan load minh tao ra 1 keyframe moi va minh append lai keyframe moi
        let keyframe =`@keyframes randomItem${Date.now()} {
         0% {top:-50px;}
         25%{top:100px;};
         50%{top:-50px};
         100%{top:100px;}
          }`
      
        return (
            <div className={`${stylebublecomputer['computer']}`}>
                 <style>
                    {keyframe}
                </style>
                <div className={`${stylebublecomputer['theThink']}`} >
                    <img style={{position:'absolute',left:'36px',animation:`randomItem${Date.now()} 1s`,transform:'rotate(156deg)'}} 
                    className="w-50 mt-4" src={this.props.computer.hinhAnh}></img>
                </div>
                <div className={`${stylebublecomputer['speech-bubble']} `}></div>
                <img src="./img/playerComputer.png" className="w-75"></img>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        computer:state.stateOanTuXi.computer
    }
}
export default connect(mapStateToProps)(Computer)