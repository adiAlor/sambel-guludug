import { motion } from "framer-motion";

export default function ProductVariants() {
  const variants = [
    {
      name: "Cumi Guludug",
      tagline: "Kenikmatan Laut Yang Pedas",
      description: "Cumi asin segar dengan perpaduan sambal ijo rahasia yang gurih dan nagih.",
      price: "25k",
      image: "🦑",
      badge: "Best Seller",
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Cakalang Guludug",
      tagline: "Suwiran Ikan Premium",
      description: "Ikan cakalang asap pilihan dengan bumbu pedas meresap hingga ke serat daging.",
      price: "25k",
      image: "🐟",
      badge: "Hot Item",
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Petai Guludug",
      tagline: "Aroma Mantap Tiada Dua",
      description: "Petai segar pilihan berpadu dengan sambal bawang premium yang aromanya menggoda.",
      price: "25k",
      image: "🌿",
      badge: "Favorit",
      color: "from-emerald-600 to-green-600"
    },
    {
      name: "Teri Guludug",
      tagline: "Kriuk Gurih Menggugah Selera",
      description: "Teri medan crispy dengan bumbu pedas yang pas, teman setia nasi hangat Anda.",
      price: "25k",
      image: "🐟",
      badge: "Populer",
      color: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <section id="varian" className="section-padding bg-[#0a0502] text-white relative overflow-hidden xl:rounded-[4rem] mx-0 xl:mx-8 my-20 min-h-screen flex items-center">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-28 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6"
            >
              Koleksi Utama
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black mb-8 leading-tight"
            >
              Varian <span className="text-gradient">Legendaris</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 font-medium max-w-xl mx-auto lg:mx-0"
            >
              Empat rasa pilihan yang telah memikat hati para pecinta pedas sejati.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://wa.me/6285111031226" className="btn-primary group">
               <span>Pesan Koleksi Lengkap</span>
               <span className="group-hover:translate-x-2 transition-transform">🚀</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {variants.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="glass-dark rounded-[2.5rem] p-8 hover:border-primary/50 transition-all duration-700 group relative flex flex-col h-full"
            >
              {/* Product Badge */}
              <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-20">
                {item.badge}
              </div>

              {/* Product Icon/Image Box */}
              <div className="relative mb-8 aspect-square flex items-center justify-center text-7xl bg-white/5 rounded-[2rem] group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                 <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                 <span className="group-hover:scale-110 transition-transform duration-700">
                    {item.image}
                 </span>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{item.tagline}</p>
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed italic line-clamp-3">
                  "{item.description}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Mulai Dari</span>
                  <span className="text-3xl font-black text-white">
                     <span className="text-primary">Rp</span>{item.price}
                  </span>
                </div>
                <button className="w-12 h-12 bg-white text-text-dark rounded-[1.25rem] flex items-center justify-center font-black text-xl hover:bg-primary hover:text-white transition-all active:scale-90">
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
