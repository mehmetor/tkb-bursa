"use client";

import React from "react";
import { Button } from "@heroui/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-tkb-anthracite">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-tkb-anthracite to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000"
          alt="TKB Bursa Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tkb-red/20 border border-tkb-red/30 text-tkb-red font-sans text-sm font-bold tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-tkb-red animate-pulse" />
            100 Yıllık Miras
          </div>
          
          <h1 className="text-white font-serif text-5xl md:text-7xl leading-tight font-bold">
            Cumhuriyetin <br />
            <span className="text-tkb-gold">Güçlü Kadınları</span>
          </h1>
          
          <p className="text-lg text-gray-200 font-sans leading-relaxed max-w-lg italic">
            &quot;Kadının mutluluğu bir halkın huzuru, kadının özgürlüğü bir ülkenin geleceğidir.&quot;
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-tkb-red text-white font-bold px-8 rounded-sm">
              DERNEĞİMİZİ TANIYIN
            </Button>
            <Button size="lg" variant="bordered" className="text-white border-white hover:bg-white hover:text-tkb-anthracite font-bold px-8 rounded-sm">
              ÜYELİK BAŞVURUSU
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Dots Placeholder */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        <button className="h-2 w-12 bg-tkb-red" />
        <button className="h-2 w-12 bg-white/30 hover:bg-white/50 transition-colors" />
        <button className="h-2 w-12 bg-white/30 hover:bg-white/50 transition-colors" />
      </div>

      {/* Side Navigation Buttons Placeholder */}
      <div className="hidden md:flex absolute right-12 bottom-12 gap-4 z-30">
        <button className="p-3 border border-white/20 text-white hover:bg-white/10 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="p-3 border border-white/20 text-white hover:bg-white/10 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

