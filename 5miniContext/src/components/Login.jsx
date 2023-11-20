import React,{useState, useContext} from "react";
import UserContext from "../context/UseContext";
// import React from 'react'

function Login() {
    const[username,setUsername] =useState("");
    const[password,setPassword] =useState("");
    //Feching the data from context
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault() //prevent the values to go though post or get req via url
        setUser({username, password}) //setting(passing) the value of username and password
        
    }
  return (
    <div id="login" className="bg-gray-600 text-white" >
      <h1 className="text-4xl">Login</h1>
      <br/>
      <b>Username: </b> 
      <input type="text" placeholder="username" className="text-black" 
      value={username}
      onChange = {(e)=>setUsername(e.target.value)}
      
      />
      <br/><br/>
      <b>Password:  </b>
      <input type="text" placeholder="password" className="text-black"
      value={password}
      onChange = {(e)=>setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
