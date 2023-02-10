import React from 'react'

export default function Login() {
  return (
    <div>
        <div>Please login to your account</div>
        <form onSubmit={(e)=>{
            alert("submitted")
            e.preventDefault()
            }}>
            <div>
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div>
                <input type="password" placeholder='Enter your password'/>
            </div>
            <button >Login</button>
        </form>
    </div>
  )
}
