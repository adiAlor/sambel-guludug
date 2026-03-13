import { motion } from "framer-motion";

export default function ProductHighlights() {
  const highlights = [
    {
      title: "Resep Warisan",
      description: "Diracik dengan bumbu rahasia dari rempah nusantara yang autentik.",
      icon: "🥘",
      gradient: "from-orange-500/20 to-red-500/10",
      accent: "#ff4d00"
    },
    {
      title: "Bahan Pilihan",
      description: "Cabai segar dan cumi premium yang diproses higienis setiap hari.",
      icon: "🌶️",
      gradient: "from-red-500/20 to-accent-500/10",
      accent: "#ff003c"
    },
    {
      title: "Tanpa Pengawet",
      description: "Nutrisi dan rasa tetap terjaga tanpa tambahan bahan kimia.",
      icon: "🌿",
      gradient: "from-green-500/20 to-emerald-500/10",
      accent: "#10b981"
    }
  ];

  return (
    <section id="highlights" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-xl text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 text-text-dark leading-tight"
            >
              Kualitas <span className="text-primary tracking-tighter">Tanpa Kompromi</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-dark/60 font-medium leading-relaxed"
            >
              Kami tidak hanya menjual sambel, kami menjual pengalaman makan yang tak terlupakan.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block w-48 h-48 border-[16px] border-primary/5 rounded-full animate-spin-slow"
          >
             <div className="w-full h-full border-[16px] border-primary/10 border-t-primary rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="modern-card group overflow-hidden"
            >
              {/* Decorative Background Blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white shadow-xl shadow-black/5 rounded-3xl flex items-center justify-center text-4xl mb-10 group-hover:-rotate-12 transition-transform duration-500 border border-primary/5">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-text-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-dark/60 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="h-1 w-12 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Text in background */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <div className="text-[20vw] font-black whitespace-nowrap tracking-tighter leading-none">
          QUALIFIED PREMIUM AUTHENTIC SPICY
        </div>
      </div>
    </section>
  );
}
