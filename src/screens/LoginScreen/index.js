import React from 'react'
import './index.css'
import { useHistory } from 'react-router-dom'
import WaveImg from '../../images/Path_3.png'

const LoginScreen = () => {
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/home")
    }

    return (
        <main className="screen">
            <img className="wave" src={WaveImg}/>
            <div class="signup-login-screen">
                <h1 className="title">Login</h1>
                <form onSubmit={e => handleSubmit(e)} className="login-signup-form">
                    <input className="input-login-signup input-t input-login-t" type="text" placeholder="Username or Email"/>
                    <input className="input-login-signup input-t input-login-t" type="password" placeholder="Password"/>
                    <input className="input-login-signup input-login" type="submit" value="Login"/>
                </form>
            </div>
           
        </main>
    )
}

export default LoginScreen
