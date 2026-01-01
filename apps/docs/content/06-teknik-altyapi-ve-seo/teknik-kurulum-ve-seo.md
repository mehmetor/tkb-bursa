# Teknik Altyapı ve SEO: Kurulum ve Görünürlük Stratejisi

Bu doküman, projenin monorepo mimarisini, kullanılan teknoloji yığınını, güvenlik standartlarını ve SEO planını tanımlar.

## 1. Mimari ve Framework Yapısı

Proje, ölçeklenebilirlik ve kod paylaşımı için **Turborepo** tabanlı bir monorepo yapısı üzerine kurulmuştur.

*   **Mimari:** Turborepo (Monorepo)
*   **Web Sitesi:** Next.js 16 (App Router) - Performans ve SEO odaklı ön yüz.
*   **Yönetim Paneli:** Refine.dev + Next.js - CRUD operasyonları ve veri yönetimi için.
*   **Dokümantasyon:** MkDocs - Teknik ve kullanıcı dökümantasyonu.
*   **Veritabanı Katmanı:** Prisma ORM (Shared package) - Tip güvenli veritabanı erişimi.

## 2. Kullanılan Teknolojiler ve Bağımlılıklar

| Fonksiyon | Seçilen Çözüm |
| :--- | :--- |
| **Ön Yüz (UI)** | HeroUI v3 (Alpha) + Tailwind CSS 4 |
| **Veritabanı** | PostgreSQL (Managed by Railway) |
| **ORM** | Prisma ORM |
| **SEO** | Next.js Metadata API (Dinamik ve statik meta yönetimi) |
| **Admin Panel** | Refine.dev (Self-hosted, Next.js entegre) |
| **Form Yönetimi** | React Hook Form + Zod (Validasyon için) |
| **Animasyonlar** | Framer Motion |

## 3. Barındırma ve Dağıtım (Hosting & Deployment)

Proje, maliyet etkinliği ve kolay yönetilebilirlik amacıyla **Railway** platformu üzerinde host edilmektedir.

*   **Hosting:** Railway (PaaS)
*   **Veritabanı:** Railway PostgreSQL
*   **SSL:** Otomatik HTTPS (Let's Encrypt)
*   **Dağıtım Stratejisi:** 
    *   `release` branch -> Production (Canlı)
    *   `develop` branch -> Staging (Müşteri onayı/Test)
*   **CDN:** Global edge network üzerinden hızlı içerik sunumu.

## 4. SEO (Arama Motoru Optimizasyonu)

### 4.1. Anahtar Kelime Stratejisi
*   **Marka:** TKB Bursa, Türk Kadınlar Birliği Bursa Şubesi, Tijen Sözeri.
*   **Hizmet:** Bursa eğitim bursu, Bursa kadın dernekleri, kadın hakları savunuculuğu.
*   **Konum:** Bursa kadın etkinlikleri, Merinos AKKM etkinlikleri.

### 4.2. Teknik SEO ve Performans
*   **Core Web Vitals:** LCP < 2.5s hedefi ile optimize edilmiş sayfa yükleme hızları.
*   **Metadata:** Her sayfa için özgün `title`, `description` ve `OpenGraph` (sosyal medya) etiketleri.
*   **Görsel Optimizasyonu:** Next.js `next/image` bileşeni ile WebP formatında otomatik optimizasyon.
*   **Sitemap & Robots:** Otomatik oluşturulan `sitemap.xml` ve `robots.txt` dosyaları.
*   **Erişilebilirlik:** WCAG standartlarına uygun, semantik HTML yapısı.
