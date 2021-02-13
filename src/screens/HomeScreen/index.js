import React from 'react'

import Navibar from '../../components/Navibar'
import SidebarNav from '../../components/SidebarNav'
import CreateGroupButton from '../../components/CreateGroupButton'

import WaveImg from '../../images/Path_4.png'
import HouseImg from '../../images/icons/house.png'
import CarImg from '../../images/icons/car.png'
import TVImg from '../../images/icons/TV.png'
import StorageImg from '../../images/icons/storage.png'

import './index.css'


const HomeScreen = () => {
    return (
        <div className="screen">
            <img className="wave" src={WaveImg}/>
    
            <SidebarNav/>
            <div className="group-list">
                <a href="/group" className="group-list-item">
                    <img src={HouseImg}/>
                    <p className="group-list-item-p">Rent</p>
                </a>
                <a href="/group" className="group-list-item">
                    <img src={CarImg}/>
                    <p className="group-list-item-p">Car Insurance</p>
                </a>
                <a href="/group" className="group-list-item">
                    <img src={TVImg}/>
                    <p className="group-list-item-p">Netflix</p>
                </a>
                <a href="/group" className="group-list-item">
                    <img src={StorageImg}/>
                    <p className="group-list-item-p">Storage Unit</p>
                </a>
            </div>
            <Navibar/>
            <CreateGroupButton/>
        </div>
    )
}

export default HomeScreen
