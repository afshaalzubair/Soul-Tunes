import './App.css'
import SplineScene from './components/SplineScene'
import Button from './components/Button'

function App() {
  return (
    <>
      <div className='app'>
        <main>
          <SplineScene/> 
          <div className='button-container'>
            <Button
              className="button1"
              label="Match"
              link=""
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
