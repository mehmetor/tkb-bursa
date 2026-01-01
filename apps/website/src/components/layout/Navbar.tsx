"use client";

import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "KURUMSAL", href: "/kurumsal" },
    { label: "PROJELER", href: "/projeler" },
    { label: "ETKİNLİK & HABERLER", href: "/haberler" },
    { label: "YAYINLAR", href: "/yayinlar" },
    { label: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <HeroNavbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full" 
      className="py-4 fixed top-0 border-b border-tkb-dark/5 bg-tkb-surface/80 backdrop-blur-xl h-24 z-[100]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="TKB Logo" width={54} height={54} className="hover:scale-105 transition-transform duration-300" />
            <div className="hidden md:block">
              <p className="font-serif font-bold text-tkb-dark text-xl leading-tight tracking-tighter">
                TÜRK KADINLAR BİRLİĞİ
              </p>
              <p className="text-xs font-mono tracking-[0.3em] text-tkb-red uppercase mt-1">BURSA ŞUBESİ</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link 
              color="foreground" 
              href={item.href} 
              className="text-xs font-mono tracking-widest text-tkb-dark/60 hover:text-tkb-red transition-all duration-300 font-bold"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-6">
        <NavbarItem className="hidden lg:flex">
          <Button 
            as={Link} 
            href="/burs-basvurusu" 
            variant="light" 
            size="md" 
            className="font-mono text-xs tracking-widest text-tkb-dark/60 hover:text-tkb-red font-bold"
          >
            BURS PROGRAMI
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="/uye-ol" 
            variant="solid" 
            size="md" 
            className="font-mono text-xs tracking-widest bg-tkb-red text-white px-8 h-12 rounded-none hover:bg-tkb-dark transition-colors font-bold"
          >
            BİZE KATILIN
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-tkb-surface/95 backdrop-blur-2xl pt-12">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-2xl font-serif italic py-4 border-b border-tkb-dark/5"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="pt-10">
           <Button as={Link} href="/burs-basvurusu" variant="bordered" className="w-full font-mono text-xs tracking-widest rounded-none border-tkb-dark mb-4">
            BURS PROGRAMI
          </Button>
          <Button as={Link} href="/uye-ol" variant="solid" className="w-full font-mono text-xs tracking-widest rounded-none bg-tkb-red text-white">
            BİZE KATILIN
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}

