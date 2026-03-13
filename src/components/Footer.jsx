import { motion } from "framer-motion";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Star,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Instagram size={22} />,
      label: "Instagram",
      href: "https://instagram.com/sambelguludug",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.64-1.15 3.7-1.46 5.6-1.07.12-4.08-.04-8.16.05-12.23z" />
        </svg>
      ),
      label: "TikTok",
      href: "#",
    },
    {
      icon: <ShoppingBag size={22} />,
      label: "Shopee",
      href: "#",
    },
  ];

  const navigations = [
    { name: "Home", href: "#" },
    { name: "Varian Menu", href: "#varian" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Lacak Pesanan", href: "#" },
    { name: "Pesan Sekarang", href: "#pesan" },
  ];

  return (
    <footer className="relative bg-[#0a0502] pt-32 pb-12 overflow-hidden">
      {/* Decorative Ornaments Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="text-[25vw] font-black uppercase tracking-tighter -rotate-6 translate-y-32">
          GULUDUG GULUDUG GULUDUG
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <a href="#" className="inline-block group mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white flex items-center gap-1">
                  SAMBEL
                  <span className="text-primary group-hover:animate-pulse">
                    GULUDUG
                  </span>
                  <span className="text-2xl md:text-3xl">🔥</span>
                </span>
              </a>
              <p className="text-lg text-white/50 font-medium max-w-md leading-relaxed">
                Pelopor sambel dengan isian nyata yang praktis, nikmat, dan
                higienis. Kami menghadirkan ledakan rasa di setiap suapan,
                memastikan pengalaman makan yang tak terlupakan.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{
                    y: -8,
                    backgroundColor: "rgba(255, 77, 0, 1)",
                    borderColor: "rgba(255, 77, 0, 1)",
                  }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xl mb-10 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              Navigasi
            </h4>
            <ul className="space-y-5">
              {navigations.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/40 hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-700" />

              <h4 className="text-white font-bold text-2xl mb-10">
                Hubungi Kami
              </h4>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1.5">
                      Lokasi Utama
                    </p>
                    <p className="text-white/80 font-bold leading-snug">
                      Bandung Barat, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1.5">
                      WhatsApp CS
                    </p>
                    <p className="text-white/80 font-bold leading-snug">
                      +62 851 1103 1226
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1.5">
                      Email Support
                    </p>
                    <p className="text-white/80 font-bold leading-snug">
                      guludugsambel@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-white/20 text-sm font-medium">
              &copy; {currentYear}{" "}
              <span className="text-white/50 font-bold">Sambel Guludug</span>
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary/50 transition-all group"
          >
            <ChevronUp
              size={28}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
