import { X, Code, Image, DollarSign, Tag, FileText, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface TutorialPanelProps {
  onClose: () => void;
}

export function TutorialPanel({ onClose }: TutorialPanelProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-0 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl min-h-full flex flex-col animate-in slide-in-from-top duration-300">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-6 flex-shrink-0 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl mb-1">Tutorial Edit Data Motor</h2>
              <p className="text-sm text-red-100">
                Panduan lengkap mengganti foto, plat, harga & data motor
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pb-20">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview">Penjelasan</TabsTrigger>
              <TabsTrigger value="steps">Langkah-langkah</TabsTrigger>
              <TabsTrigger value="examples">Contoh Kode</TabsTrigger>
            </TabsList>

            {/* Tab Overview */}
            <TabsContent value="overview" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">Lokasi File Data Motor</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Semua data motor disimpan di 2 lokasi utama:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">/App.tsx</code> - Array <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">allMotorcycles</code> (untuk pencarian & sewa sekarang)</li>
                      <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">/components/MotorcycleListView.tsx</code> - Object <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">motorcycleData</code> (untuk list per kategori)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg mb-3">Data yang Bisa Diubah</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Tag className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Nama Motor</p>
                      <p className="text-xs text-gray-500">Honda Beat, NMAX, dll</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Harga Sewa</p>
                      <p className="text-xs text-gray-500">Per hari (Rupiah)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Image className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Foto Motor</p>
                      <p className="text-xs text-gray-500">URL gambar Unsplash</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Fitur-fitur</p>
                      <p className="text-xs text-gray-500">ABS, Smart Key, dll</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Penting:</strong> Ubah data di KEDUA file agar data motor konsisten di semua halaman aplikasi.
                </p>
              </div>
            </TabsContent>

            {/* Tab Steps */}
            <TabsContent value="steps" className="space-y-4">
              <div className="space-y-4">
                {/* Step 1 */}
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">Buka File App.tsx</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Scroll ke baris 14-121 untuk menemukan array <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">allMotorcycles</code>
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs overflow-x-auto">
                        <pre className="text-gray-800">
{`const allMotorcycles = [
  {
    id: 1,
    name: "Honda Beat",      // ← Ubah nama motor
    price: 70000,            // ← Ubah harga (tanpa titik/koma)
    image: "...",            // ← Ubah URL foto
    features: [...],         // ← Ubah fitur-fitur
    category: "Motor Biasa", // ← Kategori motor
  },
  // ... motor lainnya
];`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Step 2 */}
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">Edit Data Motor</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Ubah properti yang ingin diganti. Contoh mengganti Honda Beat:
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs overflow-x-auto">
                        <pre className="text-gray-800">
{`{
  id: 1,
  name: "Honda Beat Street 2024",  // Nama baru
  price: 75000,                    // Harga baru
  image: "URL_FOTO_BARU",          // Foto baru
  features: [
    "Automatic",
    "Hemat BBM", 
    "Nyaman",
    "CBS"                          // Fitur tambahan
  ],
  category: "Motor Biasa",
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Step 3 */}
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">Buka File MotorcycleListView.tsx</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Scroll ke baris 10-123 untuk menemukan object <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">motorcycleData</code>
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs overflow-x-auto">
                        <pre className="text-gray-800">
{`const motorcycleData = {
  "Motor Biasa": {
    motorcycles: [
      {
        id: 1,
        name: "Honda Beat Street 2024",  // Sama seperti App.tsx
        price: 75000,
        image: "URL_FOTO_BARU",
        features: ["Automatic", "Hemat BBM", "Nyaman", "CBS"],
      },
      // ... motor lainnya
    ],
  },
};`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Step 4 */}
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">Cara Ganti Foto Motor</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Gunakan URL gambar dari Unsplash atau sumber lain:
                      </p>
                      <ol className="text-sm text-gray-600 space-y-2 mb-3">
                        <li>1. Buka <a href="https://unsplash.com" target="_blank" className="text-red-600 hover:underline">unsplash.com</a></li>
                        <li>2. Cari foto motor yang diinginkan (contoh: "honda beat")</li>
                        <li>3. Klik kanan foto → Copy image address</li>
                        <li>4. Paste URL ke properti <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">image</code></li>
                      </ol>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-xs text-blue-800">
                          💡 Tips: Gunakan foto dengan resolusi minimal 800x600px untuk hasil terbaik
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Step 5 */}
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">Simpan & Cek Hasilnya</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Setelah mengedit kedua file, aplikasi akan otomatis refresh dan menampilkan data motor yang baru.
                      </p>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-xs text-green-800">
                          ✅ Pastikan data di App.tsx dan MotorcycleListView.tsx sama persis agar konsisten!
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Tab Examples */}
            <TabsContent value="examples" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Tambah Motor Baru</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(
                      `{
  id: 14,
  name: "Honda Vario 160",
  price: 95000,
  image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb",
  features: ["160cc", "Smart Key", "Full Digital"],
  category: "Motor Biasa",
}`,
                      1
                    )}
                  >
                    {copiedStep === 1 ? "✓ Tersalin" : "Copy"}
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
                  <pre className="text-gray-800">
{`// Tambahkan di akhir array allMotorcycles (App.tsx)
// dan di motorcycleData["Motor Biasa"].motorcycles (MotorcycleListView.tsx)

{
  id: 14,                          // ID unik (increment dari terakhir)
  name: "Honda Vario 160",         // Nama motor baru
  price: 95000,                    // Harga per hari
  image: "https://images.unsplash.com/photo-...",
  features: [                      // Fitur-fitur motor
    "160cc",
    "Smart Key",
    "Full Digital"
  ],
  category: "Motor Biasa",         // Kategori: Motor Biasa / Motor Besar / MOGE
}`}
                  </pre>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Ubah Harga Semua Motor Biasa +10%</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(
                      `// Honda Beat: 70000 → 77000
// Vario 125: 85000 → 93500
// Scoopy: 80000 → 88000
// Yamaha Mio: 75000 → 82500
// Honda Genio: 90000 → 99000`,
                      2
                    )}
                  >
                    {copiedStep === 2 ? "✓ Tersalin" : "Copy"}
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
                  <pre className="text-gray-800">
{`// Ubah di kedua file (App.tsx & MotorcycleListView.tsx)

// Motor Biasa - Harga Lama → Harga Baru (+10%)
Honda Beat:    70000 → 77000
Vario 125:     85000 → 93500  
Scoopy:        80000 → 88000
Yamaha Mio:    75000 → 82500
Honda Genio:   90000 → 99000`}
                  </pre>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Tambah Fitur ke Motor Existing</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(
                      `features: ["ABS", "155cc", "Premium Seat", "USB Charger", "Keyless"]`,
                      3
                    )}
                  >
                    {copiedStep === 3 ? "✓ Tersalin" : "Copy"}
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
                  <pre className="text-gray-800">
{`// Contoh: Tambah fitur USB Charger & Keyless ke Yamaha NMAX

// SEBELUM:
features: ["ABS", "155cc", "Premium Seat"]

// SESUDAH:
features: [
  "ABS", 
  "155cc", 
  "Premium Seat",
  "USB Charger",    // Fitur baru
  "Keyless"         // Fitur baru
]`}
                  </pre>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">Ganti Kategori Motor</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(
                      `// Pindah dari Motor Biasa ke Motor Besar
category: "Motor Besar"`,
                      4
                    )}
                  >
                    {copiedStep === 4 ? "✓ Tersalin" : "Copy"}
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
                  <pre className="text-gray-800">
{`// Contoh: Pindahkan Honda Genio dari Motor Biasa ke Motor Besar

1. Di App.tsx → Ubah category:
   category: "Motor Besar"  // dari "Motor Biasa"

2. Di MotorcycleListView.tsx → Pindahkan object motor:
   - Hapus dari motorcycleData["Motor Biasa"].motorcycles
   - Tambahkan ke motorcycleData["Motor Besar"].motorcycles`}
                  </pre>
                </div>
              </Card>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800 mb-2">
                  <strong>🚨 Catatan Penting:</strong>
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• ID motor harus unik (tidak boleh sama)</li>
                  <li>• Harga dalam format number (tanpa titik, koma, atau "Rp")</li>
                  <li>• Features dalam format array string</li>
                  <li>• Category harus exact match: "Motor Biasa", "Motor Besar", atau "MOGE"</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
          <Button onClick={onClose} className="w-full bg-red-900 hover:bg-red-800">
            Tutup Tutorial
          </Button>
        </div>
      </div>
    </div>
  );
}
