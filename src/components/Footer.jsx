import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-white border-t border-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <span className="text-3xl font-black tracking-tighter text-text-dark">
                SAMBEL<span className="text-primary">GULUDUG</span>
              </span>
            </a>
            <p className="text-lg text-text-dark/60 font-medium max-w-md leading-relaxed">
              Pelopor sambel dengan isian nyata yang praktis, nikmat, dan
              higienis. Solusi makan enak tanpa ribet setiap hari.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-dark mb-8">Navigasi</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-text-dark/60 hover:text-primary transition-colors font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#varian"
                  className="text-text-dark/60 hover:text-primary transition-colors font-medium"
                >
                  Varian Menu
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="text-text-dark/60 hover:text-primary transition-colors font-medium"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#pesan"
                  className="text-text-dark/60 hover:text-primary transition-colors font-medium"
                >
                  Pesan Sekarang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-dark mb-8">Kontak</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-text-dark/60 font-medium">
                <span>📍</span> Bandung Barat, Jawa Barat, Indonesia
              </li>
              <li className="flex items-center gap-3 text-text-dark/60 font-medium">
                <span>📱</span> +62 851 1103 1226
              </li>
              <li className="flex items-center gap-3 text-text-dark/60 font-medium">
                <span>✉️</span> guludugsambel@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-dark/40 font-medium">
            &copy; {currentYear} Sambel Guludug. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-text-dark/40 hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-text-dark/40 hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <a
              href="#"
              className="text-text-dark/40 hover:text-primary transition-colors"
            >
              Shopee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
