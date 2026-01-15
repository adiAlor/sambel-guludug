import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rina',
      location: 'Bandung',
      rating: 5,
      text: 'Pedasnya pas, lauk seadanya jadi berasa mahal. Udah repeat order 5x!',
      avatar: '👩',
    },
    {
      name: 'Dimas',
      location: 'Jakarta',
      rating: 5,
      text: 'Anak kos wajib coba, bahaya kalau stok habis. Indomie + sambel ini = surga!',
      avatar: '👨',
    },
    {
      name: 'Sari',
      location: 'Surabaya',
      rating: 5,
      text: 'Varian cumi the best! Isian beneran banyak, bukan cuma bumbu doang.',
      avatar: '👩‍🦰',
    },
    {
      name: 'Budi',
      location: 'Yogyakarta',
      rating: 5,
      text: 'Dikira lebay, ternyata emang seenak itu. Langsung order 6 botol sekalian!',
      avatar: '🧔',
    },
    {
      name: 'Anisa',
      location: 'Semarang',
      rating: 5,
      text: 'Petainya mantap! Aroma kuat tapi pedasnya balance. Auto langganan.',
      avatar: '👧',
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Botol Terjual' },
    { value: '95%', label: 'Repeat Order' },
    { value: '4.9', label: 'Rating', suffix: '⭐' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative py-20 bg-brutal-dark overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-brutal-red/10 rotate-12" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border-4 border-brutal-orange/10 -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-brutal-red/5 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-brutal-red text-brutal-white font-bold px-6 py-2 text-sm uppercase tracking-widest mb-4 border-4 border-brutal-dark shadow-[4px_4px_0px_0px_#FF6B35]"
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
          >
            ⭐ Kata Mereka
          </motion.span>
          <h2 className="font-brutal text-4xl md:text-6xl text-brutal-white mt-4">
            PECINTA{' '}
            <span className="text-brutal-orange">PEDAS</span>
            {' '}SUDAH BUKTIKAN
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ y: -5, x: -5 }}
            >
              <div className="absolute inset-0 bg-brutal-red translate-x-2 translate-y-2" />
              <div className="relative bg-brutal-gray border-4 border-brutal-red px-8 py-4 text-center">
                <div className="font-brutal text-3xl md:text-4xl text-brutal-orange">
                  {stat.value}
                  {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8, rotate: 1 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="absolute inset-0 bg-brutal-orange translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="relative bg-brutal-gray border-4 border-brutal-orange p-6">
                {/* Quote Mark */}
                <div className="absolute top-4 right-4 text-brutal-orange/20 text-6xl font-serif">
                  &ldquo;
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-brutal-orange text-xl"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-brutal-white text-lg leading-relaxed mb-4 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t-2 border-brutal-orange/30">
                  <motion.span
                    className="text-4xl"
                    animate={activeIndex === index ? {
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.avatar}
                  </motion.span>
                  <div>
                    <div className="font-bold text-brutal-orange">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Teaser */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-400 text-lg">
            Udah siap jadi yang berikutnya? 🌶️
          </p>
        </motion.div>
      </div>
    </section>
  )
}
