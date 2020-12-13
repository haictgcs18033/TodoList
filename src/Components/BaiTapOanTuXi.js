import React, { Component } from 'react'
import styleGame from '../Components/OanTuXi.module.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
export default class BaiTapOanTuXi extends Component {
    render() {
           //Chen Date.now() de no khong lap di lap lai ham vi neu dinh nghia key frame trung ten no se khong thuc hien lai animation
        //Do vay moi lan load minh tao ra 1 keyframe moi va minh append lai keyframe moi
        let keyframe =`@keyframes randomItem${Date.now} {
            from {top: 0px;}
            to {top: 200px;}
          }`
        return (
            <div className={`${styleGame['bgGame']} `}>
             <div className="row " style={{paddingTop:"30px"}}>
                 <div className="col-4">
                     <Player></Player>
                 </div>
                 <div className="col-4">
                    <KetQuaTroChoi></KetQuaTroChoi>
                 </div>
                 <div className="col-4">
                 <Computer></Computer>
                 </div>
             </div>
            </div>
        )
    }
}
// `${styleGame.bgGame}`