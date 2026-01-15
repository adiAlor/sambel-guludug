import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function ScarcitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [stockCount, setStockCount] = useState(15)
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 45,
    seconds: 30,
  })

  // Countdown Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Random Stock Decrease Effect
  useEffect(() => {
    const stockTimer = setInterval(() => {
      if (Math.random() > 0.7 && stockCount > 3) {
        setStockCount((prev) => prev - 1)
      }
    }, 30000)

    return () => clearInterval(stockTimer)
  }, [stockCount])

  const urgencyItems = [
    { icon: '⏰', text: `Hanya tersedia ${stockCount} botol hari ini` },
    { icon: '🔥', text: 'Sering habis sebelum malam' },
    { icon: '🚨', text: 'Batch fresh, besok bisa beda rasa' },
  ]

  return (
    <section className="relative py-16 bg-brutal-orange overflow-hidden" ref={ref}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #0a0a0a 0,
              #0a0a0a 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Flashing Alert */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block bg-brutal-dark text-brutal-white font-brutal text-2xl md:text-4xl px-8 py-4 border-4 border-brutal-dark"
            animate={{
              boxShadow: [
                '8px 8px 0px 0px #FF2D2D',
                '12px 12px 0px 0px #FF2D2D',
                '8px 8px 0px 0px #FF2D2D',
              ],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ⚡ JANGAN SAMPAI KEHABISAN! ⚡
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { value: timeLeft.hours, label: 'Jam' },
            { value: timeLeft.minutes, label: 'Menit' },
            { value: timeLeft.seconds, label: 'Detik' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="bg-brutal-dark text-brutal-white font-brutal text-4xl md:text-6xl w-20 md:w-28 py-4 border-4 border-brutal-dark"
                key={item.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.div>
              <span className="text-brutal-dark font-bold text-sm mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stock Counter */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-brutal-dark px-6 py-3 border-4 border-brutal-dark">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              📦
            </motion.span>
            <span className="text-brutal-white font-bold text-xl">
              Stok Tersisa:{' '}
              <motion.span
                className="text-brutal-red font-brutal text-3xl"
                key={stockCount}
                initial={{ scale: 1.5, color: '#FF2D2D' }}
                animate={{ scale: 1, color: '#FF2D2D' }}
              >
                {stockCount}
              </motion.span>
              {' '}Botol
            </span>
          </div>
        </motion.div>

        {/* Urgency Items */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {urgencyItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-brutal-dark text-brutal-white px-6 py-3 border-4 border-brutal-dark flex items-center gap-2"
              whileHover={{ scale: 1.05, x: -4, y: -4 }}
              animate={{
                boxShadow: [
                  '0px 0px 0px 0px #FF2D2D',
                  '4px 4px 0px 0px #FF2D2D',
                  '0px 0px 0px 0px #FF2D2D',
                ],
              }}
              transition={{
                boxShadow: { duration: 1, repeat: Infinity, delay: index * 0.3 },
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-brutal-dark" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-brutal-dark" />
    </section>
  )
}
