import React from 'react'

const Login = () => {
  return (
    <div className="login-container">
        <form className="login">
            <div className="content">
                <h2>Log in</h2>
                <p>Only admins are allowed to login</p>
            </div>
            <div className="input-fields">
                <input type="email" placeholder='Email address' />
                <input type="password" placeholder='Password' />
            </div>
            <button className="primary-btn-large">
                Log in
            </button>
        </form>
    </div>
  )
}

export default Login