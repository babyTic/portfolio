import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-28 md:pt-32 px-6">
        {/* Avatar Row */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/avatar-${i}.png`}
                alt={`Avatar ${i}`}
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">7,000+ people already subscribed</p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-center mb-6 max-w-5xl leading-tight"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg text-hero-subtitle text-center max-w-2xl mb-12"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        {/* Email Form */}
        <motion.form
          {...fadeUp(0.3)}
          onSubmit={(e) => {
            e.preventDefault()
            setEmail('')
          }}
          className="liquid-glass rounded-full p-2 max-w-lg w-full flex items-center gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-foreground text-background rounded-full px-8 py-3 font-medium whitespace-nowrap"
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
