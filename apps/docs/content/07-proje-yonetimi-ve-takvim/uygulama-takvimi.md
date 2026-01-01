# Proje Yönetimi ve Takvim: Uygulama Yol Haritası

Bu doküman, Türk Kadınlar Birliği (TKB) Bursa Şubesi web sitesinin hayata geçirilmesi için gereken detaylı zaman çizelgesini, teknik backlog'u ve uygulama adımlarını içerir. Toplam süre: **6 Hafta**.

## 1. Genişletilmiş Uygulama Takvimi

### Hafta 1: Temel Kurulum ve Tasarım Sistemi
- **Teknik:** Next.js projesinin yapılandırılması, Tailwind CSS v4 ve HeroUI entegrasyonu.
- **Tasarım:** Tasarım kılavuzu uyarınca CSS değişkenlerinin (oklch) tanımlanması, Google Fonts (Playfair Display, Roboto) kurulumu.
- **Dokümantasyon:** Proje yapısının README.md'ye işlenmesi.

### Hafta 2: Bilgi Mimarisi ve İçerik Altyapısı
- **Navigasyon:** Site haritası doğrultusunda Layout ve Navbar yapısının kurulması.
- **CMS:** Markdown tabanlı içerik yönetim sisteminin (haberler, etkinlikler) kurgulanması.
- **İçerik:** Arşivdeki ilk haberlerin sisteme aktarılması.

### Hafta 3: Ana Sayfa Tasarımı ve Uygulama
- **Bileşenler:** Hero Slider, Sayaç Modülü, Başkanın Mesajı, Etkinlik Takvimi grid yapısı.
- **Görsel:** "Modern Klasik" üsluba uygun Hero alanının tasarımı.
- **Responsive:** Mobil öncelikli (Mobile-first) arayüz geliştirme.

### Hafta 4: Fonksiyonel Modüller (Burs ve Üyelik)
- **Burs Sistemi:** Başvuru formu, dosya yükleme (validation: Zod), başarılı/hata durumları.
- **Üyelik:** Ön başvuru formu ve e-posta tetikleyici (Next.js API routes).
- **Hukuki:** KVKK açık rıza metinleri ve çerez politikası entegrasyonu.

### Hafta 5: SEO, Performans ve Güvenlik
- **SEO:** Metadata API yapılandırması, OpenGraph görselleri, Sitemap üretimi.
- **Performans:** Görsel optimizasyonu (Next/Image), Core Web Vitals testleri.
- **Güvenlik:** Form güvenliği (CSRF), middleware yapılandırması.

### Hafta 6: Final Kontroller ve Yayına Alım
- **Test:** BrowserStack veya manuel cihaz testleri.
- **Yayına Alım:** Vercel/Railway dağıtımı (Deployment).
- **Eğitim:** Yönetim için basit içerik giriş dokümantasyonu.

## 2. Ürün Backlog (Categorized)

### [INFRA] Altyapı
- [x] Next.js + Tailwind v4 + HeroUI Setup
- [x] Font & Color Token Configuration
- [ ] Markdown Content Fetching Logic

### [UI/UX] Arayüz
- [x] Global Layout & Navigation
- [x] Home Page: Hero Section
- [x] Home Page: Counter Module
- [x] Home Page: News/Events Feed
- [ ] Interaktif Tarihçe (Zaman Tüneli)

### [FUNC] Fonksiyonel
- [ ] Burs Başvuru Portalı ve Form Validasyonu
- [ ] Üyelik Ön Başvuru Formu
- [ ] İletişim Formu & Google Maps Entegrasyonu
- [ ] E-Bülten Kayıt (Mailchimp/Sendinblue)

### [SEO] Görünürlük
- [ ] Semantic HTML Audit
- [ ] Dynamic Meta Tags per Page
- [ ] Google Search Console Setup

## 3. Proje Kontrol Listesi (Checklist)

- [ ] Domain & Hosting Aktif mi?
- [ ] SSL Sertifikası (HTTPS) yüklü mü?
- [ ] Mobil menü düzgün çalışıyor mu?
- [ ] Burs başvuru formu verileri kaydediyor mu?
- [ ] Sosyal medya ikonları doğru linklere gidiyor mu?
- [ ] KVKK metinleri onay kutucukları eklendi mi?
- [ ] Google Search Console kaydı yapıldı mı?

## 4. Sorumluluk Matrisi
*   **Proje Yöneticisi:** Genel koordinasyon ve onay.
*   **İçerik Editörü:** Haber girişi ve fotoğraf yönetimi.
*   **Teknik Destek:** Sunucu yönetimi ve güvenlik.
