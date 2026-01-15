import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: -4,
      y: -4,
      boxShadow: "12px 12px 0px 0px #FF2D2D",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      x: 0,
      y: 0,
      boxShadow: "4px 4px 0px 0px #FF2D2D",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brutal-dark">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brutal-dark/50 to-brutal-dark z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        {/* <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="bg-brutal-orange text-brutal-white font-bold px-4 py-3 text-xs uppercase tracking-wider border-2 border-brutal-dark shadow-[2px_2px_0px_0px_#FF2D2D]">
            🔥 Sambel #1 Indonesia
          </span>
        </motion.div> */}

        {/* Main Headline with Fire & Lightning Effects */}
        <motion.h1
          variants={itemVariants}
          className="font-brutal text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          {/* SAMBEL with Fire Effect */}
          <span className="relative inline-block">
            <span className="fire-text" data-text="SAMBEL">
              SAMBEL
            </span>
            {/* Fire particles decoration */}
            <motion.span
              className="absolute -top-4 left-1/4 text-3xl"
              animate={{
                y: [-5, -15, -5],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              🔥
            </motion.span>
            <motion.span
              className="absolute -top-6 right-1/4 text-2xl"
              animate={{
                y: [-3, -12, -3],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            >
              🔥
            </motion.span>
            <motion.span
              className="absolute -top-2 left-1/2 text-xl"
              animate={{
                y: [-2, -10, -2],
                opacity: [0.5, 0.9, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }}
            >
              🔥
            </motion.span>
          </span>
          <br />
          {/* GULUDUG with Lightning Effect */}
          <span className="relative inline-block">
            <span className="lightning-text" data-text="GULUDUG">
              GULUDUG
            </span>
            {/* Lightning bolt decorations */}
            <motion.span
              className="absolute -top-4 -left-8 text-4xl"
              animate={{
                opacity: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                scale: [0.8, 0.8, 0.8, 1.3, 0.8, 1.2, 0.8, 0.8, 0.8, 0.8],
                rotate: [0, 0, 0, -10, 0, 5, 0, 0, 0, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <motion.span
              className="absolute -top-6 -right-6 text-3xl"
              animate={{
                opacity: [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                scale: [0.8, 0.8, 0.8, 0.8, 1.2, 0.8, 1.3, 0.8, 0.8, 0.8],
                rotate: [0, 0, 0, 0, 10, 0, -5, 0, 0, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              ⚡
            </motion.span>
            <motion.span
              className="absolute top-1/2 -right-10 text-2xl"
              animate={{
                opacity: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                scale: [0.8, 0.8, 1.2, 0.8, 0.8, 1.3, 0.8, 0.8, 0.8, 0.8],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            >
              ⚡
            </motion.span>
            <motion.span
              className="absolute top-1/2 -left-12 text-3xl"
              animate={{
                opacity: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                scale: [0.8, 1.3, 0.8, 0.8, 0.8, 0.8, 1.2, 0.8, 0.8, 0.8],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.7 }}
            >
              ⚡
            </motion.span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-brutal-orange mb-4"
        >
          Sekali Colek, Nasi Nambah! 🌶️
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Sambel pedas gurih dengan isian nyata yang bikin lauk sederhana jadi
          luar biasa.
        </motion.p>

        {/* Highlights */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { icon: "🔥", text: "Pedasnya Nampol" },
            { icon: "🔥", text: "Gurihnya Nagih" },
            { icon: "🔥", text: "Cocok Semua Lauk" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-brutal-gray border-4 border-brutal-red px-4 py-2 flex items-center gap-2"
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              transition={{ duration: 0.3 }}
            >
              <span className="fire-emoji text-2xl">{item.icon}</span>
              <span className="font-bold text-brutal-white">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://wa.me/6285111031226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brutal-orange text-brutal-white font-brutal text-xl md:text-2xl px-10 py-5 border-4 border-brutal-dark shadow-brutal"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            👉 PESAN SEKARANG
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-4 border-brutal-orange rounded-full flex justify-center p-2">
            <motion.div
              className="w-2 h-2 bg-brutal-orange rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-brutal-red rotate-12 opacity-30 hidden md:block" />
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-brutal-orange opacity-20 hidden md:block" />
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-brutal-red rotate-45 opacity-40 hidden md:block" />
    </section>
  );
}
