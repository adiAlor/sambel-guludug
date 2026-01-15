import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brutal-gray border-t-4 border-brutal-red overflow-hidden">
      {/* Marquee Banner */}
      <div className="bg-brutal-orange py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-brutal-white font-brutal text-xl mx-8"
            >
              🔥 SAMBEL GULUDUG • SEKALI COLEK NASI NAMBAH •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-brutal text-3xl text-brutal-orange mb-4">
              SAMBEL GULUDUG
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ada sambel yang nggak cuma pedas, <br />
              tapi bikin makan jadi lebih hidup <br />
              teman setia nasi hangat dan lauk sederhana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brutal-red text-lg mb-4 uppercase tracking-wider">
              Quick Order
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.co.id/sambelguludug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C9.243 0 7 2.243 7 5v1H4a1 1 0 00-1 1v15a2 2 0 002 2h14a2 2 0 002-2V7a1 1 0 00-1-1h-3V5c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v1H9V5c0-1.654 1.346-3 3-3zm-6.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm13 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 10.5c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  </svg>
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href="https://vt.tiktok.com/ZS5Tyd38y/?page=Mall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brutal-white transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-brutal-red text-lg mb-4 uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                Indonesia
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                +62 851-1103-1226
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                guludugsambel@gmailcom
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-brutal-red/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sambel Guludug. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Made with</span>
            <motion.span
              className="text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              🔥
            </motion.span>
            <span className="text-gray-500 text-sm">in Indonesia</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-4 border-brutal-red/10 rotate-12 hidden md:block" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-brutal-orange/5 hidden md:block" />
    </footer>
  );
}
