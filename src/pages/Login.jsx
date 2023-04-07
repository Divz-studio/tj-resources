import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword , sendEmailVerification} from 'firebase/auth'
import { auth } from '../Firebase'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
            console.log(auth.currentUser)
            if (!auth.currentUser.emailVerified) {
                sendEmailVerification(auth.currentUser)
                .then (() => {
                    console.log("Email sent")
                })
            }
        })
    }

  return (
    <div className="login-container">
        <form className="login">
            <div className="content">
                <h2>Log in</h2>
                <p>Only admins are allowed to login</p>
            </div>
            <div className="input-fields">
                <input ref={emailRef} type="email" placeholder='Email address' />
                <input ref={passwordRef} type="password" placeholder='Password' />
            </div>
            <button className="primary-btn-large" onClick={login}>
                Log in
            </button>
        </form>
    </div>
  )
}

export default Login