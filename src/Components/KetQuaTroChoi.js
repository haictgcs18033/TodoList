import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
       
        return (
            <div className="ketQua w-100 h-100" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
               
                <h3 className="text-warning" style={{ fontSize: '40px' }}>{this.props.ketQua}</h3>
                <h5 className="text-success" >So ban thang :{this.props.soBanThang}</h5>
                <h5 className="text-danger" >So ban choi :{this.props.soBanChoi}</h5>
                <button className="btn btn-primary mt-5" onClick={() => { this.props.playGame() }}>Play game</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ketQua: state.stateOanTuXi.ketQua,
        soBanThang: state.stateOanTuXi.soBanThang,
        soBanChoi: state.stateOanTuXi.soBanChoi
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 70;
            //Khai bao ham lap di lap lai
            let randomComputer = setInterval(() => {
                dispatch({
                    type: 'PLAY_GAME',
                })
                //Moi lan lap cho count +=1
                count ++;
                if(count>80){
                    //Dung ham set interval
                   clearInterval(randomComputer);
                   dispatch({
                       type:'END_GAME'
                   })
                }
            }, 100);

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)