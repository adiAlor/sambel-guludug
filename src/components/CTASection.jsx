import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  };

  return (
    <section
      className="relative py-24 bg-brutal-dark overflow-hidden"
      ref={ref}
    >
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
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
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
              ease: "easeInOut",
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
                <span
                  className="text-brutal-red glitch"
                  data-text="LEDAKAN RASA?"
                >
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
              Ready Stok - Order sekarang di 👇
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
              {/* Shopee Button */}
              <motion.a
                href="https://shopee.co.id/sambelguludug"
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

              {/* TikTok Button */}
              <motion.a
                href="https://vt.tiktok.com/ZS5Tyd38y/?page=Mall"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="absolute inset-0 bg-brutal-dark translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative bg-black text-brutal-white font-brutal text-xl md:text-2xl px-10 py-5 border-4 border-brutal-dark flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span>BELI DI TIKTOK</span>
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
              {["✓ Free Ongkir", "✓ COD Available", "✓ Pengiriman Cepat"].map(
                (badge, index) => (
                  <span
                    key={index}
                    className="text-gray-400 text-sm font-medium"
                  >
                    {badge}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
