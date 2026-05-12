import { motion } from 'framer-motion'

const platforms = [
  { name: 'ChatGPT', icon: '/icon-chatgpt.png' },
  { name: 'Perplexity', icon: '/icon-perplexity.png' },
  { name: 'Google AI', icon: '/icon-google.png' },
]

export default function SearchChanged() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="py-52 md:py-64 px-6 md:px-28">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-center mb-6 max-w-4xl mx-auto leading-tight"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-24"
      >
        The way we discover information has transformed. Stay ahead with Mindloop.
      </motion.p>

      {/* Platform Cards */}
      <motion.div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.2 + i * 0.1)}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <img
                src={platform.icon}
                alt={platform.name}
                className="w-48 h-48 object-contain"
              />
            </motion.div>
            <h3 className="font-semibold text-base text-foreground mb-2">
              {platform.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              Discover insights powered by advanced AI
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.5)}
        className="text-muted-foreground text-sm text-center"
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  )
}
