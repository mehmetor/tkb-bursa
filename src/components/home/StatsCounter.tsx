"use client";

import React from "react";

const stats = [
  { label: "Yıllık Tecrübe", value: "100+", color: "text-tkb-red" },
  { label: "Aktif Üye", value: "450+", color: "text-white" },
  { label: "Burslu Öğrenci", value: "1200+", color: "text-white" },
  { label: "Tamamlanan Proje", value: "85+", color: "text-white" },
];

export default function StatsCounter() {
  return (
    <section className="bg-tkb-anthracite py-20 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tkb-red/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tkb-gold/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <span className={`font-serif text-5xl md:text-6xl font-bold ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                {stat.value}
              </span>
              <div className="h-0.5 w-8 bg-tkb-gold mb-2" />
              <span className="text-gray-400 font-sans text-sm uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

