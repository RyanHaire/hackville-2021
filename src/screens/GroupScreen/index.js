import React from 'react'

import WaveImg from '../../images/Path_5.png'
import HouseImg from '../../images/icons/house.png'
import PersonImg1 from '../../images/James.png'
import PersonImg2 from '../../images/Kurt.png'
import PersonImg3 from '../../images/Moe.png'
import PersonImg4 from '../../images/Mason.png'

import Navibar from '../../components/Navibar'
import SidebarNav from '../../components/SidebarNav'

import './index.css'

const GroupScreen = () => {
    return (
        <div>
            <img className="wave" src={WaveImg}/>
            <SidebarNav/>
            <div className="group-content">
                <img className="group-content-img" src={HouseImg}/>
                <span className="d-flex w-200">
                    <h1 className="title">Rent</h1>
                    <button className="btn--purple">Expenses</button>
                </span>
                <span className="large-title p-20 pill pill--dull-green">
                    $1500.00
                </span>
                <div className="d-flex w-300 mb-10 mt-20">
                    <img src={PersonImg1}/>
                    <span className="d-flex w-275 p-7 pill pill--green">
                        <div>
                            <p className="pill-text">James</p>
                            <p className="pill-text">25%</p>
                        </div>
                        <p className="pill-text">
                            $375
                        </p>
                    </span>
                </div>

                <div className="d-flex w-300 mb-10">
                    <img src={PersonImg2}/>
                    <span className="d-flex w-275 p-7 pill pill--red">
                        <div>
                            <p className="pill-text">Kurt</p>
                            <p className="pill-text">25%</p>
                        </div>
                        <p className="pill-text">
                            $375
                        </p>
                    </span>
                </div>

                <div className="d-flex w-300 mb-10">
                    <img src={PersonImg3}/>
                    <span className="d-flex w-275 p-7 pill pill--yellow">
                        <div>
                            <p className="pill-text">Moe</p>
                            <p className="pill-text">25%</p>
                        </div>
                        <p className="pill-text">
                            $375
                        </p>
                    </span>
                </div>

                <div className="d-flex w-300 mb-10">
                    <img src={PersonImg4}/>
                    <span className="d-flex w-275 p-7 pill pill--purple">
                        <div>
                            <p className="pill-text">Mason</p>
                            <p className="pill-text">25%</p>
                        </div>
                        <p className="pill-text">
                            $375
                        </p>
                    </span>
                </div>
            </div>
            <Navibar/>
        </div>
    )
}

export default GroupScreen
