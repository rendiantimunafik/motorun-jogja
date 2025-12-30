# 🚀 CARA UPLOAD MOTORUN JOGJA KE VERCEL

## ✅ SEMUA FILE SUDAH SIAP!

Saya sudah buatkan semua file yang dibutuhkan. Sekarang tinggal ikuti langkah di bawah ini:

---

## 📦 METODE 1: UPLOAD VIA GITHUB (PALING MUDAH & RECOMMENDED)

### Step 1: Push ke GitHub

1. **Buka Terminal/Command Prompt** di folder project ini

2. **Jalankan perintah ini satu per satu:**

```bash
# Initialize Git
git init

# Add semua file
git add .

# Commit
git commit -m "MotoRun Jogja - Ready to deploy"

# Ganti branch ke main
git branch -M main
```

3. **Buat Repository di GitHub:**
   - Buka https://github.com/new
   - Repository name: `motorun-jogja`
   - Description: `Aplikasi Sewa Motor Yogyakarta`
   - **Jangan** centang "Initialize with README"
   - Klik **"Create repository"**

4. **Push ke GitHub:**

```bash
# Ganti USERNAME dengan username GitHub Anda
git remote add origin https://github.com/USERNAME/motorun-jogja.git

# Push
git push -u origin main
```

### Step 2: Deploy di Vercel

1. **Buka** https://vercel.com

2. **Login/Sign up** dengan akun GitHub Anda

3. **Klik tombol "Add New..."** → **"Project"**

4. **Import Git Repository:**
   - Cari dan pilih repository `motorun-jogja`
   - Klik **"Import"**

5. **Configure Project:**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. **Klik tombol "Deploy"** 🚀

7. **Tunggu 2-3 menit** - Vercel akan build dan deploy aplikasi Anda

8. **SELESAI!** Aplikasi live di: `https://motorun-jogja.vercel.app`

---

## 📦 METODE 2: UPLOAD VIA VERCEL CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login ke Vercel

```bash
vercel login
```

Pilih GitHub dan authorize.

### Step 3: Deploy

```bash
# Deploy ke preview
vercel

# Atau langsung ke production
vercel --prod
```

### Step 4: Follow Prompts

- Set up and deploy: **Y**
- Which scope: Pilih akun Anda
- Link to existing project: **N**
- What's your project's name: `motorun-jogja`
- In which directory: `./` (enter)
- Want to override settings: **N**

**DONE!** URL akan muncul di terminal.

---

## 📦 METODE 3: DRAG & DROP (Manual Upload)

⚠️ **PERHATIAN:** Metode ini tidak direkomendasikan untuk project React/Vite karena Vercel tidak bisa auto-build.

**Gunakan Metode 1 atau 2!**

---

## 🔧 TROUBLESHOOTING

### ❌ Error: "Build failed"

**Solusi:**
1. Test build di local dulu:
   ```bash
   npm install
   npm run build
   ```
2. Jika error, fix dulu sebelum deploy
3. Commit dan push lagi ke GitHub

### ❌ Error: "Module not found"

**Solusi:**
1. Pastikan semua dependencies di `package.json` sudah benar
2. Di Vercel dashboard → Settings → General
3. Scroll ke "Build & Development Settings"
4. Install Command: `npm install`
5. Redeploy

### ❌ Error: "Page not found (404)"

**Solusi:**
1. Pastikan file `vercel.json` ada
2. Isi `vercel.json` sudah benar dengan rewrite rules
3. Redeploy dari Vercel dashboard

### ❌ Build berhasil tapi aplikasi blank/putih

**Solusi:**
1. Check browser console (F12) untuk error
2. Pastikan `index.html` ada
3. Pastikan `src/main.tsx` import path benar
4. Check di Vercel dashboard → Deployments → Functions → View Logs

---

## ✅ CHECKLIST SEBELUM DEPLOY

Pastikan semua ini sudah OK:

- [x] ✅ File `package.json` ada
- [x] ✅ File `vite.config.ts` ada
- [x] ✅ File `tailwind.config.js` ada
- [x] ✅ File `tsconfig.json` ada
- [x] ✅ File `index.html` ada
- [x] ✅ File `src/main.tsx` ada
- [x] ✅ File `styles/globals.css` sudah punya `@tailwind` directives
- [x] ✅ File `vercel.json` ada
- [x] ✅ File `.gitignore` ada
- [x] ✅ File `.vercelignore` ada

**SEMUA SUDAH SAYA BUATKAN!** ✨

---

## 🎯 STRUKTUR PROJECT YANG SUDAH SIAP

```
motorun-jogja/
├── components/              ✅ Sudah ada
│   ├── ui/
│   ├── figma/
│   ├── ActionButtons.tsx
│   ├── BookingFlow.tsx
│   ├── BottomNav.tsx
│   └── ... (25+ components)
├── styles/
│   └── globals.css         ✅ Sudah di-update
├── src/
│   └── main.tsx            ✅ Baru dibuat
├── App.tsx                 ✅ Sudah ada
├── index.html              ✅ Baru dibuat
├── package.json            ✅ Baru dibuat
├── vite.config.ts          ✅ Baru dibuat
├── tailwind.config.js      ✅ Baru dibuat
├── postcss.config.js       ✅ Baru dibuat
├── tsconfig.json           ✅ Baru dibuat
├── tsconfig.node.json      ✅ Baru dibuat
├── vercel.json             ✅ Baru dibuat
├── .gitignore              ✅ Anda edit
└── .vercelignore           ✅ Anda edit
```

---

## 🎉 NEXT STEPS SETELAH DEPLOY

### 1. Custom Domain (Opsional)

Di Vercel Dashboard:
- Settings → Domains
- Add domain: `motorunjogja.com`
- Follow DNS instructions

### 2. Environment Variables (Jika perlu)

Di Vercel Dashboard:
- Settings → Environment Variables
- Add: `VITE_API_URL`, dll

### 3. Analytics

Vercel otomatis kasih analytics gratis:
- Dashboard → Analytics

### 4. Monitor Performance

- Dashboard → Speed Insights
- Lihat performance score

---

## 📱 SHARE YOUR APP

Setelah deploy, share link ke:
- Dosen Anda
- Teman-teman
- Social media

**Contoh URL:**
```
https://motorun-jogja.vercel.app
https://motorun-jogja-username.vercel.app
```

---

## 💡 TIPS PRO

### Auto-Deploy di GitHub

Setiap kali Anda push ke GitHub:
```bash
git add .
git commit -m "Update fitur baru"
git push
```

Vercel akan **otomatis build dan deploy** dalam 2-3 menit! 🚀

### Preview Deployment

Setiap pull request akan dapat preview URL unik untuk testing.

### Rollback

Jika ada error, bisa rollback ke deployment sebelumnya:
- Dashboard → Deployments
- Pilih deployment yang berhasil
- Klik "Promote to Production"

---

## 🆘 BUTUH BANTUAN?

**Dokumentasi:**
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev

**Support:**
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: Buat di repo Anda

---

## ✨ SELAMAT!

Aplikasi **MotoRun Jogja** Anda siap di-upload ke Vercel!

**Tinggal pilih Metode 1 (GitHub) dan follow langkah-langkahnya!**

---

**Happy Deploying! 🏍️💨**

Dibuat dengan ❤️ untuk rental motor terbaik di Yogyakarta
