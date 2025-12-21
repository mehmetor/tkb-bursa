import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Animation */}
      <ThreeBackground />

      <div className="z-10 flex max-w-4xl flex-col items-center text-center space-y-12">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-tkb-gold/30 bg-tkb-gold/5 px-4 py-1.5 text-sm font-medium text-tkb-gold backdrop-blur-sm animate-pulse">
          <span className="mr-2 h-2 w-2 rounded-full bg-tkb-gold"></span>
          Çok Yakında Yayındayız
        </div>

        {/* Logo & Header Area */}
        <div className="space-y-6">
          <h2 className="text-tkb-red font-serif text-lg tracking-[0.3em] uppercase md:text-xl">
            Türk Kadınlar Birliği
          </h2>
          <h1 className="text-tkb-anthracite font-serif text-4xl md:text-7xl leading-tight">
            Bursa Şubesi
          </h1>
          <div className="h-1 w-24 bg-tkb-gold mx-auto"></div>
        </div>

        {/* Motto */}
        <div className="max-w-2xl px-6">
          <p className="font-serif italic text-xl md:text-2xl text-tkb-anthracite/80 leading-relaxed">
            &quot;Kadının mutluluğu bir halkın huzuru, kadının özgürlüğü bir ülkenin geleceğidir.&quot;
          </p>
          <p className="mt-4 font-sans text-sm font-bold tracking-widest uppercase text-tkb-anthracite/50">
            Tijen Sözeri
          </p>
        </div>

        {/* Launch Info */}
        <div className="space-y-4">
          <p className="text-tkb-anthracite/60 font-sans tracking-wide">
            Yeni dijital yuvamızda buluşmak üzere.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-tkb-anthracite font-bold">
            <span className="text-2xl font-serif">8 Mart 2026</span>
            <span className="hidden md:inline text-tkb-gold">|</span>
            <span className="text-lg tracking-wider">tkbbursa.org</span>
          </div>
        </div>

        {/* 100th Year Badge (Optional Idea) */}
        <div className="pt-8">
          <div className="flex flex-col items-center opacity-40">
            <span className="text-xs tracking-[0.5em] uppercase text-tkb-anthracite">Est. 1924</span>
          </div>
        </div>
      </div>

      {/* Footer / Copyright */}
      <footer className="absolute bottom-8 left-0 w-full text-center text-tkb-anthracite/40 text-xs font-sans">
        &copy; {new Date().getFullYear()} TKB Bursa Şubesi. Tüm Hakları Saklıdır.
      </footer>
    </main>
  );
}
