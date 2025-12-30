import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { MotorcycleCard } from "./MotorcycleCard";

interface MotorcycleListViewProps {
  category: string;
  onBack: () => void;
}

const motorcycleData = {
  "Motor Biasa": {
    description: "Motor matic/bebek ringan, hemat BBM, cocok untuk mahasiswa dan pekerja.",
    target: "Ekonomi menengah ke bawah (Mahasiswa, Pekerja)",
    priceRange: "Rp 70.000 – 100.000",
    motorcycles: [
      {
        id: 1,
        name: "Honda Beat",
        price: 70000,
        image: "https://images.unsplash.com/photo-1603465833396-5ee350acca47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBtb3RvcmN5Y2xlJTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjcwOTMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        features: ["Automatic", "Hemat BBM", "Nyaman"],
      },
      {
        id: 2,
        name: "Vario 125",
        price: 85000,
        image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["125cc", "Stylish", "Irit"],
      },
      {
        id: 3,
        name: "Scoopy",
        price: 80000,
        image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Retro Design", "Compact", "Ekonomis"],
      },
      {
        id: 4,
        name: "Yamaha Mio",
        price: 75000,
        image: "https://images.unsplash.com/photo-1594332966028-62ec2fb8908e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjBubWF4JTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjI1MDMwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Sporty", "Ringan", "Lincah"],
      },
      {
        id: 5,
        name: "Honda Genio",
        price: 90000,
        image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Modern", "Smart Key", "Premium"],
      },
    ],
  },
  "Motor Besar": {
    description: "Motor besar dengan performa dan kenyamanan tinggi, cocok untuk wisatawan.",
    target: "Ekonomi menengah ke atas (Wisatawan, Freelancer)",
    priceRange: "Rp 150.000 – 250.000",
    motorcycles: [
      {
        id: 6,
        name: "Yamaha NMAX",
        price: 150000,
        image: "https://images.unsplash.com/photo-1594332966028-62ec2fb8908e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjBubWF4JTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjI1MDMwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["ABS", "155cc", "Premium Seat"],
      },
      {
        id: 7,
        name: "Honda PCX",
        price: 160000,
        image: "https://images.unsplash.com/photo-1695950682652-86b73812a9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMHBjeCUyMHByZW1pdW18ZW58MXx8fHwxNzYyNTAzMDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Smart Key", "Luxury", "Spacious"],
      },
      {
        id: 8,
        name: "Honda ADV 160",
        price: 180000,
        image: "https://images.unsplash.com/photo-1666914220840-942adc2d3529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3RvcmN5Y2xlJTIwYWR2fGVufDF8fHx8MTc2MjUwMzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Adventure", "160cc", "All Terrain"],
      },
      {
        id: 9,
        name: "Yamaha XSR 155",
        price: 200000,
        image: "https://images.unsplash.com/photo-1561811598-8d43cf4b48f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNiJTIwY2FmZSUyMHJhY2VyfGVufDF8fHx8MTc2MjUwMzA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Retro Modern", "155cc", "Stylish"],
      },
    ],
  },
  "MOGE": {
    description: "Motor sport/touring kelas premium untuk gaya hidup dan event komunitas.",
    target: "Ekonomi tinggi (Pebisnis, Kolektor Motor, Influencer)",
    priceRange: "Rp 600.000 – 1.200.000",
    motorcycles: [
      {
        id: 10,
        name: "Harley-Davidson Street 750",
        price: 800000,
        image: "https://images.unsplash.com/photo-1676246848792-2f8eb33975b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJsZXklMjBkYXZpZHNvbiUyMG1vdG9yY3ljbGV8ZW58MXx8fHwxNzYyNDk4OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["750cc", "Cruiser", "Iconic Design"],
      },
      {
        id: 11,
        name: "Kawasaki Ninja ZX6R",
        price: 1000000,
        image: "https://images.unsplash.com/photo-1736839659107-1befef3f3207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhc2FraSUyMG5pbmphJTIwc3BvcnR8ZW58MXx8fHwxNzYyNTAzMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["636cc", "Super Sport", "Race Ready"],
      },
      {
        id: 12,
        name: "Yamaha R6",
        price: 1100000,
        image: "https://images.unsplash.com/photo-1650134374338-18ee7ad06917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjByNiUyMHJhY2luZ3xlbnwxfHx8fDE3NjI1MDMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["600cc", "Track Performance", "Aggressive"],
      },
      {
        id: 13,
        name: "Honda CB650R",
        price: 900000,
        image: "https://images.unsplash.com/photo-1561811598-8d43cf4b48f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNiJTIwY2FmZSUyMHJhY2VyfGVufDF8fHx8MTc2MjUwMzA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["650cc", "Neo Sports Café", "Powerful"],
      },
    ],
  },
};

export function MotorcycleListView({ category, onBack }: MotorcycleListViewProps) {
  const data = motorcycleData[category as keyof typeof motorcycleData];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-md mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 mb-4 hover:opacity-80">
            <ArrowLeft className="w-6 h-6" />
            <span>Kembali</span>
          </button>
          <h1 className="text-3xl mb-2">{category}</h1>
          <p className="text-sm text-red-100 mb-1">{data.description}</p>
          <p className="text-sm text-red-200 mb-2">Target: {data.target}</p>
          <div className="text-xl text-yellow-300">{data.priceRange} /hari</div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 space-y-4">
        {data.motorcycles.map((motorcycle) => (
          <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
        ))}
      </div>
    </div>
  );
}