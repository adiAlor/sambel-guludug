import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
            {/* 3D Scene - Floating in the background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Scene3D />
            </div>

            {/* Premium Radial Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Content Container */}
            <motion.div
                className="relative z-10 container-custom text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Floating Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center mb-8">
                    <div className="spicy-tag shadow-xl shadow-primary">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span>Sambel #1 Terlaris di Indonesia</span>
                    </div>
                </motion.div>

                {/* Main Heading with Layered Effect */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h1 className="text-6xl md:text-9xl font-black leading-[0.95] tracking-tight text-text-dark">
                        Ledakan <br />
                        <span className="text-gradient">Rasa Pedas</span>
                    </h1>
                </motion.div>

                {/* Description with better line height and weight */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-text-dark/70 font-semibold max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Rasakan sensasi petir di lidah Anda dengan perpaduan rempah pilihan 
                    dan isian premium yang bikin <span className="text-primary italic">nasi nambah terus!</span>
                </motion.p>

                {/* Primary CTA with premium styling */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://wa.me/6285111031226"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto text-lg px-12 py-5"
                    >
                        <span>AMANKAN STOK SEKARANG</span>
                        <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#varian"
                        className="btn-secondary w-full sm:w-auto text-lg px-10 py-5"
                    >
                        Lihat Menu Favorit
                    </a>
                </motion.div>

                {/* Floating Social Proof */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-20 flex flex-col items-center gap-4"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-primary/10 flex items-center justify-center font-bold text-primary shadow-sm overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-text-dark flex items-center justify-center text-xs font-bold text-white shadow-sm">
                            +10k
                        </div>
                    </div>
                    <p className="text-sm font-bold text-text-dark/50 tracking-wider">
                        DIBELI OLEH 10,000+ PECINTA PEDAS SETIAP BULAN
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll Button */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.2 }}
            >
                <a href="#highlights" className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Gulir</span>
                    <motion.div 
                        className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent"
                        animate={{ scaleY: [0, 1, 0], originY: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </a>
            </motion.div>
        </section>
    );
}
