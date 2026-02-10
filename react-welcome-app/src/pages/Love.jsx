import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assests/lovelogo.png'
import videoSrc from '../assests/WhatsApp Video 2026-02-10 at 22.35.31.mp4'

const Love = () => {
  const { state } = useLocation()
  const name = state?.name
  const navigate = useNavigate()

  const handleClose = () => navigate('/')

  const msgRef = useRef(null)
  const bodyRef = useRef(null)                // NEW: measure actual content block
  const [hearts, setHearts] = useState([])
  const [contentHeight, setContentHeight] = useState(0) // area for hearts
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const el = msgRef.current
    if (!el || !bodyRef.current) return

    // measure actual message text block height (avoid extra empty padding/space)
    const bodyEl = bodyRef.current
    const bottomBuffer = 16                         // trim a little so hearts don't drop into extra gap
    const bodyH = bodyEl.scrollHeight
    const heartAreaH = Math.max(0, bodyH - bottomBuffer)
    setContentHeight(heartAreaH)

    const count = 18
    const arr = Array.from({ length: count }).map(() => {
      const left = Math.round(Math.random() * 92) + 2 // 2%..94%
      // position top within measured message body
      const top = Math.round(Math.random() * Math.max(0, heartAreaH - 20)) // px within content
      const dur = (Math.random() * 4 + 6).toFixed(2) + 's' // 6s..10s
      const delay = (Math.random() * -8).toFixed(2) + 's' // negative for spread
      const size = Math.round(Math.random() * 8 + 10) + 'px' // 10..18px
      // fall distance relative to message body
      const fall = Math.max(100, heartAreaH - top + 80) + 'px'
      return { left, top, dur, delay, size, fall }
    })
    setHearts(arr)

    // regenerate on resize (contentHeight may change)
    const onResize = () => {
      const newBodyH = bodyRef.current?.scrollHeight || el.scrollHeight
      const newHeartArea = Math.max(0, newBodyH - bottomBuffer)
      setContentHeight(newHeartArea)
      const newH = arr.map(h => {
        const top = Math.round(Math.random() * Math.max(0, newHeartArea - 20))
        const fall = Math.max(100, newHeartArea - top + 80) + 'px'
        return { ...h, top, fall }
      })
      setHearts(newH)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [msgRef.current])

  // close video on ESC
  useEffect(() => {
    if (!showVideo) return
    const onKey = (e) => { if (e.key === 'Escape') setShowVideo(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showVideo])

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
          <div
            className="love-message"
            ref={msgRef}
            tabIndex={0}
            aria-label="Love message"
          >
            {/* actual text block (we measure this to avoid trailing empty space) */}
            <div className="message-body" ref={bodyRef}>
              {/* paste the long love message text here (unchanged) */}
              Loving you has changed the way I see the world. Before you, days passed by… but after you, every moment carries meaning. You are not just someone I love—you are the place my heart feels safest, the calm in my chaos, and the warmth I didn’t know I was missing.

              <br /><br />

              In your presence, I’ve learned what real love is. It’s not just in the happy moments, but in the quiet understanding, the patience, the way you stand beside me even when words fall short. You see me as I am, and still choose me—and that means everything.

              <br /><br />

              You are my strength when I feel weak, my smile on difficult days, and my peace in a noisy world. With you, love feels gentle, deep, and endlessly real. No matter where life takes us, my heart will always find its way back to you.

              <br /><br />

              Today, and every day after, I promise to love you honestly, fiercely, and endlessly.
              You are my today, my tomorrow, and every dream in between. 💖
            </div>

            {/* hearts rendered across the measured message-body height */}
             {/* hearts rendered inside the scrollable content so they cover full scrollHeight */}
             {/* set heart-snow height to full scrollHeight so hearts exist across whole content */}
             <div className="heart-snow" style={{ height: contentHeight ? `${contentHeight}px` : '100%' }}>
               {hearts.map((h, i) => (
                 <span
                   key={i}
                   className="snow-heart"
                   style={{
                     left: `${h.left}%`,
                     top: `${h.top}px`,
                     fontSize: h.size,
                     animationDuration: h.dur,
                     animationDelay: h.delay,
                     // CSS custom property for fall distance
                     '--fall': h.fall,
                   }}
                 />
               ))}
             </div>
          </div>

          {/* Play video CTA */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button
              className="play-video-btn"
              onClick={() => setShowVideo(true)}
              aria-haspopup="dialog"
            >
              Play a little surprise 🎬
            </button>
          </div>

          <h4 className="valentine-text" style={{ color: 'rgba(255,225,240,0.95)' }}>
            {name ? `Thank you for Loving me, ${name}!` : 'Thank you for choosing me!'}
          </h4>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.9)', marginTop: 6 }}>
            You made my day 💖💖💖
          </p>
        </div>
      </div>

      {showVideo && (
        <div className="video-backdrop" role="dialog" aria-modal="true" aria-label="Video player">
          <div className="video-modal magical">
            <button className="modal-close" onClick={() => setShowVideo(false)} aria-label="Close video">×</button>
            <video
              className="video-player"
              src={videoSrc}
              controls
              autoPlay
              playsInline
            />
            {/* decorative glow / vignette */}
            <div className="video-glow" aria-hidden="true" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Love