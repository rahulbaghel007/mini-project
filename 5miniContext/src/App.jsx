import { useState } from 'react'
import './App.css'
import UseContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseContextProvider>
    {/* <h1 className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 bg-black">Hii</h1> */}
    <Login/>
    <Profile/>
    </UseContextProvider>
  )
}

export default App
