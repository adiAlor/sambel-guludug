import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: -6,
      y: -6,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      x: 0,
      y: 0,
    },
  }

  return (
    <section className="relative py-24 bg-brutal-dark overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Diagonal Stripes */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #FF2D2D 0,
              #FF2D2D 2px,
              transparent 2px,
              transparent 30px
            )`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border-2 border-brutal-red/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              rotate: i * 30,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [i * 30, i * 30 + 180, i * 30 + 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Box */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Shadow Layer */}
          <div className="absolute inset-0 bg-brutal-red translate-x-4 translate-y-4" />

          {/* Main Content */}
          <div className="relative bg-brutal-gray border-4 border-brutal-red p-8 md:p-12 text-center">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-brutal-orange" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-brutal-orange" />
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-brutal-orange" />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-brutal-orange" />

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="font-brutal text-4xl md:text-6xl lg:text-7xl text-brutal-white leading-tight mb-4">
                SIAP MERASAKAN
                <br />
                <span className="text-brutal-red glitch" data-text="LEDAKAN RASA?">
                  LEDAKAN RASA?
                </span>
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              ⚡ Stok terbatas – siapa cepat dia dapat! ⚡
            </motion.p>

            {/* Fire Emoji Row */}
            <motion.div
              className="flex justify-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-4xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  🔥
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20pesan%20Sambel%20Guludug!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="absolute inset-0 bg-brutal-dark translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative bg-green-500 text-brutal-white font-brutal text-xl md:text-2xl px-10 py-5 border-4 border-brutal-dark flex items-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>PESAN VIA WHATSAPP</span>
                </div>
              </motion.a>

              {/* Shopee Button */}
              <motion.a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="absolute inset-0 bg-brutal-dark translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative bg-brutal-orange text-brutal-white font-brutal text-xl md:text-2xl px-10 py-5 border-4 border-brutal-dark flex items-center gap-3">
                  <span className="text-3xl">🛒</span>
                  <span>BELI DI SHOPEE</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {['✓ Free Ongkir', '✓ COD Available', '✓ Pengiriman Cepat'].map((badge, index) => (
                <span
                  key={index}
                  className="text-gray-400 text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
