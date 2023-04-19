import React from 'react'
import "../SignUpPage.css"

const LoginPage = () => {
  return (
    <div>
        <div className='left'>
            <div className="logo">Closet.io</div>
            <h1 className="create">Login</h1>
            <form className="form">
                <div className="det first_det">
                    <lable className="form_label">Email</lable>
                    <input type="email" placeholder = "Enter Email"/>
                </div>
                <div className="det">
                    <lable className="form_label">Password</lable>
                    <input type="password" placeholder = "Enter Password"/>
                </div>
                
                <div className="det">
                    <input type="submit" className="submit"/>
                </div>
                <div className="footer">New user? <a href="/index.html">Create Account</a></div>
            </form>
        </div>
        
        <div className="right"></div>
    </div>
  )
}

export default LoginPage
