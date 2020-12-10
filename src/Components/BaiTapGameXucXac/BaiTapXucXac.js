import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import style from '../BaiTapGameXucXac/game.style.module.css'
import {connect} from 'react-redux'
 class BaiTapXucXac extends Component {
    render() {
        return (
            <div className={`${style['bgGame']} `} >
                <h1>Bai tap game</h1>
                <XucXac></XucXac>
                <KetQua></KetQua>
                <button className="bg-warning text-white" onClick={()=>{this.props.playGame()}}>Play game</button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        playGame : ()=>{
            const action={
                type:"PLAY_GAME",
            }
         dispatch(action);
        }
    }
  
}
export default connect(null,mapDispatchToProps)(BaiTapXucXac)
