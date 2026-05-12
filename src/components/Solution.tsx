import { motion } from 'framer-motion'

const features = [
  {
    title: 'Curated Feed',
    description: 'Handpicked content from the brightest minds in tech and philosophy.',
  },
  {
    title: 'Writer Tools',
    description: 'Everything you need to craft, publish, and monetize your voice.',
  },
  {
    title: 'Community',
    description: 'Connect with thoughtful readers and writers who share your values.',
  },
  {
    title: 'Distribution',
    description: 'Reach audiences who actually care about what you have to say.',
  },
]

export default function Solution() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="py-32 md:py-44 px-6 md:px-28 border-t border-border/30">
      {/* Label */}
      <motion.div {...fadeUp(0)} className="mb-8">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Solution
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl md:text-6xl font-medium tracking-tight mb-16 max-w-3xl leading-tight"
      >
        The platform for{' '}
        <span className="font-serif italic font-normal">meaningful</span> content
      </motion.h2>

      {/* Video */}
      <motion.div {...fadeUp(0.2)} className="mb-20">
        <video
          className="w-full h-auto rounded-2xl object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ aspectRatio: '3/1' }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Feature Grid */}
      <motion.div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            {...fadeUp(0.3 + i * 0.1)}
            className="group p-6 rounded-lg border border-border/30 hover:border-border/60 transition-colors"
          >
            <h3 className="font-semibold text-base text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
