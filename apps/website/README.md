# TKB Bursa Dijital Dönüşüm Projesi

Türk Kadınlar Birliği (TKB) Bursa Şubesi'nin 100 yıllık köklü mirasını dijital çağa taşıyan, modern ve erişilebilir kurumsal web sitesi ve dökümantasyon projesidir.

## 🚀 Proje Hakkında
Bu çalışma, TKB Bursa'nın tarihsel belleğini korumak, güncel faaliyetlerini duyurmak ve burs/üyelik gibi operasyonel süreçleri dijitalleştirmek amacıyla başlatılmıştır. Proje, aynı repo içerisinde iki farklı servis barındıracak şekilde tasarlanmıştır:
1.  **Kurumsal Web Sitesi:** Next.js tabanlı modern web uygulaması.
2.  **Proje Dokümantasyonu:** MkDocs tabanlı statik dökümantasyon sitesi.

## 🛠 Teknik Teknoloji Yığını (Tech Stack)
*   **Frontend:** Next.js 16 (App Router), React 19
*   **Stil:** Tailwind CSS
*   **Animasyon:** Three.js (Giriş ekranı parçacık sistemi)
*   **Dokümantasyon:** MkDocs (Material Theme), Python
*   **Yayınlama:** Railway (Dual-Service Deployment)

## 📂 Dizin Yapısı
```bash
├── src/                # Next.js web sitesi kaynak kodları
├── docs/               # MkDocs yapılandırması ve içerikleri
│   ├── mkdocs.yml      # Dokümantasyon ayarları
│   ├── requirements.txt # Python bağımlılıkları
│   └── content/        # Markdown dokümanları
├── public/             # Statik varlıklar (logolar, resimler)
├── package.json        # Node.js bağımlılıkları ve scriptler
└── README.md           # Proje ana rehberi (Şu an buradasınız)
```

## 💻 Geliştirme (Local Development)

### Web Sitesini Çalıştırma
```bash
npm install
npm run dev
```

### Dokümantasyonu Çalıştırma
```bash
cd docs
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## ☁️ Yayınlama (Deployment)
Proje Railway üzerinde iki ayrı servis olarak çalışmaktadır:

1.  **Web Servisi:**
    *   Root Directory: `/`
    *   Commands: `npm run build` / `npm run start`
    *   Provider: Node.js

2.  **Docs Servisi:**
    *   Root Directory: `/docs`
    *   Commands: `pip install -r requirements.txt && mkdocs build`
    *   Start Command: `python3 -m http.server $PORT --directory site`
    *   Provider: Python

## 📅 Proje Takvimi
Projenin 8 Mart 2026 tarihinde tam fonksiyonel olarak yayına alınması hedeflenmektedir. Detaylı uygulama planına `docs/content/07-proje-yonetimi-ve-takvim/uygulama-takvimi.md` adresinden ulaşabilirsiniz.

---
*Cumhuriyetin 100 yıllık meşalesini dijital dünyada parlatmaya devam ediyoruz.*
