# TKB Bursa Monorepo - Railway Dağıtım Rehberi

Bu proje Railway üzerinde **Canlı (Production)** ve **Test (Staging)** olmak üzere iki farklı ortamda yayınlanacak şekilde yapılandırılmıştır.

---

## 🚀 Ortam Stratejisi

| Ortam | Git Branch | Amaç | Erişim |
| :--- | :--- | :--- | :--- |
| **Production** | `main` | Canlı Site | `tkbbursa.org.tr` |
| **Staging** | `develop` | Müşteri Onayı | `test.tkbbursa.org.tr` |

---

## 🏗 1. Staging (Test) Ortamı Kurulumu
Müşterinin son değişiklikleri görmesi için Railway Dashboard'da mevcut servislerinizin (Website ve Admin) birer kopyasını oluşturun:

1. **Duplicate Service:** Mevcut `tkb-website` servisine sağ tıklayıp "Duplicate" deyin.
2. **Branch Ayarı:** Yeni servisin ayarlarından (Settings -> General) "Deployment Branch" kısmını **`develop`** olarak değiştirin.
3. **Domain:** Railway size otomatik bir `xxx-develop.up.railway.app` adresi verecektir. Bu adresi müşteriye gönderebilirsiniz.

> **💡 İpucu:** Eğer verilerin canlı siteyle karışmasını istemiyorsanız, Railway'de ikinci bir PostgreSQL (Staging DB) oluşturup Staging servislerinin `DATABASE_URL` değişkenini buna bağlayabilirsiniz.

---

## 🌍 2. Canlı (Production) Ortamı Kurulumu
Canlı ortam sadece `main` branch'indeki kodları yayınlar.

**Ayarlar:**
- **Service Name:** `tkb-website-prod`
- **Branch:** `main`
- **Root Directory:** `/` (İlgili klasörler dökümanın devamındaki gibi)

---

## 🛠 Servis Detayları (Tüm Ortamlar İçin)

### A. Web Sitesi
- **Build:** `npx turbo run build --filter=@tkb/website`
- **Start:** `npx turbo run start --filter=@tkb/website`

### B. Admin Paneli
- **Build:** `npx turbo run build --filter=@tkb/admin`
- **Start:** `npx turbo run start --filter=@tkb/admin`

### C. Dokümantasyon (MkDocs)
- **Root Directory:** `apps/docs`
- **Build:** `pip install -r requirements.txt && mkdocs build`
- **Start:** `python3 -m http.server $PORT --directory site`
- **Branch:** `docs` (veya `main`)

---

## 🔄 Çalışma Akışı (Workflow)
1. Kodunuzu yazın ve `develop` branch'ine push edin.
2. Railway otomatik olarak **Staging** sitesini günceller.
3. Müşteriye test linkini gönderin: *"Hocam son hali buradan görebilirsiniz: `test.tkbbursa.org.tr`"*
4. Onay aldığınızda `develop` branch'ini `main` branch'ine merge edin.
5. Railway otomatik olarak **Canlı** siteyi günceller.
