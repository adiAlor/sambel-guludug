import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brutal-gray border-t-4 border-brutal-red overflow-hidden">
      {/* Marquee Banner */}
      <div className="bg-brutal-orange py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-brutal-white font-brutal text-xl mx-8">
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
              Sambel pedas gurih dengan isian nyata yang bikin lauk sederhana jadi luar biasa. 
              Dibuat fresh, bukan produksi pabrik! 🌶️
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
                  className="text-gray-400 hover:text-brutal-orange transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">📱</span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brutal-orange transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">🛒</span>
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brutal-orange transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">📸</span>
                  Instagram
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
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                hello@sambelguludug.com
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
  )
}
