// import { useState } from "react"
// import './App.css'
// function App() {
//   const [color, setColor] = useState("white");
//   return (
//     <>
//     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//     <button className="buttons" id="red" onClick={()=>setColor('red')}>red</button>
//     <button className="buttons" id="blue"onClick={()=>{setColor('blue')}}>blue</button>
//     <button className="buttons" id="green"onClick={()=>{setColor('green')}}>green</button>
//     <button className="buttons" id="yellow" onClick={()=>{setColor('yellow')}}>yellow</button>
//     </div>
//     </>
//   )
// }

// export default App
import { useState } from "react"
import './index.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <p className="fixed flex flex-wrap justify-center inset-x-0 top-5 text-5xl" >Background-Changer</p>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default App