import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
function App() {

  const [themeMode, setThemeMode] =useState("light");

  const darkTheme = ()=>{
    setThemeMode("dark");
  }
  const lightTheme = ()=>{
    setThemeMode("light");
  }


  //Actual theme changer
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")//remove value from html classes

    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  

  
  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* themeBtn */}

                <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
                {/* Card */}
                <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
