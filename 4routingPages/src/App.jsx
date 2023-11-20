// import { useState } from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
// import Home from './components/Home.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* Optimise approach since we are only changing the middle component of Dom and we don't need to render Header and Footer again and again ---> React-router-DOM already have the functionality of this named as outlet which will not rerender the component router above and below its routing  
      Therefore Header and Footer will not render again
      */}
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
