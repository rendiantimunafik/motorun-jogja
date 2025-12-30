# 🏍️ MotoRun Jogja - Aplikasi Sewa Motor Yogyakarta

Aplikasi rental motor modern dengan sistem booking 4 tahap, pembayaran multi-channel, dan fitur bantuan darurat.

![MotoRun Jogja](https://img.shields.io/badge/MotoRun-Jogja-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

---

## 🎯 Fitur Utama

### ✅ Sistem Lengkap
- **Login/Register** dengan validasi
- **3 Kategori Motor**: Motor Biasa, Motor Besar, MOGE 600cc+
- **Pencarian Motor** dengan filter
- **Sistem Booking 4 Tahap**:
  1. Data Penyewa + Upload KTP
  2. Pilih Metode Pembayaran
  3. Review Ringkasan Booking
  4. Instruksi Pembayaran + Upload Bukti
  
### 💰 Pembayaran Multi-Channel
- Transfer Bank (BCA, BNI, Mandiri, BRI)
- E-Wallet (GoPay, OVO, DANA, ShopeePay)
- QRIS
- Kartu Kredit/Debit

### 🚨 Fitur Bantuan
- **Bantuan Darurat**: Daftar bengkel & tambal ban terdekat
- **Hotline 24/7**: Kontak darurat selalu aktif
- **Navigasi**: Link ke Google Maps

### 📱 Fitur Lainnya
- **Pesanan Saya**: Tracking pesanan (Aktif, Pending, Selesai)
- **Profil User**: Kelola data pribadi
- **Notifikasi**: Panel notifikasi interaktif
- **Wisata Jogja**: Rekomendasi tempat wisata (Alam, Sejarah, Kuliner)
- **Tutorial**: Panduan lengkap penggunaan aplikasi

---

## 🛠️ Tech Stack

- **Frontend**: React 18.3 + TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Build Tool**: Vite 5.3
- **Deployment**: Vercel

---

## 📦 Instalasi

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Clone & Install

```bash
# Clone repository
git clone https://github.com/USERNAME/motorun-jogja.git
cd motorun-jogja

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser di `http://localhost:5173`

---

## 🚀 Deployment ke Vercel

### Metode 1: Via GitHub (Recommended)

1. **Push ke GitHub**:
```bash
git add .
git commit -m "Ready to deploy"
git push origin main
```

2. **Deploy di Vercel**:
- Buka [vercel.com](https://vercel.com)
- Login dengan GitHub
- Klik "New Project"
- Import repository
- Framework: **Vite** (auto-detected)
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

## 📁 Struktur Project

```
motorun-jogja/
├── public/
│   └── imports/           # Assets & images
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── figma/        # Figma imported components
│   │   ├── ActionButtons.tsx
│   │   ├── BookingFlow.tsx
│   │   ├── BottomNav.tsx
│   │   ├── EmergencyHelp.tsx
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── MyOrders.tsx
│   │   ├── ProfilePage.tsx
│   │   └── ... (25+ components)
│   ├── styles/
│   │   └── globals.css   # Global styles + Tailwind
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vercel.json           # Vercel configuration
```

---

## 🎨 Design System

### Colors
- **Primary**: Red Maroon (#7f1d1d / red-900)
- **Secondary**: Red 800 (#991b1b / red-800)
- **Accent**: Yellow, Blue, Green untuk status

### Typography
- Custom font sizing via globals.css
- Responsive typography

### Components
- Mobile-first design
- Card-based layout
- Bottom navigation untuk mobile
- Gradient headers
- Interactive modals

---

## 💡 Cara Menggunakan

### 1. Login/Register
- Buka aplikasi
- Isi form login atau register
- Data tersimpan di localStorage

### 2. Cari Motor
- Gunakan search bar di header
- Atau pilih kategori: Motor Biasa, Motor Besar, MOGE
- Klik motor untuk melihat detail

### 3. Booking Motor
- Klik tombol **"Booking"** di card motor
- **Step 1**: Isi data penyewa + upload KTP
- **Step 2**: Pilih metode pembayaran
- **Step 3**: Review semua data
- **Step 4**: Lihat instruksi pembayaran + upload bukti

### 4. Sistem Pembayaran
- **DP**: 50% dari total harga
- **Deposit**: Rp 500.000 (dikembalikan)
- **Sisa**: Dibayar saat ambil motor

### 5. Tracking Pesanan
- Klik tab **"Pesanan"** di bottom nav
- Lihat status: Aktif, Pending, atau Selesai
- Klik pesanan untuk detail lengkap

---

## 🔧 Konfigurasi

### Environment Variables
Tidak ada environment variables yang diperlukan untuk versi dasar. Jika ingin integrasi API:

```env
VITE_API_URL=https://api.motorun.com
VITE_MAPS_API_KEY=your_google_maps_key
```

### Build Configuration
File `vite.config.ts` sudah dikonfigurasi optimal untuk production.

---

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

### npm install error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
npm run build
# Cek error message dan fix
```

### Vercel deployment error
- Pastikan `vercel.json` ada
- Framework harus "Vite"
- Build command: `npm run build`
- Output directory: `dist`

---

## 📄 License

MIT License - feel free to use for your projects

---

## 👨‍💻 Developer

Dibuat dengan ❤️ menggunakan Figma Make + React + TypeScript

---

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: support@motorun.com
- WhatsApp: +62 812-3456-7890

---

## 🎉 Credits

- **Icons**: [Lucide Icons](https://lucide.dev)
- **UI Components**: [Radix UI](https://radix-ui.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Images**: [Unsplash](https://unsplash.com)

---

**Happy Riding! 🏍️💨**
