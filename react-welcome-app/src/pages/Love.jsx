import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assests/lovelogo.png'

const Love = () => {
  const { state } = useLocation()
  const name = state?.name
  const navigate = useNavigate()

  const handleClose = () => navigate('/')

  return (
    <div className="app-center">
      <div
        className="love-hero magical"
        style={{ backgroundImage: `url(${logo})` }}
        role="img"
        aria-label="Love background"
      >
        <div className="stars" aria-hidden="true" />

        <button className="close-btn" onClick={handleClose} aria-label="Close">
          ×
        </button>

        <div className="valentine-overlay">
          <div className="love-message" tabIndex={0} aria-label="Love message">
            Loving you has changed the way I see the world. Before you, days passed by… but after you, every moment carries meaning. You are not just someone I love—you are the place my heart feels safest, the calm in my chaos, and the warmth I didn’t know I was missing.

            <br /><br />

            In your presence, I’ve learned what real love is. It’s not just in the happy moments, but in the quiet understanding, the patience, the way you stand beside me even when words fall short. You see me as I am, and still choose me—and that means everything.

            <br /><br />

            You are my strength when I feel weak, my smile on difficult days, and my peace in a noisy world. With you, love feels gentle, deep, and endlessly real. No matter where life takes us, my heart will always find its way back to you.

            <br /><br />

            Today, and every day after, I promise to love you honestly, fiercely, and endlessly.
            You are my today, my tomorrow, and every dream in between. 💖
          </div>

          <h2 className="valentine-text" style={{ color: 'rgba(255,225,240,0.95)' }}>
            {name ? `Thank you for choosing me, ${name}!` : 'Thank you for choosing me!'}
          </h2>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.9)', marginTop: 6 }}>
            You made my day 💖💖💖
          </p>
        </div>
      </div>
    </div>
  )
}

export default Love