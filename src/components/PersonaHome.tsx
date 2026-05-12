// =============================================================================
// PersonaHome.jsx v5 — Portfolio de Kiswendsida Cédric Dakoure
// =============================================================================

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const C = { red: '#D31111', black: '#000000', white: '#FFFFFF' }

const MENU_ITEMS = [
  {
    id: 'projets',
    label: 'PROJETS',
    jp: 'プロジェクト',
    sub: 'Mes réalisations',
    x: 26, y: 63, angle: -2,
    items: [
      '🔒 App Gestion des Congés — Laravel',
      '🛍 Pagne-Shop E-commerce — Laravel',
      '📦 Suivi des Stocks — Excel / VBA',
        { label: '→ Voir sur GitHub', url: 'https://github.com/babyTic' },
    ],
  },
  {
    id: 'skills',
    label: 'SKILLS',
    jp: 'スキル',
    sub: 'Compétences',
    x: 68, y: 54, angle: 2,
    items: [
      'Backend — PHP · Laravel · Node.js· Python · Java',
      'Frontend — React · Bootstrap · CSS',
      'Database — MySQL · PostgreSQL',
      'Outils — Git · GitHub ',
    ],
  },
  {
    id: 'parcours',
    label: 'PARCOURS',
    jp: '経歴',
    sub: 'Mon histoire',
    x: 18, y: 37, angle: -3,
    items: [
      '2025-2026 — Stage Dev Web · ANPTIC',
      '2022-2025 — Licence Génie Informatique',
      '2019-2022 — Bac Électricité Industrielle',
      '2015-2019 — BEPC · CEFISE / BENAJA',
    ],
  },
  {
    id: 'contact',
    label: 'CONTACT',
    jp: 'コンタクト',
    sub: 'Me joindre',
    x: 74, y: 22, angle: 3,
    items: [
      'armand2dakoure@gmail.com',
      '+226 01 71 93 80',
      'Ouagadougou, Burkina Faso',
     { label: 'GitHub → Voir mes projets', url: 'https://github.com/babyTic' },

    ],
  },
]

// ── Étoiles ───────────────────────────────────────────────────────────────────
const StarSVG = ({ color }) => (
  <svg viewBox="0 0 100 100" fill="none">
    <polygon points="50,2 61,36 97,36 68,57 79,92 50,71 21,92 32,57 3,36 39,36"
      fill={color} stroke={color === C.white ? C.black : C.white} strokeWidth="3" />
    <polygon points="50,14 57,36 80,36 62,50 69,72 50,59 31,72 38,50 20,36 43,36"
      fill={color === C.white ? C.black : C.white} opacity="0.22" />
  </svg>
)

const STARS = [
  { size: 88,  color: C.red,   x: 7,  y: 4,  speed: 13, delay: 0   },
  { size: 52,  color: C.white, x: 16, y: 11, speed: 19, delay: 2   },
  { size: 108, color: C.red,   x: 84, y: 6,  speed: 16, delay: 1   },
  { size: 62,  color: C.white, x: 91, y: 17, speed: 21, delay: 3   },
  { size: 44,  color: C.red,   x: 4,  y: 24, speed: 11, delay: 1.5 },
  { size: 74,  color: C.white, x: 77, y: 2,  speed: 15, delay: 0.5 },
]

function StarField() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', overflow: 'hidden' }}>
      {STARS.map((s, i) => (
        <motion.div key={i}
          style={{ position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ rotate: 360 }}
          transition={{ duration: s.speed, repeat: Infinity, ease: 'linear', delay: s.delay }}
        >
          <StarSVG color={s.color} />
        </motion.div>
      ))}
    </div>
  )
}

// ── Bannière Persona 5 — skewX authentique ────────────────────────────────────
const SKEW = -14

function P5Banner({ item, onClick, delay }) {
  const [hovered, setHovered] = useState(false)
  const isRight = item.x >= 50

  return (
    <motion.div
      style={{ position: 'absolute', left: `${item.x}%`, top: `${item.y}%`, zIndex: 20, transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 260, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{
              position: 'absolute',
              [isRight ? 'left' : 'right']: 18,
              top: '50%',
              translateY: '-50%',
              pointerEvents: 'none',
              rotate: `${item.angle}deg`,
            }}
            initial={{ opacity: 0, x: isRight ? 20 : -20, scaleX: 0.6 }}
            animate={{ opacity: 1, x: 0, scaleX: 1 }}
            exit={{ opacity: 0, x: isRight ? 20 : -20, scaleX: 0.6 }}
            transition={{ duration: 0.13, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Slashes rouges — 3 traits décalés */}
              <div style={{ position: 'absolute', top: '-8px', bottom: '-8px', [isRight ? 'left' : 'right']: '-24px', width: '115%', background: C.red, transform: `skewX(${SKEW}deg)`, zIndex: 0 }} />
              <div style={{ position: 'absolute', top: '-14px', bottom: '-14px', [isRight ? 'left' : 'right']: '-36px', width: '60%', background: C.red, transform: `skewX(${SKEW * 0.9}deg)`, opacity: 0.85, zIndex: 0 }} />
              <div style={{ position: 'absolute', top: '-18px', bottom: '-18px', [isRight ? 'left' : 'right']: '-48px', width: '30%', background: C.red, transform: `skewX(${SKEW * 0.8}deg)`, opacity: 0.5, zIndex: 0 }} />

              {/* Bannière noire parallélogramme */}
              <div style={{
                position: 'relative', zIndex: 1, background: C.black,
                transform: `skewX(${SKEW}deg)`, padding: '0 24px', height: 52,
                display: 'flex', alignItems: 'center', minWidth: 160,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08)`,
              }}>
                <div style={{ transform: `skewX(${-SKEW}deg)` }}>
                  <p style={{ fontFamily: "'Archivo Black', sans-serif", color: C.white, fontSize: 'clamp(15px, 2.2vw, 21px)', letterSpacing: '0.14em', lineHeight: 1, whiteSpace: 'nowrap' }}>
                    {item.label}
                  </p>
                  <p style={{ color: C.red, fontSize: '9px', letterSpacing: '0.22em', marginTop: '4px', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>
                    {item.jp}
                  </p>
                </div>
              </div>
              {/* Pointe triangulaire */}
              <div style={{ position: 'relative', zIndex: 1, width: 0, height: 0, borderTop: '26px solid transparent', borderBottom: '26px solid transparent', [isRight ? 'borderLeft' : 'borderRight']: `14px solid ${C.black}`, flexShrink: 0, transform: `skewX(${SKEW * 0.3}deg)` }} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8px', letterSpacing: '0.3em', marginTop: '5px', paddingLeft: isRight ? '6px' : '0', paddingRight: isRight ? '0' : '6px', textAlign: isRight ? 'left' : 'right', whiteSpace: 'nowrap', fontFamily: 'monospace' }}
            >
              {item.sub}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dot pulsant */}
      <motion.div
        animate={hovered ? { scale: [1, 1.25, 1], x: [0, -2, 2, -1, 0] } : { scale: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'relative', width: 20, height: 20 }}
      >
        <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: -7, borderRadius: '50%', border: `2px solid ${C.red}` }} />
        <motion.div animate={{ scale: [1, 1.9], opacity: [0.45, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
          style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: `1px solid ${C.white}` }} />
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: hovered ? C.white : C.red, border: `2.5px solid ${C.white}`, boxShadow: `0 0 ${hovered ? 18 : 10}px ${C.red}`, transition: 'background 0.12s, box-shadow 0.12s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: hovered ? C.red : C.white, transition: 'background 0.12s' }} />
        </div>
      </motion.div>
    </motion.div>
  )
}

function POILayer({ onSelect }) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {MENU_ITEMS.map((item, i) => (
        <P5Banner key={item.id} item={item} delay={0.35 + i * 0.1} onClick={() => onSelect(item)} />
      ))}
    </div>
  )
}

// ── Menu mobile ───────────────────────────────────────────────────────────────
function MobileMenu({ items, onSelect }) {
  return (
    <motion.div className="md:hidden"
      style={{ position: 'absolute', bottom: 28, left: 0, right: 0, padding: '0 18px', zIndex: 20 }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {items.map((item, i) => (
        <motion.button key={item.id}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300 }}
          onClick={() => onSelect(item)}
          style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 10, marginLeft: i % 2 === 0 ? 0 : 18 }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '-5px', bottom: '-5px', left: '-16px', right: '-8px', background: C.red, transform: `skewX(${SKEW}deg)`, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, background: C.black, transform: `skewX(${SKEW}deg)`, padding: '0 18px', height: 42, display: 'flex', alignItems: 'center' }}>
              <div style={{ transform: `skewX(${-SKEW}deg)` }}>
                <p style={{ fontFamily: "'Archivo Black', sans-serif", color: C.white, fontSize: 15, letterSpacing: '0.15em', lineHeight: 1, whiteSpace: 'nowrap' }}>{item.label}</p>
                <p style={{ color: C.red, fontSize: 8, letterSpacing: '0.2em', marginTop: 3 }}>{item.jp}</p>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, width: 0, height: 0, borderTop: '21px solid transparent', borderBottom: '21px solid transparent', borderLeft: `11px solid ${C.black}`, flexShrink: 0 }} />
          </div>
        </motion.button>
      ))}
    </motion.div>
  )
}

// ── Section Panel ─────────────────────────────────────────────────────────────
function SectionPanel({ section, onBack }) {
  return (
    <motion.div
      style={{ position: 'absolute', inset: 0, background: C.black, zIndex: 40, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      initial={{ x: '100%', skewX: '-4deg' }}
      animate={{ x: '0%', skewX: '0deg' }}
      exit={{ x: '100%', skewX: '4deg' }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
    >
      {/* Header rouge */}
      <div style={{ position: 'relative', height: 140, flexShrink: 0, background: C.red, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: C.red, clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)' }} />
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ position: 'absolute', top: `${i * 14}%`, left: '-10%', right: '-10%', height: 1, background: 'rgba(0,0,0,0.12)', transform: 'rotate(-3deg)' }} />
        ))}
        <motion.div style={{ position: 'absolute', bottom: 18, left: 28, zIndex: 2 }}
          initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}
        >
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", color: C.white, fontSize: 'clamp(28px, 7vw, 50px)', letterSpacing: '0.2em', lineHeight: 1, textShadow: '3px 3px 0 rgba(0,0,0,0.4)' }}>
            {section.label}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, letterSpacing: '0.35em' }}>
            {section.jp} — {section.sub}
          </p>
        </motion.div>
        <div style={{ position: 'absolute', top: 8, right: 20, fontFamily: "'Archivo Black', sans-serif", fontSize: 80, color: 'rgba(0,0,0,0.18)', lineHeight: 1 }}>
          {String(MENU_ITEMS.findIndex(m => m.id === section.id) + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Items */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '36px 28px 16px' }}>
        {section.items.map((it, i) => (
          <motion.div key={i}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.07, type: 'spring', stiffness: 280 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 26, cursor: 'default', transform: i % 2 === 1 ? 'translateX(14px)' : 'none' }}
          >
            <span style={{ color: C.red, fontFamily: "'Archivo Black', sans-serif", fontSize: 11, letterSpacing: '0.3em', flexShrink: 0, minWidth: 24 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <motion.div style={{ height: 1, background: `linear-gradient(to right, ${C.red}, transparent)`, flexShrink: 0 }}
              initial={{ width: 0 }} animate={{ width: 36 }} transition={{ delay: 0.15 + i * 0.07 }} />
            <motion.p
              style={{ fontFamily: "'Archivo Black', sans-serif", color: C.white, fontSize: 'clamp(13px, 2.5vw, 19px)', letterSpacing: '0.08em', lineHeight: 1.3 }}
              whileHover={{ color: C.red, x: 5 }} transition={{ duration: 0.1 }}
            >
              {it}
            </motion.p>
          </motion.div>
        ))}

        {/* Bloc extra selon la section */}
        {section.id === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ marginTop: 16, padding: '16px 20px', border: `1px solid rgba(211,17,17,0.3)`, background: 'rgba(211,17,17,0.05)' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, letterSpacing: '0.3em', fontFamily: 'monospace' }}>
              DISPONIBLE POUR UN STAGE OU PREMIER EMPLOI
            </p>
          </motion.div>
        )}

        {section.id === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}
          >
            {['PHP', 'Laravel', 'React', 'Node.js', 'MySQL', 'PostgreSQL', 'Python', 'Java', 'Git', 'Bootstrap'].map((tag) => (
              <span key={tag} style={{ background: 'rgba(211,17,17,0.15)', border: `1px solid rgba(211,17,17,0.4)`, color: C.red, fontSize: 10, padding: '4px 10px', fontFamily: "'Archivo Black', sans-serif", letterSpacing: '0.15em', transform: `skewX(${SKEW}deg)`, display: 'inline-block' }}>
                <span style={{ display: 'inline-block', transform: `skewX(${-SKEW}deg)` }}>{tag}</span>
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bouton retour */}
      <motion.button
        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45 }}
        onClick={onBack}
        style={{ margin: '0 28px 28px', padding: '13px 28px', background: 'transparent', border: `2px solid ${C.white}`, color: C.white, fontFamily: "'Archivo Black', sans-serif", fontSize: 12, letterSpacing: '0.3em', cursor: 'pointer', alignSelf: 'flex-start', display: 'block' }}
        whileHover={{ background: C.white, color: C.black }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        ← RETOUR
      </motion.button>
    </motion.div>
  )
}

// ── Transition All-Out Attack ─────────────────────────────────────────────────
function TransitionOverlay({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 680)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div style={{ position: 'absolute', width: '65%', height: '65%', top: '-5%', left: '-5%', background: C.black, clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}
        initial={{ x: '-105%', y: '-105%' }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div style={{ position: 'absolute', width: '65%', height: '65%', bottom: '-5%', right: '-5%', background: C.black, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
        initial={{ x: '105%', y: '105%' }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div style={{ position: 'absolute', width: '130%', height: '28%', top: '36%', left: '-15%', background: C.red, clipPath: 'polygon(0 35%, 100% 0%, 100% 65%, 0 100%)' }}
        initial={{ x: '-120%' }} animate={{ x: 0 }} transition={{ duration: 0.18, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div style={{ position: 'absolute', width: '160%', height: '3px', top: '49%', left: '-30%', background: C.white, transform: 'rotate(-8deg)', boxShadow: `0 0 8px ${C.white}, 0 0 24px ${C.white}` }}
        initial={{ x: '-160%' }} animate={{ x: '160%' }} transition={{ duration: 0.13, delay: 0.28, ease: 'easeIn' }} />
      <motion.div style={{ position: 'absolute', inset: 0, background: C.white }}
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.55, 0] }} transition={{ duration: 0.11, delay: 0.32 }} />
    </div>
  )
}

// ── Déco coins ────────────────────────────────────────────────────────────────
function CornerUI() {
  return (
    <>
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 15, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
        <div style={{ width: 40, height: 2, background: C.red }} />
        <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.35)' }} />
        <div style={{ width: 32, height: 1, background: C.red, opacity: 0.5 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 16, zIndex: 15, pointerEvents: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{ width: 32, height: 1, background: C.red, opacity: 0.5 }} />
        <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.35)' }} />
        <div style={{ width: 40, height: 2, background: C.red }} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 15, pointerEvents: 'none', fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.2em', textAlign: 'right', lineHeight: 1.6 }}>
        <p>DEV · OUAGADOUGOU</p>
        <p style={{ color: 'rgba(211,17,17,0.6)' }}>● DISPONIBLE</p>
      </div>
    </>
  )
}

// ── Composant Principal ───────────────────────────────────────────────────────
export default function PersonaHome() {
  const [activeSection,   setActiveSection]   = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mousePos,        setMousePos]        = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const pendingRef   = useRef(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap'
    link.rel  = 'stylesheet'
    document.head.appendChild(link)
    return () => { try { document.head.removeChild(link) } catch {} }
  }, [])

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: (e.clientX - rect.left) / rect.width  - 0.5,
      y: (e.clientY - rect.top)  / rect.height - 0.5,
    })
  }, [])

  const handlePOIClick = (item) => {
    if (isTransitioning) return
    pendingRef.current = item
    setIsTransitioning(true)
  }

  const handleTransitionComplete = useCallback(() => {
    setActiveSection(pendingRef.current)
    setIsTransitioning(false)
  }, [])

  const handleBack = () => {
    setActiveSection(null)
    pendingRef.current = null
  }

  const showMap = !activeSection
  const bgX = 50 + mousePos.x * -4
  const bgY = 50 + mousePos.y * -3

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: C.black, cursor: 'crosshair' }}
    >
      {/* Fond parallaxe */}
      <motion.div
        style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/city-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(0.75) contrast(1.05)' }}
        animate={{ backgroundPosition: `${bgX}% ${bgY}%` }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)' }} />

      <AnimatePresence>{showMap && <StarField />}</AnimatePresence>
      <CornerUI />

      {/* Titre — Nom réel */}
      <AnimatePresence>
        {showMap && (
          <motion.header style={{ position: 'absolute', top: 28, left: 24, zIndex: 20 }}
            initial={{ x: -140, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -140, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 5, height: 80, background: C.red, flexShrink: 0, marginTop: 4 }} />
              <div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: '0.45em', marginBottom: 4 }}>
                  ポートフォリオ · DEV WEB JUNIOR
                </p>
                <h1 style={{ fontFamily: "'Archivo Black', sans-serif", color: C.white, fontSize: 'clamp(22px, 4vw, 44px)', lineHeight: 0.95, letterSpacing: '0.1em' }}>
                  CÉDRIC
                </h1>
                <h1 style={{ fontFamily: "'Archivo Black', sans-serif", color: C.red, fontSize: 'clamp(26px, 5vw, 54px)', lineHeight: 0.95, letterSpacing: '0.1em', textShadow: `0 0 28px rgba(211,17,17,0.5)` }}>
                  DAKOURE
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 9, letterSpacing: '0.4em', marginTop: 8, borderTop: '1px solid rgba(211,17,17,0.3)', paddingTop: 5 }}>
                  PHP · LARAVEL · REACT · NODE.JS
                </p>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* POI Desktop */}
      <AnimatePresence>
        {showMap && !isTransitioning && (
          <div className="hidden md:block" style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
            <POILayer onSelect={handlePOIClick} />
          </div>
        )}
      </AnimatePresence>

      {/* Menu Mobile */}
      <AnimatePresence>
        {showMap && !isTransitioning && <MobileMenu items={MENU_ITEMS} onSelect={handlePOIClick} />}
      </AnimatePresence>

      {/* Section active */}
      <AnimatePresence>
        {activeSection && <SectionPanel key={activeSection.id} section={activeSection} onBack={handleBack} />}
      </AnimatePresence>

      {/* Transition */}
      <AnimatePresence>
        {isTransitioning && <TransitionOverlay key="overlay" onComplete={handleTransitionComplete} />}
      </AnimatePresence>
    </div>
  )
}
