import React from 'react'

export default function Register() {
  return (
    <div>
         <div>Please register here</div>
        <form onSubmit={(e)=>{
            alert("submitted")
            e.preventDefault()
            }}>
            <div>
                <input type="text" placeholder='Enter your name' name='name' id='name'/>
            </div>
            <div>
                <input type="email" placeholder='Enter your email' name='email' id='email'/>
            </div>
            <div>
                <input type="password" placeholder='Enter your password' name='password' id='password'/>
            </div>
            <button >Register</button>
        </form>
    </div>
  )
}
