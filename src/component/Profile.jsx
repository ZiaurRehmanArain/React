import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
var {user}=useContext(UserContext)
console.log(user)
if(!user)return <h1> no user</h1>

  return (
    <div>

        <h1>Profile : {user.email}</h1>
    </div>
  )
}

export default Profile