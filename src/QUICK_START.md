# ⚡ QUICK START - Deploy MotoRun Jogja ke Vercel

## 🎯 Panduan Super Cepat (5 Menit)

### ❗ PENTING: Ini adalah environment Figma Make!

Aplikasi ini dibuat di Figma Make dan **TIDAK BISA langsung di-upload ke Vercel** dari sini. Anda perlu setup project Vite React terlebih dahulu.

---

## 🚀 CARA TERCEPAT (Copy-Paste Ready!)

### Step 1: Buat Project Baru

```bash
# Buat project Vite + React + TypeScript
npm create vite@latest motorun-jogja -- --template react-ts
cd motorun-jogja
```

### Step 2: Install Dependencies

```bash
# Install semua dependencies sekaligus
npm install && \
npm install -D tailwindcss postcss autoprefixer && \
npx tailwindcss init -p && \
npm install lucide-react class-variance-authority clsx tailwind-merge && \
npm install @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-tabs
```

### Step 3: Download Code dari Figma Make

**Di Figma Make:**
1. Klik tombol **"Share"** atau **"Export"** 
2. Download ZIP
3. Extract file ZIP

**Copy file-file ini:**
```bash
# Copy struktur folder
src/
  ├── components/      # Copy semua dari Figma Make export
  ├── styles/          # Copy globals.css
  └── App.tsx          # Copy dari Figma Make
```

### Step 4: Konfigurasi Files (Copy-Paste!)

**Edit `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

**Edit `src/main.tsx`:**
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Edit `src/styles/globals.css` - Tambahkan di PALING ATAS:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... sisanya tetap ... */
```

### Step 5: Test Local

```bash
npm run dev
```

Buka `http://localhost:5173` - Harus jalan!

### Step 6: Fix Import Images (PENTING!)

**Cari semua `figma:asset` dan ganti dengan path relatif:**

❌ **SALAH:**
```typescript
import img from "figma:asset/abc123.png"
```

✅ **BENAR:**
```typescript
// Simpan gambar di public/images/
// Lalu import seperti ini:
const img = "/images/honda-beat.png"
```

**Atau gunakan component yang sudah ada:**
```typescript
import { MotorcycleImage } from "./components/MotorcycleImage"

<MotorcycleImage src="URL_GAMBAR" alt="Motor" />
```

### Step 7: Build Test

```bash
npm run build
```

Harus sukses tanpa error! Jika ada error, fix dulu sebelum deploy.

### Step 8: Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit - MotoRun Jogja"
git branch -M main

# Buat repo baru di GitHub, lalu:
git remote add origin https://github.com/USERNAME/motorun-jogja.git
git push -u origin main
```

### Step 9: Deploy ke Vercel (FINAL!)

**Via Website (TERMUDAH):**
1. Buka https://vercel.com
2. Login dengan GitHub
3. Klik **"New Project"**
4. Pilih repo "motorun-jogja"
5. Framework: **Vite** (auto-detect)
6. Klik **"Deploy"** 🚀

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## ✅ CHECKLIST

Sebelum deploy, pastikan:

- [ ] `npm run dev` jalan tanpa error
- [ ] `npm run build` sukses
- [ ] Semua import paths benar (no `figma:asset`)
- [ ] globals.css punya `@tailwind` directives
- [ ] Semua dependencies terinstall
- [ ] Code sudah di GitHub
- [ ] Browser test di `localhost:5173` OK

---

## 🔥 TIPS PRO

### 1. Hapus Warning npm audit
```bash
npm audit fix
# JANGAN gunakan --force!
```

### 2. Optimize Build Size
```bash
# Di vite.config.ts, tambahkan:
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom'],
      }
    }
  }
}
```

### 3. Add Environment Variables di Vercel
- Go to Project Settings
- Environment Variables
- Add: `VITE_API_URL`, etc

### 4. Custom Domain
- Vercel Dashboard → Domains
- Add your domain
- Update DNS records

---

## ❌ COMMON ERRORS & FIXES

### Error: "Cannot find module 'react'"
```bash
npm install react react-dom
```

### Error: "figma:asset not found"
Ganti semua import `figma:asset` dengan URL atau path ke `/public/images/`

### Error: Build failed
```bash
# Clear cache dan rebuild
rm -rf node_modules dist .cache
npm install
npm run build
```

### Error: Vercel deployment failed
- Cek build command: `npm run build`
- Cek output directory: `dist`
- Pastikan `package.json` ada
- Framework harus "Vite"

---

## 🎊 SELESAI!

**Live URL:** `https://motorun-jogja.vercel.app`

Aplikasi Anda sekarang sudah online! 🎉

---

## 📞 Butuh Bantuan?

Baca file lengkap:
- `DEPLOY_GUIDE.md` - Panduan lengkap dan detail
- `README.md` - Dokumentasi aplikasi

---

**Happy Deploying! 🚀**
