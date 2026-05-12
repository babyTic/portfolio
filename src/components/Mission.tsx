import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

export default function Mission() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  const para1Words = [
    "We're", "building", "a", "space", "where", "curiosity", "meets", "clarity",
    "—", "where", "readers", "find", "depth,", "writers", "find", "reach,",
    "and", "every", "newsletter", "becomes", "a", "conversation", "worth", "having."
  ]

  const para2Words = [
    "A", "platform", "where", "content,", "community,", "and", "insight",
    "flow", "together", "—", "with", "less", "noise,", "less", "friction,",
    "and", "more", "meaning", "for", "everyone", "involved."
  ]

  return (
    <section ref={containerRef} className="py-0 pb-32 md:pb-44 px-6 md:px-28">
      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <video
          className="w-full h-auto rounded-2xl object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ aspectRatio: '1/1' }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Paragraph 1 */}
      <motion.p
        {...fadeUp(0)}
        className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight max-w-4xl mx-auto mb-10 text-hero-subtitle"
      >
        {para1Words.map((word, i) => (
          <WordReveal
            key={i}
            word={word}
            progress={scrollYProgress}
            index={i}
            total={para1Words.length}
            isHighlight={['curiosity', 'meets', 'clarity'].includes(word)}
          />
        ))}
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-tight max-w-4xl mx-auto text-hero-subtitle"
      >
        {para2Words.map((word, i) => (
          <WordReveal
            key={i}
            word={word}
            progress={scrollYProgress}
            index={para1Words.length + i}
            total={para1Words.length + para2Words.length}
          />
        ))}
      </motion.p>
    </section>
  )
}

function WordReveal({
  word,
  progress,
  index,
  total,
  isHighlight = false,
}: {
  word: string
  progress: MotionValue<number>
  index: number
  total: number
  isHighlight?: boolean
}) {
  const opacity = useTransform(
    progress,
    [
      (index - 2) / total,
      (index - 1) / total,
      (index + 1) / total,
      (index + 2) / total,
    ],
    [0.15, 0.4, 0.4, 0.15]
  )

  return (
    <motion.span style={{ opacity }} className={isHighlight ? 'text-foreground' : ''}>
      {word}{' '}
    </motion.span>
  )
}
