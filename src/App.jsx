import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <div className='bg-red-400 h-48'>
        <h1 className='text-3xl font-bold underline'>
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
