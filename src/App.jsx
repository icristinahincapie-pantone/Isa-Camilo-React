import { useState, useEffect } from 'react'
import './App.css'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const weddingDate = new Date('2026-12-25T18:00:00')

    function update() {
      const now = new Date()
      const diff = weddingDate - now
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-grid">
      {Object.entries(timeLeft).map(([key, val]) => (
        <div key={key} className="countdown-item">
          <span className="countdown-number">{String(val).padStart(2, '0')}</span>
          <span className="countdown-label">{key}</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-ring">
          <div className="hero-ring-inner" />
        </div>
        <h1 className="hero-names">
          Isa
          <span className="hero-ampersand">&</span>
          Camilo
        </h1>
        <div className="hero-line" />
        <p className="hero-date">25 de Diciembre, 2026</p>
        <p className="hero-subtitle">Nos Casamos</p>
        <div className="hero-scroll">
          <span />
        </div>
      </section>

      <section className="countdown">
        <h2 className="section-title">Faltan</h2>
        <p className="section-subtitle">Para el gran día</p>
        <Countdown />
      </section>

      <section className="story">
        <div className="story-content">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="section-subtitle">Cómo comenzó todo</p>
          <div className="story-divider" />
          <p className="story-text">
            Todo comenzó con una sonrisa que cruzó la habitación. Desde ese primer momento,
            supimos que nuestras vidas estaban destinadas a encontrarse. Cada paso del camino
            nos ha traído hasta aquí, rodeados de amor, familia y amigos, listos para escribir
            el capítulo más hermoso de nuestras vidas.
          </p>
          <div className="story-divider" />
          <p className="story-text">
            El 25 de diciembre de 2026, uniremos nuestras vidas en un sueño compartido,
            celebrando el amor que nos une y la promesa de un futuro juntos.
          </p>
        </div>
      </section>

      <section className="details">
        <h2 className="section-title">La Celebración</h2>
        <p className="section-subtitle">Los esperamos</p>
        <div className="details-grid">
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <h3 className="detail-title">Ceremonia</h3>
            <p className="detail-date">25 de Diciembre, 2026</p>
            <p className="detail-time">4:00 PM</p>
            <p className="detail-place">Parroquia San José</p>
            <p className="detail-address">Cra 50 # 60-10, Medellín</p>
            <a className="detail-btn" href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">Ver Mapa</a>
          </div>
          <div className="detail-card">
            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h3 className="detail-title">Recepción</h3>
            <p className="detail-date">25 de Diciembre, 2026</p>
            <p className="detail-time">6:00 PM</p>
            <p className="detail-place">Hacienda La Casona</p>
            <p className="detail-address">Vía Las Palmas, Km 5, Medellín</p>
            <a className="detail-btn" href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">Ver Mapa</a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Nuestros momentos</p>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="gallery-item">
              Foto {i}
            </div>
          ))}
        </div>
      </section>

      <section className="rsvp" id="rsvp">
        <h2 className="section-title">Confirma tu Asistencia</h2>
        <p className="section-subtitle">Cuéntanos si nos acompañarás</p>
        {submitted ? (
          <p className="rsvp-message">
            Gracias por confirmar. Te esperamos con mucho amor.
          </p>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <input className="rsvp-input" type="text" placeholder="Nombre Completo" required />
            <input className="rsvp-input" type="email" placeholder="Correo Electrónico" required />
            <select className="rsvp-select" required defaultValue="">
              <option value="" disabled>¿Asistirás?</option>
              <option value="si">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
            <input className="rsvp-input" type="number" placeholder="Número de Acompañantes" min="0" max="5" />
            <button className="rsvp-btn" type="submit">Confirmar</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p className="footer-hearts">&#10084; Isa & Camilo &#10084;</p>
        <p>25 de Diciembre de 2026</p>
      </footer>
    </div>
  )
}

export default App
