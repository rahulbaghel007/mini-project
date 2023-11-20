import React,{useContext} from 'react'
// import UseContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UseContext'
function Profile() {
  const {user} = useContext(UserContext)
    
  if(!user) return <div className="text-orange-400 bg-gray-600">please Login</div>
  return <div className="text-green-400 bg-gray-600">Welcome {user.username}</div>
}

export default Profile