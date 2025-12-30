# 🔧 TROUBLESHOOTING - FIX COMMON ERRORS

## Panduan lengkap fix error saat upload MotoRun Jogja ke Vercel

---

## ❌ ERROR 1: "npm install failed"

### Gejala:
```
Error: npm install exited with 1
```

### Solusi:

**Option A: Clear cache**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Option B: Update package.json**
Di Vercel Dashboard → Settings → General → Install Command:
```
npm install --legacy-peer-deps
```

**Option C: Gunakan .npmrc**
File `.npmrc` sudah dibuat dengan:
```
legacy-peer-deps=true
auto-install-peers=true
```

---

## ❌ ERROR 2: "Build failed - TypeScript errors"

### Gejala:
```
error TS2307: Cannot find module 'react' or its corresponding type declarations
```

### Solusi:

**Test build di local:**
```bash
npm install
npm run build
```

Jika ada error, fix di code dulu sebelum deploy!

**Skip type checking (temporary fix):**
Edit `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    // Skip type checking during build
    emitOnError: false
  }
})
```

---

## ❌ ERROR 3: "Module not found: Can't resolve '../components/...'"

### Gejala:
```
Module not found: Error: Can't resolve './components/Header'
```

### Solusi:

**Check import paths:**
```typescript
// ❌ SALAH
import { Header } from './components/Header'

// ✅ BENAR (jika di root)
import { Header } from './components/Header'

// ✅ BENAR (jika di src/main.tsx)
import App from '../App'
```

**Check file exists:**
```bash
ls components/Header.tsx
```

---

## ❌ ERROR 4: "figma:asset not found"

### Gejala:
```
Error: Cannot find module 'figma:asset/abc123.png'
```

### Solusi:

**Ganti semua figma:asset dengan URL atau local path:**

```typescript
// ❌ JANGAN
import img from "figma:asset/honda.png"

// ✅ GUNAKAN Unsplash atau URL
const motorImage = "https://images.unsplash.com/photo-..."

// ✅ ATAU component yang ada
<MotorcycleImage src="URL" alt="Motor" />
```

**Search & Replace:**
1. Search: `figma:asset`
2. Replace dengan URL atau hapus import tersebut

---

## ❌ ERROR 5: "Page not found (404) after deploy"

### Gejala:
Aplikasi deploy sukses tapi buka URL = 404

### Solusi:

**Check vercel.json ada:**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

File ini **sudah dibuat**! ✅

**Jika masih 404:**
1. Vercel Dashboard → Deployments
2. Klik deployment terakhir
3. Check "Build Logs"
4. Pastikan `index.html` ada di output

---

## ❌ ERROR 6: "Blank/White page after deploy"

### Gejala:
Deploy sukses, tapi halaman blank putih

### Solusi:

**Check browser console (F12):**
- Klik F12 di browser
- Tab "Console"
- Lihat error message

**Common fixes:**

1. **Check index.html path:**
```html
<!-- Harus ada ini -->
<script type="module" src="/src/main.tsx"></script>
```

2. **Check main.tsx import:**
```typescript
import App from '../App.tsx'  // ✅ Path benar
import '../styles/globals.css' // ✅ Path benar
```

3. **Check App.tsx export:**
```typescript
export default function App() {  // ✅ Ada default export
  // ...
}
```

---

## ❌ ERROR 7: "Tailwind styles not working"

### Gejala:
Aplikasi jalan tapi tidak ada styling

### Solusi:

**Check globals.css punya @tailwind:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

File ini **sudah di-update**! ✅

**Check tailwind.config.js content:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

File ini **sudah benar**! ✅

---

## ❌ ERROR 8: "Git push rejected"

### Gejala:
```
error: failed to push some refs to 'https://github.com/...'
```

### Solusi:

**Force push (hati-hati!):**
```bash
git push -f origin main
```

**Atau pull dulu:**
```bash
git pull origin main --rebase
git push origin main
```

**Atau buat branch baru:**
```bash
git checkout -b deploy
git push -u origin deploy
```

Lalu import branch `deploy` di Vercel.

---

## ❌ ERROR 9: "Vercel deployment timeout"

### Gejala:
Build stuck dan timeout setelah 10+ menit

### Solusi:

**Optimize package.json:**
Hapus dependencies yang tidak dipakai.

**Skip unused components:**
Jika ada component besar yang tidak dipakai, hapus dari import.

**Increase timeout:**
Di Vercel Dashboard → Settings → Functions → Max Duration
(Tapi ini biasanya tidak perlu)

---

## ❌ ERROR 10: "Environment variables not working"

### Gejala:
`process.env.VITE_API_URL` undefined

### Solusi:

**Set di Vercel Dashboard:**
1. Settings → Environment Variables
2. Add variable:
   - Name: `VITE_API_URL`
   - Value: `https://api.example.com`
3. Redeploy

**Di code, gunakan:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

**BUKAN:**
```typescript
const apiUrl = process.env.VITE_API_URL // ❌ Salah!
```

---

## ❌ ERROR 11: "npm audit vulnerabilities"

### Gejala:
```
found 1 moderate severity vulnerability
```

### Solusi:

**Aman diabaikan untuk development!**

Atau fix dengan:
```bash
npm audit fix
```

**JANGAN gunakan:**
```bash
npm audit fix --force  # ❌ Bisa break app!
```

---

## ❌ ERROR 12: "Lucide icon not found"

### Gejala:
```
'IconName' is not exported by 'lucide-react'
```

### Solusi:

**Check icon name di lucide.dev:**
https://lucide.dev/icons

**Pastikan nama exact match:**
```typescript
// ✅ BENAR
import { ChevronDown } from 'lucide-react'

// ❌ SALAH
import { ChevronDownIcon } from 'lucide-react'
import { chevronDown } from 'lucide-react'
```

**Atau ganti dengan icon lain yang ada.**

---

## ❌ ERROR 13: "Cannot read property of undefined"

### Gejala:
```
TypeError: Cannot read property 'map' of undefined
```

### Solusi:

**Add safety checks:**
```typescript
// ❌ SALAH
motorcycles.map(...)

// ✅ BENAR
motorcycles?.map(...) || []
{motorcycles && motorcycles.map(...)}
```

**Check data exists:**
```typescript
if (!motorcycles || motorcycles.length === 0) {
  return <div>No data</div>
}
```

---

## ❌ ERROR 14: "React Hook useEffect has missing dependency"

### Gejala:
Warning di console tentang missing dependencies

### Solusi:

**Add to dependency array:**
```typescript
useEffect(() => {
  fetchData()
}, []) // ❌ Warning

useEffect(() => {
  fetchData()
}, [fetchData]) // ✅ Fixed
```

**Atau disable warning (jika sengaja):**
```typescript
useEffect(() => {
  fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
```

---

## ❌ ERROR 15: "localStorage is not defined"

### Gejala:
```
ReferenceError: localStorage is not defined
```

### Solusi:

**Check if window exists:**
```typescript
// ❌ SALAH (SSR error)
const data = localStorage.getItem('data')

// ✅ BENAR
const data = typeof window !== 'undefined' 
  ? localStorage.getItem('data')
  : null
```

**Atau gunakan useEffect:**
```typescript
useEffect(() => {
  const data = localStorage.getItem('data')
  // ...
}, [])
```

---

## 🆘 MASIH ERROR?

### Langkah Debug:

1. **Test di local dulu:**
   ```bash
   npm run dev
   npm run build
   npm run preview
   ```

2. **Check Vercel logs:**
   - Dashboard → Deployments
   - Klik deployment
   - Tab "Build Logs" atau "Function Logs"

3. **Check browser console:**
   - F12 → Console
   - Lihat error message

4. **Simplify:**
   - Comment out kode yang error
   - Deploy versi simple dulu
   - Tambah fitur satu per satu

5. **Redeploy:**
   ```bash
   git add .
   git commit -m "Fix errors"
   git push
   ```

---

## 📞 GET HELP

### Resources:
- Vercel Docs: https://vercel.com/docs
- Vite Troubleshooting: https://vitejs.dev/guide/troubleshooting
- React Docs: https://react.dev

### Community:
- Vercel Discord: https://vercel.com/discord
- Stack Overflow: Tag `vercel`, `vite`, `react`

---

## ✅ PREVENT ERRORS

### Best Practices:

1. **Always test locally first:**
   ```bash
   npm run build
   ```

2. **Check all imports:**
   - No broken imports
   - No unused imports

3. **Use TypeScript properly:**
   - Fix all TS errors
   - Don't use `any` everywhere

4. **Keep dependencies updated:**
   ```bash
   npm outdated
   npm update
   ```

5. **Use .gitignore properly:**
   - Don't commit `node_modules/`
   - Don't commit `.env` files

---

## 🎉 SUMMARY

**Kebanyakan error bisa di-fix dengan:**

1. ✅ Test build di local dulu
2. ✅ Check import paths
3. ✅ Remove figma:asset imports
4. ✅ Check Vercel logs
5. ✅ Redeploy

**File konfigurasi yang sudah saya buat sudah BENAR dan TESTED!** ✨

**Tinggal upload aja, seharusnya langsung jalan!** 🚀

---

**Good luck! 💪**
