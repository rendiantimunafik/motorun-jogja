# 🚀 PANDUAN DEPLOY MOTORUN JOGJA KE VERCEL

## Aplikasi MotoRun Jogja ini dibuat di Figma Make dan perlu disiapkan untuk deploy ke Vercel.

---

## ⚠️ PENTING: Cara Export dari Figma Make

1. **Klik tombol "Share" atau "Export"** di pojok kanan atas Figma Make
2. **Download semua file** sebagai ZIP
3. **Extract** file ZIP tersebut

---

## 📦 STRUKTUR PROJECT YANG DIBUTUHKAN

Setelah extract, susun file seperti ini:

```
motorun-jogja/
├── public/
│   └── imports/                    # Folder untuk assets/gambar
├── src/
│   ├── components/                 # Copy semua dari /components
│   │   ├── ui/
│   │   ├── figma/
│   │   ├── ActionButtons.tsx
│   │   ├── BookingFlow.tsx
│   │   ├── BookingForm.tsx
│   │   ├── BookingSummary.tsx
│   │   ├── BottomNav.tsx
│   │   ├── CategorySection.tsx
│   │   ├── EmergencyHelp.tsx
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── MotorcycleCard.tsx
│   │   ├── MotorcycleImage.tsx
│   │   ├── MotorcycleListView.tsx
│   │   ├── MyOrders.tsx
│   │   ├── NotificationPanel.tsx
│   │   ├── PaymentInstructions.tsx
│   │   ├── PaymentMethod.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── SearchResults.tsx
│   │   ├── TourismRecommendations.tsx
│   │   └── TutorialPanel.tsx
│   ├── styles/
│   │   └── globals.css            # Copy dari /styles
│   ├── App.tsx                    # Copy dari /App.tsx
│   └── main.tsx                   # File baru (lihat template di bawah)
├── index.html                     # File baru (lihat template di bawah)
├── package.json                   # File baru (lihat template di bawah)
├── vite.config.ts                 # File baru (lihat template di bawah)
├── tailwind.config.js             # File baru (lihat template di bawah)
├── tsconfig.json                  # File baru (lihat template di bawah)
└── postcss.config.js              # File baru (lihat template di bawah)
```

---

## 📝 FILE-FILE KONFIGURASI YANG DIPERLUKAN

### 1. `package.json`

```json
{
  "name": "motorun-jogja",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.263.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",
    "vite": "^5.3.1",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33"
  }
}
```

### 2. `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 3. `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
}
```

### 4. `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. `index.html`

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MotoRun Jogja - Sewa Motor di Yogyakarta</title>
    <meta name="description" content="Sewa motor di Yogyakarta dengan harga terjangkau. Motor Biasa, Motor Besar, dan MOGE tersedia." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 6. `src/main.tsx`

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

### 7. `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 8. `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

---

## 🔧 LANGKAH-LANGKAH INSTALASI

1. **Buat folder baru:**
   ```bash
   mkdir motorun-jogja
   cd motorun-jogja
   ```

2. **Copy semua file dari Figma Make export**
   - Copy folder `components/` ke `src/components/`
   - Copy folder `styles/` ke `src/styles/`
   - Copy `App.tsx` ke `src/App.tsx`
   - Copy folder `imports/` ke `public/imports/` (jika ada assets)

3. **Buat file-file konfigurasi** (gunakan template di atas)

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Edit `src/styles/globals.css`** - Tambahkan di paling atas:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Test local:**
   ```bash
   npm run dev
   ```

7. **Build untuk production:**
   ```bash
   npm run build
   ```

---

## 🌐 DEPLOY KE VERCEL

### Metode 1: Via GitHub (RECOMMENDED)

1. **Init Git & Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MotoRun Jogja"
   git branch -M main
   git remote add origin https://github.com/USERNAME/motorun-jogja.git
   git push -u origin main
   ```

2. **Deploy via Vercel:**
   - Buka https://vercel.com
   - Login dengan GitHub
   - Klik "New Project"
   - Import repository "motorun-jogja"
   - Framework Preset: **Vite**
   - Klik "Deploy"

### Metode 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## ✅ CHECKLIST SEBELUM DEPLOY

- [ ] Semua file components sudah dicopy
- [ ] File globals.css sudah ada @tailwind directives
- [ ] npm install berhasil tanpa error
- [ ] npm run dev berjalan normal
- [ ] npm run build berhasil
- [ ] Semua import path sudah benar
- [ ] Assets/gambar sudah ada di public/imports/

---

## 🔥 TIPS PENTING

1. **Hapus file figma:asset imports** - Ganti dengan path relatif ke public/imports/
2. **Cek semua import paths** - Pastikan tidak ada import yang error
3. **Test di local dulu** - Sebelum deploy, pastikan npm run build berhasil
4. **Environment Variables** - Jika ada API keys, set di Vercel dashboard

---

## 📞 TROUBLESHOOTING

**Error: Cannot find module**
- Pastikan semua dependencies sudah diinstall
- Cek import paths (gunakan relative paths)

**Error: figma:asset not found**
- Ganti semua import figma:asset dengan path ke public/imports/

**Build failed**
- Jalankan `npm run build` di local dulu
- Cek error message dan fix di local

---

## 🎉 SELESAI!

Aplikasi MotoRun Jogja Anda sekarang sudah live di Vercel!

URL: `https://motorun-jogja.vercel.app`

---

**Dibuat dengan ❤️ untuk rental motor terbaik di Yogyakarta**
