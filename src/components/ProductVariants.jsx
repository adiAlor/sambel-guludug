import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ProductVariants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const variants = [
    {
      name: "Cumi",
      image: "/assets/products/cumi.jpg",
      description: "Gurih laut, pedasnya nempel di lidah",
      color: "#FF6B35",
      bgGradient: "from-orange-900/50 to-brutal-gray",
      spiceLevel: 4,
    },
    {
      name: "Cakalang",
      image: "/assets/products/cakalang.jpg",
      description: "Aroma asap khas, makin makan makin nambah",
      color: "#FF8C42",
      bgGradient: "from-amber-900/50 to-brutal-gray",
      spiceLevel: 3,
    },
    {
      name: "Teri",
      image: "/assets/products/teri.jpg",
      description: "Renyah gurih, favorit sejuta umat",
      color: "#FF2D2D",
      bgGradient: "from-red-900/50 to-brutal-gray",
      spiceLevel: 5,
    },
    {
      name: "Petai",
      image: "/assets/products/petai.jpg",
      description: "Pedas dan aroma petai bikin nagih",
      color: "#22c55e",
      bgGradient: "from-green-900/50 to-brutal-gray",
      spiceLevel: 4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 bg-brutal-dark overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-brutal-red/20"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-brutal text-4xl md:text-6xl text-brutal-white mb-4">
            PILIH{" "}
            <span className="text-brutal-orange relative">
              VARIANMU
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-2 bg-brutal-red"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Semua varian sama enaknya, tinggal pilih mau coba yang mana dulu! 🌶️
          </p>
        </motion.div>

        {/* Variants Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {variants.map((variant, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`relative bg-gradient-to-b ${variant.bgGradient} border-4 p-6 h-full transition-colors duration-300`}
                style={{ borderColor: variant.color }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${variant.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Product Image */}
                <motion.div
                  className="relative z-10 mb-4 flex justify-center"
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: [1, 1.05, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative overflow-hidden rounded-lg w-28 h-36">
                    <img
                      src={variant.image}
                      alt={`Sambel Guludug ${variant.name}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        boxShadow:
                          hoveredIndex === index
                            ? `0 8px 30px ${variant.color}50`
                            : `0 4px 15px rgba(0,0,0,0.3)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                </motion.div>

                {/* Name */}
                <h3
                  className="font-brutal text-2xl mb-2 relative z-10"
                  style={{ color: variant.color }}
                >
                  {variant.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 relative z-10">
                  {variant.description}
                </p>

                {/* Spice Level */}
                {/* <div className="flex items-center gap-1 relative z-10">
                  <span className="text-xs text-gray-500 mr-2">
                    Level Pedas:
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`text-lg ${
                        i < variant.spiceLevel ? "" : "opacity-30"
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      🌶️
                    </motion.span>
                  ))}
                </div> */}

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: variant.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Price Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-brutal-red translate-x-2 translate-y-2" />
            <div className="relative bg-brutal-gray border-4 border-brutal-red px-10 py-6">
              <span className="text-gray-400 text-lg">Harga per botol</span>
              <div className="font-brutal text-5xl md:text-6xl text-brutal-orange mt-2">
                Rp25.000
              </div>
              <span className="text-gray-400 text-sm">(150ml)</span>
            </div>
          </div>
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
