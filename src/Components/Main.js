import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        imgSrc: './glassesImage/v1.png',
        title: 'GUCCI G8850U'
    }
    changeGlass = (newGlass, newTitle) => {
        this.setState({
            imgSrc: `./glassesImage/${newGlass}.png`,
            title: `${newTitle}`
        })
    }
    render() {
        return (

            <div className="container-fluid">
                <h3 className="title">TRY GLASSES APP ONLINE</h3>
                <div className="container fashion">
                    <div class="row">
                        <div className="col-6">
                            <div className="fashion">
                                <img src="./glassesImage/model.jpg" ></img>
                                <div className="fashion-child1">
                                    <img src={this.state.imgSrc}></img>
                                </div>
                                <div className="fashion-child2">
                                    <h4>{this.state.title}</h4>
                                    <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="fashion">
                                <img src="./glassesImage/model.jpg" ></img>
                            </div>
                        </div>
                    </div>
                    <div class="row glass">
                        <div className="col-2 text-center">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v1','GUCCI G8850U');
                                }}
                                    src="./glassesImage/g1.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2 ">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v2','GUCCI G8759H');
                                }} src="./glassesImage/g2.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v3','DIOR D6700HQ');
                                }} src="./glassesImage/g3.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v4','DIOR D6005U');
                                }} src="./glassesImage/g4.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v5','PRADA P8750');
                                }} src="./glassesImage/g5.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v6','PRADA P9700');
                                }} src="./glassesImage/g6.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v7','FENDI F8750');
                                }} src="./glassesImage/g7.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v8','FENDI F8500');
                                }}
                                    src="./glassesImage/g8.jpg" ></img>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="glass-item">
                                <img onClick={() => {
                                    this.changeGlass('v9','FENDI F4300');
                                }}
                                    src="./glassesImage/g9.jpg" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
