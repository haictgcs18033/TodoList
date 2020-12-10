import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderImg = () => {
        return this.props.mangXucXac.map((xucxac, index) => {
            return (
                <img key={index} className="mx-3" src={xucxac.hinhAnh} width="50px" height="50px"></img>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-danger p-5"
                        onClick={()=>{this.props.datCuoc(true)}}><span className="display-4 text-white ">Tai</span></button>
                    </div>
                    <div className="col-4">
                        {this.renderImg()}
                    </div>
                    <div className="col-4">
                    <button className="btn btn-danger p-5"
                     onClick={()=>{this.props.datCuoc(false)}}><span className="display-4 text-white ">Xiu</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      datCuoc: (taiXiu)=>{
          let action = {
              type:'DAT_CUOC',
             taiXiu
          }
       
        dispatch(action)
      }
     
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(XucXac)