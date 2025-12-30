# Cara Mengganti Data Motor

## Lokasi File
File data motor berada di: `/App.tsx`

## Cara Edit Data Motor

### 1. Buka file `/App.tsx`
### 2. Cari bagian `allMotorcycles` (sekitar baris 16-124)

### 3. Struktur Data Motor

```javascript
{
  id: 1,                    // ID unik motor (harus berbeda tiap motor)
  name: "Honda Beat",       // Nama motor
  price: 70000,            // Harga per hari (dalam Rupiah, tanpa titik)
  image: "URL_GAMBAR",     // Link gambar motor (pakai URL lengkap)
  features: ["Automatic", "Hemat BBM", "Nyaman"], // Fitur motor (array)
  category: "Motor Biasa", // Kategori: "Motor Biasa", "Motor Besar", atau "MOGE"
}
```

### 4. Contoh Mengganti Gambar

**SEBELUM:**
```javascript
{
  id: 1,
  name: "Honda Beat",
  price: 70000,
  image: "figma:asset/db1df77d31e3c2c140772b5843ad83e7bfbdee83.png",
  features: ["Automatic", "Hemat BBM", "Nyaman"],
  category: "Motor Biasa",
}
```

**SESUDAH:**
```javascript
{
  id: 1,
  name: "Honda Beat",
  price: 70000,
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  features: ["Automatic", "Hemat BBM", "Nyaman"],
  category: "Motor Biasa",
}
```

### 5. Contoh Mengganti Harga

```javascript
{
  id: 1,
  name: "Honda Beat",
  price: 85000,  // Ubah dari 70000 ke 85000
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  features: ["Automatic", "Hemat BBM", "Nyaman"],
  category: "Motor Biasa",
}
```

### 6. Contoh Mengganti Nama & Fitur

```javascript
{
  id: 1,
  name: "Honda Beat Street",  // Ganti nama
  price: 85000,
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  features: ["Automatic", "Sporty", "LED Light"], // Ganti fitur
  category: "Motor Biasa",
}
```

### 7. Contoh Menambah Motor Baru

Tambahkan di akhir array `allMotorcycles`:

```javascript
{
  id: 14,  // ID harus unik, tidak boleh sama dengan motor lain
  name: "Suzuki Nex II",
  price: 65000,
  image: "https://images.unsplash.com/photo-1234567890?w=800",
  features: ["Irit", "Ringan", "Lincah"],
  category: "Motor Biasa",
},
```

### 8. Sumber Gambar yang Disarankan

- **Unsplash**: https://unsplash.com/s/photos/motorcycle
- **Pexels**: https://www.pexels.com/search/motorcycle/
- Gunakan URL lengkap seperti: `https://images.unsplash.com/photo-xxx?w=800`

### 9. Tips Penting

✅ **DO (Lakukan):**
- Gunakan URL gambar lengkap (http:// atau https://)
- Pastikan ID motor unik
- Gunakan harga tanpa titik atau koma (contoh: 70000, bukan 70.000)
- Simpan kategori sesuai: "Motor Biasa", "Motor Besar", atau "MOGE"

❌ **DON'T (Jangan):**
- Jangan gunakan `figma:asset` untuk gambar baru
- Jangan gunakan ID yang sama untuk motor berbeda
- Jangan lupa tanda koma di akhir setiap object motor
- Jangan lupa kurung tutup `]` di akhir array

### 10. Contoh Lengkap Edit Motor

```javascript
const allMotorcycles = [
  // Motor Biasa
  {
    id: 1,
    name: "Honda Beat 2024",
    price: 75000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    features: ["Automatic", "Hemat BBM", "Modern"],
    category: "Motor Biasa",
  },
  {
    id: 2,
    name: "Yamaha Mio M3",
    price: 70000,
    image: "https://images.unsplash.com/photo-1594332966028-62ec2fb8908e?w=800",
    features: ["Sporty", "Ringan", "Stylish"],
    category: "Motor Biasa",
  },
  // ... motor lainnya
];
```

## Troubleshooting

**Gambar tidak muncul?**
- Pastikan URL gambar valid dan bisa diakses
- Cek apakah URL dimulai dengan http:// atau https://
- Coba buka URL gambar di browser baru

**Harga tidak berubah?**
- Pastikan tidak ada koma atau titik di angka harga
- Contoh benar: `price: 70000`
- Contoh salah: `price: 70.000` atau `price: "70000"`

**Motor tidak muncul di list?**
- Cek apakah ada error di console browser
- Pastikan tidak ada syntax error (missing comma, bracket, dll)
- Pastikan category sesuai dengan yang tersedia
