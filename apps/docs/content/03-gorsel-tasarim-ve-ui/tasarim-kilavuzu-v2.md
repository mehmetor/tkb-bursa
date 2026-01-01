# TKB Bursa: Premium Görsel Tasarım Stratejisi

Bu döküman, projenin "sıradan bir dernek sitesi"nden "yüksek prestijli bir kurum vitrini"ne dönüşmesi için gereken teknik ve estetik direktifleri içerir.


## 1. Tasarım Konsepti: "Legacy Meets Futurity"

Tasarım dili; 1920'lerin tipografik zarafetini (Serif başlıklar) 2020'lerin teknolojik minimalizmiyle (Bento-grid, Glassmorphism, Smooth Scroll) birleştirmelidir.


### Görsel Anahtarlar:

- **Whitespace (Negatif Alan):** İçeriğin nefes alması için geniş boşluklar.

- **Editorial Layout:** Bir sanat dergisi veya Vogue/Architectural Digest tarzı asimetrik yerleşimler.

- **Micro-interactions:** Mouse hareketine duyarlı çok hafif parallax efektleri.


## 2. Teknik UI Prompt (Frontend/Tailwind İçin)

**Renk Paleti ve Dokular:**

- **Primary:** Deep Crimson (#B91C1C) - Saf kırmızı yerine daha tok, otoriter bir bordo-kırmızı.

- **Surface:** Ivory/Eggshell (#F9F8F3) - Saf beyaz yerine gözü yormayan, kağıt hissi veren kırık beyaz.

- **Accents:** Champagne Gold (#D4AF37) - Sadece ince ayraç çizgilerinde (hairline) ve hover durumlarında.

- **Blur:** Arka planlarda `backdrop-blur-xl` ile buzlu cam (Glassmorphism) etkisi.

**Tipografi Reçetesi:**

- **Display Başlıklar:** `Playfair Display` (Semi-bold, Italic varyasyonlarla). Harf aralığı (letter-spacing) hafif daraltılmış.

- **Okuma Metinleri:** `Geist Sans` veya `Inter`. 400 weight, 1.6 line-height.

- **Kaptan (Alt Bilgi):** `JetBrains Mono` veya benzeri bir monospaced font (Modernlik katmak için küçük boyutlarda).


## 3. Bileşen Bazlı Tasarım Detayları

### Hero Alanı (Giriş)

- **Yapı:** Sol tarafta çok büyük bir Serif başlık (Örn: "Cumhuriyetle Başladık"), sağ tarafta ise maskelenmiş, yüksek kontrastlı siyah-beyaz bir Nezihe Muhiddin fotoğrafı.

- **Efekt:** Fotoğraf üzerinde yavaşça hareket eden (floating) bir "100. Yıl" mühürü (SVG Gold).


### Bento-Grid Etkinlikler

- **Yapı:** Standart liste yerine, Apple tarzı farklı boyutlarda kartlardan oluşan bir yapı (Bento Grid).

- **Detay:** Kartların köşeleri `rounded-3xl` ve border genişliği `0.5px` (çok ince) olmalı.


### Zaman Tüneli (Tarihçe)

- **Yapı:** Dikey bir çizgi yerine, yatayda kayan (horizontal scroll) ve her durakta o yıla ait gazete kupürlerinin "fade-in" ile belirdiği bir sinematik akış.


## 4. Yapay Zeka (Midjourney/DALL-E) Görsel Promptu

_(Tasarımcıya vizyon göstermek için mockup üretirken kullanılabilir)_

> **Prompt:** "High-end UI/UX landing page design for a prestigious historical women's rights NGO. Aesthetic: Modern Editorial, Luxury Minimalist. Typography: Elegant Serif headers, clean Sans-serif body. Color Palette: Deep Crimson, Ivory White, and delicate Gold accents. Features: Large high-contrast monochrome photography of historical female leaders, asymmetrical layouts, plenty of white space, glassmorphism navigation bar. Professional, museum-like quality, 8k resolution, UI/UX, Figma style --ar 16:9"


## 5. Uygulama Notu (Turborepo + Refine)

- **Framer Motion:** Next.js tarafında tüm sayfa geçişleri ve elemanların ekrana gelişi için `framer-motion` kullanılmalı (0.5s duration, ease-out).

- **Refine UI:** Admin panelinde `Ant Design` veya `Mantine` yerine, özel bir Tailwind katmanı ile web sitesindeki premium hissi admin tarafında da (Bento-grid dashboard) devam ettirilmelidir.
