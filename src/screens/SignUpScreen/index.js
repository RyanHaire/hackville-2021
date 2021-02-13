import React from 'react'
import './index.css'
import { useHistory } from 'react-router-dom'
import WaveImg from '../../images/Path_2.png'

const SignUpScreen = () => {
    let history = useHistory()

    const submitForm = (e) => {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <main className="screen">
            <img className="wave" src={WaveImg}/>
            <div className="signup-login-screen">
                <h1 className="title">Sign Up</h1>
                <form onSubmit={submitForm}>
                    <input className="input-login-signup input-t input-signup-t" type="text" placeholder="Username"/>
                    <input className="input-login-signup input-t input-signup-t" type="password" placeholder="Password"/>
                    <input className="input-login-signup input-signup" type="submit" value="Sign Up"/>
                </form>
            </div>
        </main>
    )
}

export default SignUpScreen
