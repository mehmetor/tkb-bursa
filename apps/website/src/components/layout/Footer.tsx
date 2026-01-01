"use client";

import React from "react";
import { Link, Input, Button, Divider } from "@heroui/react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tkb-dark text-tkb-surface pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Brand Section */}
        <div className="md:col-span-5 space-y-12">
          <div className="flex items-center gap-8">
            <Image src="/logo.png" alt="TKB Logo" width={100} height={100} className="opacity-90 hover:opacity-100 transition-opacity" />
            <div className="font-serif">
              <h3 className="text-3xl leading-tight font-bold tracking-tighter">TÜRK KADINLAR BİRLİĞİ</h3>
              <p className="text-xs tracking-[0.5em] text-tkb-gold uppercase font-mono mt-2 font-bold">Bursa Şubesi</p>
            </div>
          </div>
          <p className="text-2xl text-tkb-surface/70 font-serif italic leading-relaxed max-w-lg">
            "Kadının özgürlüğü, bir ülkenin aydınlık geleceğinin en güçlü teminatıdır."
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-tkb-surface/40 hover:text-tkb-red transition-all"><Facebook size={24} /></Link>
            <Link href="#" className="text-tkb-surface/40 hover:text-tkb-red transition-all"><Instagram size={24} /></Link>
            <Link href="#" className="text-tkb-surface/40 hover:text-tkb-red transition-all"><Twitter size={24} /></Link>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-10">
          <h4 className="text-tkb-gold font-mono text-xs tracking-[0.4em] uppercase font-bold">Kurumsal</h4>
          <ul className="space-y-6 text-sm font-mono tracking-widest uppercase font-medium">
            <li><Link href="/kurumsal" className="text-tkb-surface/50 hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link href="/projeler" className="text-tkb-surface/50 hover:text-white transition-colors">Vizyonumuz</Link></li>
            <li><Link href="/yonetim" className="text-tkb-surface/50 hover:text-white transition-colors">Yönetim</Link></li>
            <li><Link href="/tarihce" className="text-tkb-surface/50 hover:text-white transition-colors">Tarihçe</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 space-y-10">
          <h4 className="text-tkb-gold font-mono text-xs tracking-[0.4em] uppercase font-bold">Hızlı Erişim</h4>
          <ul className="space-y-6 text-sm font-mono tracking-widest uppercase font-medium">
            <li><Link href="/haberler" className="text-tkb-surface/50 hover:text-white transition-colors">Etkinlikler</Link></li>
            <li><Link href="/burslar" className="text-tkb-surface/50 hover:text-white transition-colors">Burs Programı</Link></li>
            <li><Link href="/yayinlar" className="text-tkb-surface/50 hover:text-white transition-colors">Yayınlar</Link></li>
            <li><Link href="/iletisim" className="text-tkb-surface/50 hover:text-white transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-3 space-y-10">
          <h4 className="text-tkb-gold font-mono text-xs tracking-[0.4em] uppercase font-bold">Bize Ulaşın</h4>
          <div className="space-y-8">
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 border border-tkb-surface/10 flex items-center justify-center rounded-full text-tkb-red bg-tkb-surface/5">
                <Mail size={20} />
              </div>
              <span className="text-xs font-mono tracking-widest text-tkb-surface/60 font-medium">info@tkbbursa.org</span>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 border border-tkb-surface/10 flex items-center justify-center rounded-full text-tkb-red bg-tkb-surface/5">
                <Phone size={20} />
              </div>
              <span className="text-xs font-mono tracking-widest text-tkb-surface/60 font-medium">+90 224 234 45 45</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <Divider className="bg-tkb-surface/10 mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] font-mono tracking-[0.2em] text-tkb-surface/30 uppercase">
            <p>&copy; {new Date().getFullYear()} TKB Bursa Şubesi. Her hakkı saklıdır.</p>
            <div className="flex gap-8">
              <Link href="/kvkk" className="text-inherit hover:text-white transition-colors">KVKK</Link>
              <Link href="/gizlilik" className="text-inherit hover:text-white transition-colors">Gizlilik</Link>
              <Link href="/cerez" className="text-inherit hover:text-white transition-colors">Çerezler</Link>
            </div>
          </div>
          <p className="text-[9px] font-mono tracking-[0.2em] text-tkb-gold/40 uppercase">
            Design for Legacy & Futurity
          </p>
        </div>
      </div>
    </footer>
  );
}

