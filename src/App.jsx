import './App.css'
import SplineScene from './components/SplineScene'
import Button from './components/Button'

function App() {
  return (
    <>
      <div className="app">
      <SplineScene />
      <main>

        <section className="intro-section">
          <h1>Soul Tunes</h1>
          <p>Your Spotify Compatibility Checker - Discover how in sync your music taste is with others.</p>
        </section>

        <section className="features-section">
          <div className="feature">
            <h2>🎶 Analyze Your Music Style</h2>
            <p>Using machine learning, we see how compatible your choices of genre, dance-ability, acoustics instrumentals, and artists are compared to another Spotify user!</p>
          </div>
          <div className="feature">
            <h2>📊 Discover Compatibility Score</h2>
            <p>Gain insights on shared music attributes and trends in listening habits. See how your friend's playlists compare up to yours!</p>
          </div>
          <div className="feature">
            <h2>💡 Song Recommendation System</h2>
            <p>Get a list of songs based on the your compatibility score, see what new music you can explore alongside your friends!</p>
          </div>
        </section>
        <div className="button-container">
          <Button className="button1" label="Click to Match!" link="" />
        </div>

      </main>
    </div>
    </>
  )
}

export default App
