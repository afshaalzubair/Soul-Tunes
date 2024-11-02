import { useState } from 'react'
import './App.css'
import SplineScene from './components/SplineScene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <main>
          <SplineScene/> 
        </main>
      </div>
    </>
  )
}

export default App
