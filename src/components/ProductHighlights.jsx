import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "🌶️",
      title: "Pedas Asli Cabai Pilihan",
      description:
        "Cabai pilihan berkualitas tinggi untuk sensasi pedas yang mantap",
    },
    {
      icon: "🦑",
      title: "Isian Nyata, Bukan Sambel Kosong",
      description:
        "Penuh dengan isian protein pilihan yang berlimpah di setiap suapan",
    },
    {
      icon: "🍚",
      title: "Cocok Nasi, Tempe, Tahu, Telur, Ayam, dll",
      description: "Partner sempurna untuk semua jenis makanan favoritmu",
    },
    {
      icon: "🧄",
      title: "Dimasak Fresh, Bukan Pabrik",
      description: "Dibuat fresh setiap batch dengan resep rahasia keluarga",
    },
    {
      icon: "📦",
      title: "Kemasan 150ml – Praktis & Mantap",
      description: "Ukuran pas untuk stok mingguan si pecinta pedas",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 bg-brutal-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            #FF2D2D 0,
            #FF2D2D 1px,
            transparent 1px,
            transparent 20px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-brutal-red text-brutal-white font-bold px-4 py-1 text-sm uppercase tracking-widest mb-4 border-4 border-brutal-dark"
            whileHover={{ rotate: [-1, 1, -1, 0], scale: 1.05 }}
          >
            ⚡ Kenapa Harus Sambel Guludug?
          </motion.span>
          <h2 className="font-brutal text-4xl md:text-6xl text-brutal-white mt-4">
            BUKAN SAMBEL <span className="text-brutal-orange">BIASA</span>
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8, x: -8 }}
            >
              <div className="absolute inset-0 bg-brutal-red translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="relative bg-brutal-gray border-4 border-brutal-red p-6 h-full">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-brutal text-xl text-brutal-orange mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brutal-orange transform translate-x-1/2 -translate-y-1/2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="h-1 w-20 bg-brutal-red" />
          <span className="text-brutal-orange text-3xl fire-emoji">🔥</span>
          <div className="h-1 w-20 bg-brutal-red" />
        </motion.div>
      </div>
    </section>
  );
}
