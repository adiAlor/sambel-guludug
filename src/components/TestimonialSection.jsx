import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pecinta Pedas",
      content: "Sambelnya gila banget! Pedasnya nampol tapi tetap ada rasa gurihnya. Parunya empuk, beneran sekali colek nasi nambah.",
      rating: 5
    },
    {
      name: "Siska Amelia",
      role: "Ibu Rumah Tangga",
      content: "Praktis banget buat stok di rumah. Kalau lagi males masak, tinggal makan pakai nasi anget aja udah enak banget. Anak-anak juga suka yang level sedang.",
      rating: 5
    },
    {
      name: "Rendy Pratama",
      role: "Mahasiswa",
      content: "Harganya bersahabat buat mahasiswa, porsinya juga pas. Cuminya nggak amis sama sekali. Recommended!",
      rating: 5
    }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-text-dark"
          >
            Apa Kata <span className="text-primary">Mereka?</span>
          </motion.h2>
          <div className="flex justify-center gap-1 mb-6 text-primary">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-text-dark/60 font-medium">
            Ribuan pelanggan sudah membuktikan kelezatan Sambel Guludug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="modern-card relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                "
              </div>
              <p className="text-text-dark/70 italic mb-8 leading-relaxed">
                {item.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-dark">{item.name}</h4>
                  <p className="text-sm text-text-dark/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
