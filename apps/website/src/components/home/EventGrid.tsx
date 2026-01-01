"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@heroui/react";
import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    title: "100. Yıl Sempozyumu: 1924'ü Yeniden Okumak",
    date: "20 Eylül 2024",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    category: "Sempozyum",
    excerpt: "Cumhuriyetimizin 100. yılına özel düzenlenen akademik sempozyum Merinos AKKM'de..."
  },
  {
    title: "Mezopotamya Kültür Gezisi",
    date: "15 Mayıs 2024",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800",
    category: "Kültür Gezisi",
    excerpt: "Mardin'den Göbeklitepe'ye uzanan kadim medeniyetler yolculuğumuzun detayları..."
  },
  {
    title: "\"İnsan Kadın\" Konferansı",
    date: "5 Aralık 2024",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    category: "Konferans",
    excerpt: "Kadın hakları ve mobbing üzerine hukuk odaklı bilgilendirme paneli..."
  }
];

export default function EventGrid() {
  return (
    <section className="py-24 bg-tkb-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h3 className="text-tkb-red font-sans font-bold tracking-[0.2em] uppercase text-sm">GÜNCEL</h3>
            <h2 className="text-tkb-anthracite font-serif text-4xl md:text-5xl font-bold">Haberler & <span className="text-tkb-gold italic">Etkinlikler</span></h2>
          </div>
          <Button 
            as={Link} 
            href="/haberler" 
            variant="light" 
            className="text-tkb-anthracite font-bold group"
            endContent={<ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />}
          >
            TÜMÜNÜ GÖR
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} shadow="sm" className="border-none rounded-none bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 relative h-64">
                <Image
                  alt={event.title}
                  className="object-cover w-full h-full rounded-none grayscale hover:grayscale-0 transition-all duration-500"
                  src={event.image}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-tkb-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {event.category}
                  </span>
                </div>
              </CardHeader>
              <CardBody className="px-6 py-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-tkb-gold font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <h4 className="text-tkb-anthracite font-serif text-xl font-bold leading-tight group-hover:text-tkb-red transition-colors">
                  {event.title}
                </h4>
                <p className="text-gray-500 text-sm font-sans line-clamp-3">
                  {event.excerpt}
                </p>
              </CardBody>
              <CardFooter className="px-6 pb-8 pt-0">
                <Link href="#" className="text-tkb-red font-bold text-xs flex items-center gap-2 group/link">
                  DEVAMINI OKU
                  <div className="h-px w-4 bg-tkb-red group-hover/link:w-8 transition-all" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

