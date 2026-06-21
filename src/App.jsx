import { useEffect, useState } from 'react'
import './App.css'
import GalleryFan from './components/ui/demo'
import TimelineCards from './components/ui/timeline-cards'
import { LiquidButton } from './components/ui/glass-button'
import { MagneticText } from './components/ui/morphing-cursor'

function Countdown({ target }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = new Date(target) - Date.now()
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="countdown">
      {Object.entries(time).map(([k, v]) => (
        <div className="countdown-item" key={k}>
          <span className="countdown-number">{String(v).padStart(2, '0')}</span>
          <span className="countdown-label">{k}</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <nav className="nav">
        <a href="#historia">Historia</a>
        <a href="#evento">Evento</a>
        <a href="#galeria">Galería</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      <section className="hero">
        <div className="hero-decoration">&#10087;</div>
        <MagneticText
          text="Isa & Camilo"
          hoverText="15 · Noviembre · 2026"
          textClassName="!font-['Great_Vibes'] !font-normal !text-[clamp(3.5rem,10vw,7rem)] !text-[#5c7766] !tracking-[0.1rem]"
          circleTextClassName="!font-['Lora'] !font-normal !text-lg !tracking-[0.2rem] !uppercase !text-[#dfdedb]"
          circleClassName="!bg-[#5c7766]"
        />
        <p className="subtitle">Nos casamos</p>
        <Countdown target="2026-11-15T16:00:00" />
        <div className="mt-10 flex justify-center opacity-25">
          <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white"/>
                <stop offset="100%" stopColor="#5c7766" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="lipGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white"/>
                <stop offset="100%" stopColor="#dfdedb"/>
              </linearGradient>
              <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#697670"/>
                <stop offset="100%" stopColor="#5c7766"/>
              </linearGradient>
            </defs>
            <g transform="translate(70, 30)">
              <path d="M0 0 C-8 -20 -30 -28 -38 -18 C-46 -8 -38 8 -25 12 C-18 14 -8 12 0 6" fill="url(#petalGrad)" stroke="#5c7766" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M0 0 C8 -20 30 -28 38 -18 C46 -8 38 8 25 12 C18 14 8 12 0 6" fill="url(#petalGrad)" stroke="#5c7766" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M0 0 C-22 -2 -40 8 -42 22 C-44 36 -30 42 -18 38 C-8 35 -2 24 0 14" fill="url(#petalGrad)" stroke="#5c7766" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M0 0 C22 -2 40 8 42 22 C44 36 30 42 18 38 C8 35 2 24 0 14" fill="url(#petalGrad)" stroke="#5c7766" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M0 6 C-6 10 -12 24 -8 36 C-4 48 4 48 8 36 C12 24 6 10 0 6" fill="url(#lipGrad)" stroke="#5c7766" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M-3 20 C-1 18 1 18 3 20 C2 26 -2 26 -3 20Z" fill="#dfdedb" opacity="0.8"/>
              <path d="M0 30 C-2 28 2 28 0 30Z" fill="#5c7766" opacity="0.3"/>
              <path d="M0 36 C-10 50 -6 68 -3 80" stroke="#697670" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M0 36 C10 50 6 68 3 80" stroke="#697670" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </g>
            <path d="M67 108 C62 118 50 124 42 120 C34 116 34 108 40 104 C46 100 56 102 60 108" fill="url(#leafGrad)" opacity="0.8"/>
            <path d="M73 108 C78 118 90 124 98 120 C106 116 106 108 100 104 C94 100 84 102 80 108" fill="url(#leafGrad)" opacity="0.8"/>
            <path d="M68 110 C64 130 55 150 50 170" stroke="#697670" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M72 110 C76 130 85 150 90 170" stroke="#697670" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <ellipse cx="68" cy="110" rx="10" ry="14" fill="url(#leafGrad)" opacity="0.6" transform="rotate(-15 68 110)"/>
            <ellipse cx="72" cy="110" rx="10" ry="14" fill="url(#leafGrad)" opacity="0.6" transform="rotate(15 72 110)"/>
            <path d="M64 130 C58 142 52 158 50 170" stroke="#5c7766" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M76 130 C82 142 88 158 90 170" stroke="#5c7766" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
          </svg>
        </div>
      </section>

      <div className="divider" />

      <section id="historia" className="section">
        <h2>Nuestra Historia</h2>
        <div className="divider" />
        <p>
          Todo comenzó en un café en el centro de la ciudad. Dos desconocidos, una conversación que nunca terminó, y la certeza de que el destino tenía algo especial preparado.
        </p>
        <p>
          Desde entonces, cada día ha sido una página más en nuestra historia. Hoy queremos escribir el capítulo más importante, y queremos que ustedes sean parte de él.
        </p>
      </section>

      <div className="divider" />

      <section id="evento" className="section">
        <h2>El Gran Día</h2>
        <div className="divider" />
        <p>15 de Noviembre de 2026</p>
        <p>Hacienda Los Arrayanes · 4:00 PM</p>
        <TimelineCards />
      </section>

      <div className="divider" />

      <GalleryFan />

      <div className="divider" />

      <section id="rsvp" className="section">
        <h2>Confirma tu Asistencia</h2>
        <div className="divider" />
        <p>
          Por favor, confirma tu presencia antes del 15 de octubre para que
          podamos organizar todo con el cariño que se merece.
        </p>
        <LiquidButton onClick={() => window.open('https://wa.me/573104286463', '_blank')}>
          Confirmar Asistencia
        </LiquidButton>
      </section>

      <footer className="footer">
        <p>Isa & Camilo · 15.11.2026</p>
        <p>Hecho con amor para nuestros invitados</p>
      </footer>
    </>
  )
}

export default App
