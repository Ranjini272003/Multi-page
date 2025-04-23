import React from 'react'

const Login = () => {
  return (
    <div className="loginmain">
      <div className="login">
        <h1>Login Form</h1>
        <input type="input" placeholder='Enter Username' />
        <input type="email" placeholder='Enter your Email' />
        <div className='logbutmain'>
          <button>Submit</button>
        </div>
      </div>
    </div>

  )
}

export default Login
