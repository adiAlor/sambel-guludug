import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section-padding overflow-hidden relative">
      {/* Decorative Ornaments Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
         <div className="text-[30vw] font-black uppercase tracking-tighter -rotate-12 translate-y-20">
            ORDER NOW ORDER NOW ORDER NOW
         </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0a0502] rounded-[3rem] md:rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,77,0,0.3)]"
        >
          {/* Internal Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-12"
            >
               <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
               </span>
               <span className="text-sm font-black uppercase tracking-widest text-white/80">Stok Sangat Terbatas</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[1.05] tracking-tight">
              Siap Taklukkan <br /> 
              <span className="text-gradient">Rasa Pedasnya?</span>
            </h2>
            
            <p className="text-xl md:text-3xl text-white/60 font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic">
              "Jangan biarkan meja makan Anda sepi tanpa kehadiran Sambel Guludug."
            </p>

            <div className="flex flex-col items-center gap-10">
              <a 
                href="https://wa.me/6285111031226" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto px-16 py-7 text-2xl shadow-[0_20px_40px_rgba(255,77,0,0.4)]"
              >
                <span>PESAN VIA WHATSAPP</span>
                <span className="group-hover:translate-x-3 transition-transform duration-300">🔥</span>
              </a>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
                <div className="flex items-center gap-3">
                   <span className="text-2xl">🚚</span>
                   <span className="text-sm font-bold uppercase tracking-widest">Pengiriman Cepat</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-2xl">🛡️</span>
                   <span className="text-sm font-bold uppercase tracking-widest">Packing Aman</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-2xl">⭐</span>
                   <span className="text-sm font-bold uppercase tracking-widest">Kualitas Terjamin</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
