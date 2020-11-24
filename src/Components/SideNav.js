import React, { Component } from 'react'
import style from '../css/style.module.css'

export default class SideNav extends Component {
    render() {
        return (
            <div className="sidenav" className={style.sidenav}> 
                <div className="container">
                    <h1 className="text-left">Shop name</h1>
                    <ul className={style.list}>
                        <li className={style.li}><a href="#">Category 1</a></li>
                        <li className={style.li}><a href="#">Category 2</a></li>
                        <li className={style.li}><a href="#">Category 3</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
