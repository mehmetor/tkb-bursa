"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    return <MaintenanceView />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-tkb-surface">
      <Navbar />
      <main className="flex-grow pt-32">
        {/* Hero Section: Legacy Meets Futurity */}
        <section className="relative min-h-[90vh] flex items-center px-6 lg:px-24 overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Editorial Header */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 z-10"
            >
              <h2 className="text-tkb-red font-mono text-base tracking-[0.4em] uppercase mb-6">
                Kuruluş 1924
              </h2>
              <h1 className="text-tkb-dark font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-10">
                Cumhuriyetle <br />
                <span className="italic font-light">Başladık,</span><br />
                Geleceğe <br />
                <span className="text-tkb-red font-bold">Yürüyoruz.</span>
              </h1>
              <p className="text-tkb-dark/70 font-serif max-w-xl text-xl md:text-2xl leading-relaxed mb-12">
                Türkiye'nin en köklü kadın örgütlenmesi olarak, <br /><span className="font-sans">100</span> yıldır çağdaşlık ve eşitlik yolunda kararlılıkla ilerliyoruz.
              </p>
              <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 bg-tkb-red text-white font-mono text-sm tracking-widest uppercase hover:bg-tkb-dark transition-colors duration-300">
                  Hikayemizi Keşfedin
                </button>
                <button className="px-10 py-5 border border-tkb-dark text-tkb-dark font-mono text-sm tracking-widest uppercase hover:bg-tkb-dark hover:text-white transition-colors duration-300">
                  Bize Katılın
                </button>
              </div>
            </motion.div>

            {/* Right: Masked High-Contrast Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative h-[600px] w-full"
            >
              <div className="absolute inset-0 grayscale contrast-125 brightness-90 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-tkb-red/10 mix-blend-multiply z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?q=80&w=1000&auto=format&fit=crop"
                  alt="Nezihe Muhiddin"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating 100th Year Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 z-20"
              >
                <div className="w-full h-full rounded-full bg-tkb-gold/90 flex flex-col items-center justify-center text-tkb-dark shadow-xl backdrop-blur-sm border border-white/20">
                  <span className="font-serif text-3xl font-bold">100</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase">Yıl</span>
                  <div className="h-px w-8 bg-tkb-dark/30 my-1"></div>
                  <span className="font-mono text-[8px] tracking-widest uppercase text-center px-4">Gururla</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid: News & Events */}
        <section className="py-32 px-6 lg:px-24 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <h2 className="text-tkb-red font-mono text-sm tracking-[0.3em] uppercase mb-4">Güncel</h2>
                <h3 className="text-tkb-dark font-serif text-5xl md:text-6xl italic">Etkinlikler & Duyurular</h3>
              </div>
              <button className="text-tkb-dark font-mono text-sm tracking-widest border-b border-tkb-gold pb-2 hover:text-tkb-red transition-colors uppercase font-bold">Hepsini Gör</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[900px]">
              {/* Large Feature Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-tkb-dark/95 via-tkb-dark/30 to-transparent p-12 flex flex-col justify-end">
                  <span className="bg-tkb-red text-white font-mono text-xs tracking-widest px-4 py-2 w-fit mb-6 uppercase">Gelecek Etkinlik</span>
                  <h4 className="text-white font-serif text-4xl mb-6 leading-tight">Cumhuriyet Balosu: 100. Yıl Özel Gecesi</h4>
                  <p className="text-white/70 font-sans text-lg line-clamp-2 max-w-md">Bursa'nın köklü tarihini ve kadınlarımızın başarılarını hep birlikte kutluyoruz.</p>
                </div>
              </motion.div>

              {/* Medium Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 md:row-span-1 relative rounded-[40px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-tkb-dark/40 group-hover:bg-tkb-dark/60 transition-colors duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white font-serif text-3xl">Burs Programı Başvuruları</h4>
                  <p className="text-white/80 font-sans text-base mt-3">Geleceğin güçlü kadınlarını destekliyoruz.</p>
                </div>
              </motion.div>

              {/* Small Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-1 md:row-span-1 bg-tkb-surface rounded-[40px] p-10 flex flex-col justify-between border border-tkb-dark/5 hover:border-tkb-gold/30 transition-all duration-500"
              >
                <div className="text-tkb-red font-serif text-5xl italic font-light">"</div>
                <p className="text-tkb-dark/80 font-serif text-xl leading-relaxed">Kadınların toplumsal hayattaki yeri demokrasinin ölçüsüdür.</p>
                <div className="font-mono text-xs uppercase tracking-widest text-tkb-dark/40">Özlü Sözler</div>
              </motion.div>

              {/* Small Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-1 md:row-span-1 bg-tkb-red rounded-[40px] p-10 flex flex-col justify-center items-center text-center text-white"
              >
                <span className="font-mono text-xs tracking-widest uppercase mb-4 opacity-80">Üye Sayımız</span>
                <span className="font-serif text-6xl font-bold mb-4">1200+</span>
                <span className="font-sans text-sm tracking-wider uppercase opacity-70">Aktif Gönüllü</span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function MaintenanceView() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 bg-tkb-surface">
      <ThreeBackground />

      <div className="z-10 flex max-w-4xl flex-col items-center text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center rounded-full border border-tkb-gold/30 bg-tkb-gold/5 px-6 py-2 text-xs font-mono tracking-widest text-tkb-gold backdrop-blur-sm"
        >
          <span className="mr-3 h-2 w-2 rounded-full bg-tkb-gold animate-pulse"></span>
          DİJİTAL DÖNÜŞÜM SÜRÜYOR
        </motion.div>

        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-tkb-red font-mono text-sm tracking-[0.5em] uppercase"
          >
            Türk Kadınlar Birliği
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="text-tkb-dark font-serif text-5xl md:text-8xl leading-none"
          >
            Bursa <br />
            <span className="italic font-light">Şubesi</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl border-t border-b border-tkb-gold/20 py-8"
        >
          <p className="font-serif italic text-2xl text-tkb-dark/80 leading-relaxed">
            &quot;Kadının mutluluğu bir halkın huzuru, kadının özgürlüğü bir
            ülkenin geleceğidir.&quot;
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-tkb-dark/50 uppercase">
            Tijen Sözeri — Yönetim Kurulu Başkanı
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="relative w-20 h-20 grayscale brightness-110 opacity-80">
            <Image src="/logo.png" alt="TKB Logo" fill className="object-contain" priority />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-tkb-dark/40 font-mono text-[10px] tracking-widest mb-2 uppercase">Açılış Tarihi</p>
            <div className="flex items-baseline gap-3">
              <span className="text-tkb-dark font-serif text-3xl">08 Mart</span>
              <span className="text-tkb-gold font-serif text-xl">2026</span>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-8 text-tkb-dark/30 font-mono text-[9px] tracking-widest uppercase">
        &copy; {new Date().getFullYear()} TKB Bursa — Legacy Meets Futurity
      </footer>
    </main>
  );
}
