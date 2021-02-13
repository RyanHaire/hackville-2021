import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import ExpenseImg from '../../images/nav-icons/expense.png'
import HomeImg from '../../images/nav-icons/home.png'
import BellImg from '../../images/nav-icons/bell.png'

const Navibar = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item nav-item-sm">
                    <Link to="" className="nav-link">
                        <img className="nav-img-sm" src={ExpenseImg}/>
                    </Link>
                </li>
                <li className="nav-item nav-item-lg">
                    <Link to="" className="nav-link">
                        <img className="nav-img-lg" src={HomeImg}/>
                    </Link>
                </li>
                <li className="nav-item nav-item-sm">
                    <Link to="" className="nav-link">
                        <img className="nav-img-sm" src={BellImg}/>
                    </Link>
                </li>
            </ul>
        </nav>         
    )
}

export default Navibar
