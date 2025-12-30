import { useState } from "react";
import { Eye, EyeOff, Bike } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";

interface LoginProps {
  onLogin: (user: { name: string; email: string; phone: string }) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulasi login/register sukses
    const user = {
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
      phone: formData.phone || "081234567890",
    };
    
    // Simpan data user ke localStorage
    localStorage.setItem("motorun_user", JSON.stringify(user));
    localStorage.setItem("motorun_logged_in", "true");
    
    onLogin(user);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <div className="p-8">
          {/* Logo & Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-900 rounded-full mb-4">
              <Bike className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-red-900 mb-2">MotoRun Jogja</h1>
            <p className="text-gray-600">
              {isLogin ? "Masuk ke akun Anda" : "Buat akun baru"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required={!isLogin}
                  className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email / No. HP</Label>
              <Input
                id="email"
                type="text"
                placeholder="email@example.com atau 081234567890"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="border-gray-300 focus:border-red-900 focus:ring-red-900"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="phone">No. WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="081234567890"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required={!isLogin}
                  className="border-gray-300 focus:border-red-900 focus:ring-red-900"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  className="border-gray-300 focus:border-red-900 focus:ring-red-900 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-red-900 hover:underline"
                >
                  Lupa password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-red-900 hover:bg-red-800 text-white"
            >
              {isLogin ? "Masuk" : "Daftar"}
            </Button>
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-900 hover:underline"
              >
                {isLogin ? "Daftar sekarang" : "Masuk"}
              </button>
            </p>
          </div>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800 text-center">
              <strong>Mode Demo:</strong> Gunakan email/password apapun untuk login
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
