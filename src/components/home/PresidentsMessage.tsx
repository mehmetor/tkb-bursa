"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function PresidentsMessage() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Area */}
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-tkb-gold translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          <div className="relative aspect-[3/4] bg-tkb-gray overflow-hidden">
             {/* Placeholder for Tijen Sözeri Photo */}
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Tijen Sözeri"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute bottom-8 -right-8 bg-tkb-red text-white p-6 shadow-xl max-w-[200px]">
            <p className="font-serif italic text-sm">
              &quot;Gelecek nesillere daha eşit bir dünya bırakmak borcumuzdur.&quot;
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-tkb-red font-sans font-bold tracking-[0.2em] uppercase text-sm">Başkanın Mesajı</h3>
            <h2 className="text-tkb-anthracite font-serif text-4xl md:text-5xl font-bold leading-tight">
              Cumhuriyetin İkinci Yüzyılında <span className="italic text-tkb-gold">Daha Güçlü...</span>
            </h2>
          </div>

          <div className="space-y-6 text-tkb-anthracite/80 font-sans text-lg leading-relaxed">
            <p>
              Türk Kadınlar Birliği Bursa Şubesi olarak, 1924 yılında Ulu Önder Mustafa Kemal Atatürk&apos;ün tensipleriyle kurulan bu köklü çınarın birer dalı olmaktan onur duyuyoruz.
            </p>
            <p>
              Bursa yerelinde yürüttüğümüz çalışmalarla, kadın haklarının korunması, kız çocuklarımızın eğitimi ve toplumsal cinsiyet eşitliğinin sağlanması için var gücümüzle çalışıyoruz. 100 yıllık tecrübemizi modern yöntemlerle birleştirerek, geleceğin Türkiyesi&apos;ni kadınlarla birlikte inşa ediyoruz.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button className="bg-tkb-anthracite text-white font-bold px-10 rounded-sm">
              MESAJIN DEVAMI
            </Button>
            <div className="font-serif">
              <p className="font-bold text-xl text-tkb-anthracite">Tijen Sözeri</p>
              <p className="text-sm text-tkb-gold uppercase tracking-widest">Yönetim Kurulu Başkanı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

