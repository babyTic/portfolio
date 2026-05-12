import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
    }
  }, [])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-28 border-t border-border/30 overflow-hidden">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div className="relative inline-block">
            <div className="w-10 h-10 border-2 border-foreground/60 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border border-foreground/60 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-5xl md:text-6xl font-serif italic mb-6 text-foreground"
        >
          Start Your Journey
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg mb-12"
        >
          Join thousands of readers and writers who are reshaping the future of content. No algorithms. Just depth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 font-medium"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-lg px-8 py-3.5 font-medium text-foreground"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
