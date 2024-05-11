import React, { useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
let [email,setEmail]=useState('')
let [password,setPassword]=useState('')
const {setUser}=useContext(UserContext)

let handleSubmit=(e)=>{

    e.preventDefault()
    setUser({email,password})
}

  return (
    <>

    <h2>Login Page</h2>
    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br />
    <input type="password"placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login