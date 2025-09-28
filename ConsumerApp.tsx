import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  ArrowLeft, Bell, MapPin, Clock, User, CreditCard, 
  Calendar, Star, Package, Settings, Heart, Share2, Home,
  ShoppingBag, Plus, CheckCircle, Truck
} from "lucide-react";
import { SubscriptionManager } from "./SubscriptionManager";
import { DeliveryTracking } from "./DeliveryTracking";
import { MealPreferences } from "./MealPreferences";
import { OrderHistory } from "./OrderHistory";
import { LiveTrackingMap } from "./LiveTrackingMap";
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ConsumerAppProps {
  onBack: () => void;
}

export function ConsumerApp({ onBack }: ConsumerAppProps) {
  const [activeTab, setActiveTab] = useState("home");

  // Mock user data
  const userData = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    address: "HSR Layout, Bangalore",
    currentPlan: "Premium Monthly",
    nextDelivery: "12:30 PM",
    totalOrders: 67,
    memberSince: "Jan 2024",
    rating: 4.8,
    deliveryStatus: "preparing"
  };

  const todaysMenu = [
    {
      name: "Dal Tadka",
      type: "included",
      image: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkYWwlMjBjdXJyeSUyMGxlbnRpbHN8ZW58MXx8fHwxNzU4OTg3NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5
    },
    {
      name: "Jeera Rice",
      type: "included",
      image: "https://images.unsplash.com/photo-1735233024815-7986206a18a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYXNtYXRpJTIwcmljZSUyMGJvd2x8ZW58MXx8fHwxNzU4OTg3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.3
    },
    {
      name: "Mixed Sabzi",
      type: "included",
      image: "https://images.unsplash.com/photo-1595959524165-0d395008e55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYWJ6aSUyMHZlZ2V0YWJsZSUyMGN1cnJ5fGVufDF8fHx8MTc1ODk4NzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7
    },
    {
      name: "Fresh Roti",
      type: "included",
      image: "https://images.unsplash.com/photo-1601387434127-20979856e76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByb3RpJTIwY2hhcGF0aSUyMGJyZWFkfGVufDF8fHx8MTc1ODk4NzU3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8
    },
    {
      name: "Paneer Masala",
      type: "addon",
      price: "₹45",
      image: "https://images.unsplash.com/photo-1708782341026-f4877b52fee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYW5lZXIlMjBjdXJyeSUyMGNoZWVzZXxlbnwxfHx8fDE3NTg5ODc1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9
    },
    {
      name: "Masala Dosa",
      type: "addon",
      price: "₹35",
      image: "https://images.unsplash.com/photo-1721051651458-d7ac46ba1cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3NhJTIwc291dGglMjBpbmRpYW4lMjBjcmVwZXxlbnwxfHx8fDE3NTg5ODc1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6
    }
  ];

  const notifications = [
    {
      type: "delivery",
      message: "Your tiffin is being prepared by our kitchen team",
      time: "2 min ago",
      icon: Clock,
      color: "text-turmeric-yellow",
      bgColor: "bg-turmeric-yellow/10"
    },
    {
      type: "menu",
      message: "Tomorrow's special: Punjabi Chole with Kulcha",
      time: "1 hour ago",
      icon: Heart,
      color: "text-curry-green",
      bgColor: "bg-curry-green/10"
    },
    {
      type: "urgent",
      message: "Delivery delayed by 15 minutes due to traffic",
      time: "5 min ago",
      icon: MapPin,
      color: "text-masala-red",
      bgColor: "bg-masala-red/10"
    }
  ];

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "text-spice-orange";
      case "out-for-delivery": return "text-turmeric-yellow";
      case "delivered": return "text-curry-green";
      default: return "text-chai-brown";
    }
  };

  const getDeliveryStatusIcon = (status: string) => {
    switch (status) {
      case "preparing": return <Clock className="w-4 h-4" />;
      case "out-for-delivery": return <Truck className="w-4 h-4" />;
      case "delivered": return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-ivory-light max-w-md mx-auto merriweather">
      {/* Mobile Header */}
      <div className="bg-chai-brown px-4 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-cream-ivory hover:text-white hover:bg-chai-brown-light"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 spice-gradient rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="text-white font-medium merriweather">NourishNet</span>
          </div>
          <Button variant="ghost" size="sm" className="text-cream-ivory hover:bg-chai-brown-light">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 pb-24">
        {activeTab === "home" && (
          <div className="space-y-6">
            {/* Greeting */}
            <div className="text-center py-6 bg-white rounded-2xl shadow-lg border border-chai-brown/10">
              <h1 className="text-chai-brown text-xl font-semibold mb-2 merriweather">
                Hello {userData.name.split(' ')[0]}! 🙏
              </h1>
              <p className="text-chai-brown/70">
                <span className="text-turmeric-yellow font-medium">Your tiffin is on the way</span> 🍲
              </p>
            </div>

            {/* Live Tracking Map - Full Featured */}
            <div className="mb-6">
              <LiveTrackingMap />
            </div>

            {/* Today's Menu Preview Carousel */}
            <Card className="bg-white border-chai-brown/20 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-chai-brown font-semibold merriweather">Today's Menu</h3>
                <Button variant="ghost" size="sm" className="text-turmeric-yellow hover:bg-turmeric-yellow/10">
                  View All
                </Button>
              </div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {todaysMenu.map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-32 bg-white rounded-xl p-3 border border-chai-brown/10 text-center shadow-sm">
                    <div className="relative mb-3 overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-16 object-cover"
                      />
                      <div className="absolute top-1 right-1">
                        {item.type === "included" && (
                          <CheckCircle className="w-4 h-4 text-curry-green bg-white rounded-full" />
                        )}
                        {item.type === "addon" && (
                          <div className="w-5 h-5 bg-turmeric-yellow rounded-full flex items-center justify-center">
                            <Plus className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <h4 className="text-chai-brown text-xs font-medium mb-1">{item.name}</h4>
                    <div className="flex items-center justify-center space-x-1">
                      {item.type === "included" && (
                        <span className="text-curry-green text-xs">✓ Included</span>
                      )}
                      {item.type === "addon" && (
                        <span className="turmeric-button inline-block px-2 py-1 rounded-full text-xs font-bold">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Subscription Status */}
            <Card className="bg-white border-chai-brown/20 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-chai-brown font-semibold merriweather">Subscription Status</h3>
                <Badge className="bg-curry-green text-white">Active</Badge>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-chai-brown/70 text-sm">Current Plan</span>
                  <span className="text-chai-brown font-medium">{userData.currentPlan}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-chai-brown/70 text-sm">Next Billing</span>
                  <span className="text-chai-brown font-medium">Jan 15, 2024</span>
                </div>
              </div>
              <Button className="w-full turmeric-button">
                Pause/Resume
              </Button>
            </Card>

            {/* Notifications */}
            <Card className="bg-white border-chai-brown/20 shadow-lg p-6">
              <h3 className="text-chai-brown font-semibold merriweather mb-4">Recent Updates</h3>
              <div className="space-y-3">
                {notifications.map((notification, index) => {
                  const Icon = notification.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-chai-brown/10">
                      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${notification.bgColor}`}>
                        <Icon className={`w-4 h-4 ${notification.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-chai-brown text-sm leading-relaxed">{notification.message}</p>
                        <p className="text-chai-brown/50 text-xs mt-1">{notification.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "menu" && (
          <div className="space-y-4">
            <h2 className="text-chai-brown text-lg font-semibold merriweather">Menu & Preferences</h2>
            <MealPreferences />
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-4">
            <h2 className="text-chai-brown text-lg font-semibold merriweather">Live Delivery Tracking</h2>
            <LiveTrackingMap />
          </div>
        )}

        {activeTab === "subscription" && (
          <div className="space-y-4">
            <h2 className="text-chai-brown text-lg font-semibold merriweather">Subscription</h2>
            <SubscriptionManager userData={userData} />
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-4">
            <h2 className="text-chai-brown text-lg font-semibold merriweather">Profile</h2>
            <Card className="bg-white border-chai-brown/20 shadow-lg p-6 text-center">
              <div className="w-20 h-20 spice-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-chai-brown font-semibold merriweather mb-2">{userData.name}</h3>
              <p className="text-chai-brown/70 text-sm mb-1">{userData.currentPlan}</p>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Star className="w-4 h-4 text-saffron-gold" />
                <span className="text-chai-brown/70 text-sm">{userData.rating} Rating</span>
              </div>
              <Button className="turmeric-button w-full">
                Edit Profile
              </Button>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white border-chai-brown/20 shadow-lg p-6">
              <h4 className="text-chai-brown font-semibold merriweather mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <User className="w-4 h-4 text-chai-brown/50" />
                  <span className="text-chai-brown text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <User className="w-4 h-4 text-chai-brown/50" />
                  <span className="text-chai-brown text-sm">{userData.phone}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <MapPin className="w-4 h-4 text-chai-brown/50" />
                  <span className="text-chai-brown text-sm">{userData.address}</span>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-chai-brown/20 px-4 py-3 shadow-2xl">
        <div className="flex justify-around items-center">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "menu", icon: ShoppingBag, label: "Menu" },
            { id: "orders", icon: MapPin, label: "Track" },
            { id: "subscription", icon: CreditCard, label: "Plan" },
            { id: "profile", icon: User, label: "Profile" }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all ${
                  isActive 
                    ? "text-turmeric-yellow bg-turmeric-yellow/10 shadow-md" 
                    : "text-chai-brown/70 hover:text-chai-brown hover:bg-chai-brown/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}