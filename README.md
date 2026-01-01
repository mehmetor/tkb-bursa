# TKB Bursa Monorepo

Bu proje, Türk Kadınlar Birliği (TKB) Bursa Şubesi için geliştirilen web sitesi, yönetim paneli ve dokümantasyon sistemini içeren bir monorepo yapısıdır.

## 🏗 Proje Yapısı

Monorepo yapısı [Turborepo](https://turbo.build/) kullanılarak yönetilmektedir:

- **`apps/website`**: [Next.js](https://nextjs.org/) (App Router) ile geliştirilen kurumsal web sitesi.
- **`apps/admin`**: [Refine.dev](https://refine.dev/) ve Next.js ile geliştirilen yönetim paneli.
- **`apps/docs`**: [MkDocs](https://www.mkdocs.org/) ile hazırlanan proje dokümantasyonu.
- **`packages/db`**: [Prisma ORM](https://www.prisma.io/) ile yönetilen ortak veritabanı katmanı.

## 🚀 Teknolojiler

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS 4, HeroUI v3 (Alpha).
- **Admin Panel:** Refine.dev, Ant Design.
- **Veritabanı:** PostgreSQL, Prisma ORM.
- **Hosting/Deployment:** Railway.
- **Paket Yönetimi:** npm (Workspaces).

## 🛠 Yerel Geliştirme

Projeyi yerel makinenizde çalıştırmak için:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

2. **Veritabanı İstemcisini Oluşturun:**
   ```bash
   npx turbo run db:generate
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   # Tüm uygulamaları başlatmak için:
   npx turbo run dev

   # Sadece belirli bir uygulamayı başlatmak için:
   npx turbo run dev --filter=@tkb/website
   npx turbo run dev --filter=@tkb/admin
   ```

Uygulamalar varsayılan olarak şu portlarda çalışır:
- Website: `http://localhost:3000`
- Admin: `http://localhost:3001`
- Docs: `http://localhost:8000` (MkDocs server)

## 📁 Ortam Değişkenleri (.env)

Gerekli `.env` dosyalarını ilgili klasörlerde oluşturun:

- **`apps/website/.env`** ve **`apps/admin/.env`**:
  - `DATABASE_URL`: PostgreSQL bağlantı adresi.
  - `NEXT_PUBLIC_MAINTENANCE_MODE`: `true` veya `false`.

## 🚢 Dağıtım (Deployment)

Proje Railway üzerinde yayına alınacak şekilde yapılandırılmıştır. Dağıtım ile ilgili detaylı bilgi için [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md) dosyasını inceleyebilirsiniz.

## 📄 Lisans

Bu proje Simetri8 tarafından TKB Bursa için geliştirilmiştir.

