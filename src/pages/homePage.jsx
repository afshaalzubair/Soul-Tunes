import '../App.css'
import SplineScene from '../components/SplineScene'
import Button from '../components/Button'
import afshaalImage from '../assets/afshaal.jpg';
import kamilahImage from '../assets/kamilah.png';
import joelImage from '../assets/joel.jpg';

export function homePage(){
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
              <p>Gain insights on shared music attributes and trends in listening habits. See how your friend&apos;s playlists compare up to yours!</p>
            </div>
            <div className="feature">
              <h2>💡 Song Recommendation System</h2>
              <p>Get a list of songs based on the your compatibility score, see what new music you can explore alongside your friends!</p>
            </div>
          </section>
          <div className="button-container">
            <Button className="button1" label="Click to Match!" link="" />
          </div>

          <section className="teamheader-section">
            <h1>Meet The Team</h1>
            <p>Here is the Soul Tunes team! We are three freshmen at UT Austin studying Computer Science. The team developed this project for HackTX 2024.</p>
          </section>

          <section className="team-section">
            <div className="team-card">
              <img src={afshaalImage} alt="Team Member 1" />
              <h2>Afshaal Zubair</h2>
              <h3>Frontend Developer</h3>
              <p>Designed the Soul Tunes intuitive interface and user experience for seamless interaction.</p>
            </div>
            <div className="team-card">
              <img src={kamilahImage} alt="Team Member 2" />
              <h2>Kamilah Clark</h2>
              <h3>Backend Developer</h3>
              <p>Developed the compatibility algorithm and machine learning models for playlist analysis.</p>
            </div>
            <div className="team-card">
              <img src={joelImage} alt="Team Member 3" />
              <h2>Joel Banks</h2>
              <h3>DevOps Engineer</h3>
              <p>Ensured compatibility between frontend and backend systems, prioritized oraganization.</p>
            </div>
          </section>
          
        </main>
      </div>
    </>
  );
}
