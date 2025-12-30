import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CategorySection } from "./components/CategorySection";
import { ActionButtons } from "./components/ActionButtons";
import { BottomNav } from "./components/BottomNav";
import { MotorcycleListView } from "./components/MotorcycleListView";
import { SearchResults } from "./components/SearchResults";
import { ProfilePage } from "./components/ProfilePage";
import { EmergencyHelp } from "./components/EmergencyHelp";
import { MyOrders } from "./components/MyOrders";
import { TutorialPanel } from "./components/TutorialPanel";
import { TourismRecommendations } from "./components/TourismRecommendations";
import { Login } from "./components/Login";

// Data motor dari semua kategori
const allMotorcycles = [
  // Motor Biasa
  {
    id: 1,
    name: "Honda Beat",
    price: 70000,
    image: "https://images.unsplash.com/photo-1603465833396-5ee350acca47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBtb3RvcmN5Y2xlJTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjcwOTMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Automatic", "Hemat BBM", "Nyaman"],
    category: "Motor Biasa",
  },
  {
    id: 2,
    name: "Vario 125",
    price: 85000,
    image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["125cc", "Stylish", "Irit"],
    category: "Motor Biasa",
  },
  {
    id: 3,
    name: "Scoopy",
    price: 80000,
    image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Retro Design", "Compact", "Ekonomis"],
    category: "Motor Biasa",
  },
  {
    id: 4,
    name: "Yamaha Mio",
    price: 75000,
    image: "https://images.unsplash.com/photo-1594332966028-62ec2fb8908e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjBubWF4JTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjI1MDMwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Sporty", "Ringan", "Lincah"],
    category: "Motor Biasa",
  },
  {
    id: 5,
    name: "Honda Genio",
    price: 90000,
    image: "https://images.unsplash.com/photo-1652698802618-ac6c0bdb11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGJlYXQlMjBzY29vdGVyfGVufDF8fHx8MTc2MjUwMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Modern", "Smart Key", "Premium"],
    category: "Motor Biasa",
  },
  // Motor Besar
  {
    id: 6,
    name: "Yamaha NMAX",
    price: 150000,
    image: "https://images.unsplash.com/photo-1594332966028-62ec2fb8908e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjBubWF4JTIwc2Nvb3RlcnxlbnwxfHx8fDE3NjI1MDMwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["ABS", "155cc", "Premium Seat"],
    category: "Motor Besar",
  },
  {
    id: 7,
    name: "Honda PCX",
    price: 160000,
    image: "https://images.unsplash.com/photo-1695950682652-86b73812a9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMHBjeCUyMHByZW1pdW18ZW58MXx8fHwxNzYyNTAzMDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Smart Key", "Luxury", "Spacious"],
    category: "Motor Besar",
  },
  {
    id: 8,
    name: "Honda ADV 160",
    price: 180000,
    image: "https://images.unsplash.com/photo-1666914220840-942adc2d3529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3RvcmN5Y2xlJTIwYWR2fGVufDF8fHx8MTc2MjUwMzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Adventure", "160cc", "All Terrain"],
    category: "Motor Besar",
  },
  {
    id: 9,
    name: "Yamaha XSR 155",
    price: 200000,
    image: "https://images.unsplash.com/photo-1561811598-8d43cf4b48f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNiJTIwY2FmZSUyMHJhY2VyfGVufDF8fHx8MTc2MjUwMzA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Retro Modern", "155cc", "Stylish"],
    category: "Motor Besar",
  },
  // MOGE
  {
    id: 10,
    name: "Harley-Davidson Street 750",
    price: 800000,
    image: "https://images.unsplash.com/photo-1676246848792-2f8eb33975b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJsZXklMjBkYXZpZHNvbiUyMG1vdG9yY3ljbGV8ZW58MXx8fHwxNzYyNDk4OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["750cc", "Cruiser", "Iconic Design"],
    category: "MOGE",
  },
  {
    id: 11,
    name: "Kawasaki Ninja ZX6R",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1736839659107-1befef3f3207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhc2FraSUyMG5pbmphJTIwc3BvcnR8ZW58MXx8fHwxNzYyNTAzMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["636cc", "Super Sport", "Race Ready"],
    category: "MOGE",
  },
  {
    id: 12,
    name: "Yamaha R6",
    price: 1100000,
    image: "https://images.unsplash.com/photo-1650134374338-18ee7ad06917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YW1haGElMjByNiUyMHJhY2luZ3xlbnwxfHx8fDE3NjI1MDMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["600cc", "Track Performance", "Aggressive"],
    category: "MOGE",
  },
  {
    id: 13,
    name: "Honda CB650R",
    price: 900000,
    image: "https://images.unsplash.com/photo-1561811598-8d43cf4b48f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNiJTIwY2FmZSUyMHJhY2VyfGVufDF8fHx8MTc2MjUwMzA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["650cc", "Neo Sports Café", "Powerful"],
    category: "MOGE",
  },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; phone: string } | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "list" | "search" | "profile" | "emergency" | "orders">("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTourism, setShowTourism] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("motorun_logged_in");
    const user = localStorage.getItem("motorun_user");
    if (loggedIn === "true" && user) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(user));
    }
  }, []);

  const handleLogin = (user: { name: string; email: string; phone: string }) => {
    setIsLoggedIn(true);
    setUserData(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("motorun_logged_in");
    localStorage.removeItem("motorun_user");
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentView("home");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView("list");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const handleNavigation = (tab: string) => {
    if (tab === "home") {
      setCurrentView("home");
      setSelectedCategory(null);
      setSearchQuery("");
    } else if (tab === "profile") {
      setCurrentView("profile");
    } else if (tab === "emergency") {
      setCurrentView("emergency");
    } else if (tab === "orders") {
      setCurrentView("orders");
    } else if (tab === "tourism") {
      setShowTourism(true);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("search");
  };

  const handleRentNow = () => {
    setSearchQuery("");
    setCurrentView("search");
  };

  const handleNotificationNavigate = (destination: string) => {
    if (destination === "orders") {
      setCurrentView("orders");
    } else if (destination === "search") {
      setSearchQuery("");
      setCurrentView("search");
    } else if (destination === "tourism") {
      setShowTourism(true);
    } else if (destination === "emergency") {
      setCurrentView("emergency");
    } else if (destination === "tutorial") {
      setShowTutorial(true);
    }
  };

  const filteredMotorcycles = searchQuery
    ? allMotorcycles.filter((motorcycle) =>
        motorcycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        motorcycle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        motorcycle.features.some((feature) =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : allMotorcycles;

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === "home" ? (
        <>
          <Header 
            onSearch={handleSearch}
            onNotificationNavigate={handleNotificationNavigate}
          />
          <div className="pb-24">
            <CategorySection onCategorySelect={handleCategorySelect} />
            <ActionButtons 
              onRentNow={handleRentNow}
              showTourismPanel={showTourism}
              onTourismOpen={() => setShowTourism(true)}
              onTourismClose={() => setShowTourism(false)}
            />
          </div>
          <BottomNav activeTab="home" onNavigate={handleNavigation} />
        </>
      ) : currentView === "list" ? (
        <>
          <MotorcycleListView 
            category={selectedCategory || "Motor Biasa"} 
            onBack={handleBackToHome}
          />
          <BottomNav activeTab="home" onNavigate={handleNavigation} />
        </>
      ) : currentView === "search" ? (
        <>
          <SearchResults
            searchQuery={searchQuery}
            motorcycles={filteredMotorcycles}
            onBack={handleBackToHome}
          />
          <BottomNav activeTab="home" onNavigate={handleNavigation} />
        </>
      ) : currentView === "profile" ? (
        <>
          <ProfilePage onClose={handleBackToHome} userData={userData} onLogout={handleLogout} />
          <BottomNav activeTab="profile" onNavigate={handleNavigation} />
        </>
      ) : currentView === "emergency" ? (
        <>
          <EmergencyHelp onClose={handleBackToHome} />
          <BottomNav activeTab="emergency" onNavigate={handleNavigation} />
        </>
      ) : currentView === "orders" ? (
        <>
          <MyOrders onClose={handleBackToHome} />
          <BottomNav activeTab="orders" onNavigate={handleNavigation} />
        </>
      ) : null}
      {showTourism && <TourismRecommendations onClose={() => setShowTourism(false)} />}
      {showTutorial && <TutorialPanel onClose={() => setShowTutorial(false)} />}
    </div>
  );
}