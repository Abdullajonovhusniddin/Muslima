import { useState } from 'react'
import './App.css'

const particles = Array.from({ length: 38 }, (_, index) => ({
  id: index,
  x: ((index * 47) % 100) - 5,
  y: 22 + ((index * 29) % 72),
  size: 3 + (index % 4),
  delay: `${(index % 12) * 0.12}s`,
  duration: `${2.7 + (index % 5) * 0.35}s`,
}))

function App() {
  const [isNight, setIsNight] = useState(() => localStorage.getItem('muslima-theme') === 'night')

  const toggleTheme = () => {
    setIsNight((current) => {
      const next = !current
      localStorage.setItem('muslima-theme', next ? 'night' : 'day')
      return next
    })
  }

  return (
    <main className={`love-page${isNight ? ' night-mode' : ''}`}>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={isNight ? 'Switch to daytime mode' : 'Switch to nighttime mode'}
      >
        <span aria-hidden="true">{isNight ? '☀' : '☾'}</span>
      </button>
      <div className="sparkles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            className="spark"
            key={particle.id}
            style={{
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`,
              '--size': `${particle.size}px`,
              '--delay': particle.delay,
              '--duration': particle.duration,
            }}
          />
        ))}
      </div>

      <section className="love-card" aria-label="Love message">
        <p className="eyebrow">for my favorite person</p>
        <div className="heart-wrap" aria-hidden="true">
          <div className="heart-glow" />
          <div className="heart">&hearts;</div>
        </div>
        <h1>
          I love you
          <span>my beautiful Muslima</span>
        </h1>
        <p className="subtitle">Every little piece of my heart belongs to you.</p>
        <div className="divider" aria-hidden="true"><span>♥</span></div>
        <p className="signature">with all my heart</p>
      </section>

      <p className="footer-note">made just for you</p>
    </main>
  )
}

export default App
