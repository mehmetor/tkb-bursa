# Fonksiyonel Modüller: Burs ve Üyelik Sistemleri

Bu doküman, web sitesinin operasyonel gücünü oluşturan interaktif modüllerin teknik ve süreç detaylarını açıklar.

## 1. Dijital Burs Yönetim Sistemi

TKB Bursa Şubesi'nin en önemli dijital hizmetlerinden biridir.

### 1.1. Başvuru Süreci
*   **Takvim:** 1 - 30 Eylül tarihleri arası.
*   **Arayüz:** `bursa.turkkadinlarbirligi.org/burs-basvuru` (veya benzeri bir sub-domain/sayfa).
*   **Gerekli Alanlar:**
    *   Kişisel Bilgiler (Ad, Soyad, TC No).
    *   Eğitim Bilgileri (Üniversite, Bölüm, Sınıf).
    *   Dosya Yükleme (Öğrenci Belgesi, Transkript, Gelir Beyanı).
    *   KVKK Onayı (Zorunlu Checkbox).

### 1.2. Yönetim ve Veri Güvenliği
*   Başvurular CMS panelinde veya şifreli bir Google Sheets dokümanında toplanmalıdır.
*   Erişim sadece burs komisyonuna tanımlanmalıdır.

## 2. Üyelik Modülü

*   **Üyelik Ön Başvuru Formu:** Yeni üye adayları için temel bilgilerin toplandığı sade bir form.
*   **Onay Mekanizması:** Form doldurulduğunda yönetim kuruluna e-posta bildirimi gider.

## 3. Bağış ve E-Bülten

### 3.1. Bağış Kanalları
*   IBAN bilgilerinin kopyalanabilir ve şık bir kart yapısında sunulması.
*   İlerleyen aşamada: Fonzip veya Iyzico üzerinden kredi kartı ile bağış entegrasyonu.

### 3.2. E-Bülten (Abonelik)
*   Sitenin footer (alt bilgi) kısmında "Haber bültenimize abone olun" alanı.
*   Mailchimp veya Sendinblue entegrasyonu ile otomatik liste yönetimi.

## 4. Hukuki Gereksinimler (KVKK)
*   Tüm formlarda açık rıza metinleri bulunmalıdır.
*   "Gizlilik Politikası" ve "Çerez Politikası" sayfaları standart olarak sitede yer almalıdır.

