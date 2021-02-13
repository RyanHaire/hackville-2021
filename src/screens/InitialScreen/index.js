import React from 'react'
import './index.css'
import WaveImg from '../../images/Path_1.png'
import Logo from '../../images/logo.png'

const InitialScreen = () => {
    return (
        <div className="initial-screen">
            <img className="wave" src={WaveImg}/>
            <div className="logo">
                <img src={Logo}/>
                <p className="logo-p">ShareXpense</p>
            </div>
            <div className="btn-group">
                <a className="btn btn--login" href="/login">Login</a>
                <a className="btn btn--signup" href="/sign-up">Sign Up</a>
            </div>
        </div>
    )
}

export default InitialScreen
