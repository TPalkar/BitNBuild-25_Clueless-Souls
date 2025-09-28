import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  MapPin, Truck, Clock, CheckCircle, Phone, Navigation, 
  Star, User, Package, Route
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function DeliveryTracking() {
  const [trackingStatus, setTrackingStatus] = useState("out-for-delivery");

  const currentDelivery = {
    orderId: "ORD-001",
    menu: "North Indian Thali",
    estimatedTime: "12:30 PM",
    currentTime: "12:25 PM",
    driver: {
      name: "Ramesh Kumar",
      phone: "+91 98765 43210",
      rating: 4.8,
      vehicle: "KA 01 AB 1234"
    },
    status: "out-for-delivery",
    timeline: [
      { step: "Order Confirmed", time: "11:45 AM", completed: true },
      { step: "Preparing Your Meal", time: "12:00 PM", completed: true },
      { step: "Out for Delivery", time: "12:15 PM", completed: true, current: true },
      { step: "Delivered", time: "12:30 PM", completed: false }
    ]
  };

  const deliverySteps = [
    { 
      icon: CheckCircle, 
      title: "Order Confirmed", 
      description: "Your order has been confirmed and payment processed",
      time: "11:45 AM",
      completed: true 
    },
    { 
      icon: Package, 
      title: "Preparing Your Meal", 
      description: "Our kitchen is preparing your fresh meal",
      time: "12:00 PM",
      completed: true 
    },
    { 
      icon: Truck, 
      title: "Out for Delivery", 
      description: "Your meal is on the way with our delivery partner",
      time: "12:15 PM",
      completed: true,
      current: true 
    },
    { 
      icon: MapPin, 
      title: "Delivered", 
      description: "Your meal has been delivered. Enjoy!",
      time: "12:30 PM",
      completed: false 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "bg-orange-600";
      case "out-for-delivery": return "bg-blue-600";
      case "delivered": return "bg-green-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-cream-ivory-light paisley-pattern">
      <div className="space-y-6 p-4">
        {/* Live Tracking Header */}
        <Card className="indian-card relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-repeat dabba-pattern"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-chai-brown merriweather font-bold text-2xl mb-2">आपका खाना आ रहा है!</h3>
              <p className="text-chai-brown/80 text-lg">Your delicious meal is on the way</p>
            </div>
            
            {/* Rangoli Divider */}
            <div className="rangoli-divider mb-6 mx-auto w-32"></div>
            
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-chai-brown font-bold text-lg">{currentDelivery.menu}</p>
                <p className="text-chai-brown/70">Order #{currentDelivery.orderId}</p>
              </div>
              <Badge className="bg-turmeric-yellow text-white font-semibold px-4 py-2 rounded-xl">
                <Truck className="w-4 h-4 mr-2" />
                पहुंचने वाला है
              </Badge>
            </div>

            <div className="bg-gradient-to-r from-chai-brown to-chai-brown-light rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-turmeric-yellow" />
                  <span className="font-medium">पहुंचने का समय</span>
                </div>
                <span className="font-bold text-xl text-turmeric-yellow">{currentDelivery.estimatedTime}</span>
              </div>
              <div className="text-center">
                <span className="text-turmeric-yellow font-bold text-lg">केवल 5 मिनट की दूरी पर</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Live Map Visualization */}
        <Card className="indian-card relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-chai-brown merriweather font-bold text-xl">लाइव ट्रैकिंग मैप</h4>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-turmeric-yellow rounded-full animate-pulse"></div>
              <span className="text-chai-brown font-medium">Live</span>
            </div>
          </div>
          
          <div className="bg-cream-ivory rounded-2xl border-2 border-turmeric-yellow/30 overflow-hidden">
            {/* Map Header */}
            <div className="p-4 border-b-2 border-turmeric-yellow/20 bg-white/80">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-turmeric-yellow rounded-full animate-pulse"></div>
                  <span className="text-chai-brown font-medium">डिलीवरी पार्टनर रास्ते में है</span>
                </div>
                <div className="bg-turmeric-yellow text-white px-3 py-1 rounded-xl font-bold">
                  ETA: 5 मिनट
                </div>
              </div>
            </div>

            {/* Indian City Map Background */}
            <div className="h-80 relative">
              {/* Map Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542382257-80dedb725088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwbWFwJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTg5OTk5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian city aerial view"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              
              {/* Route Path Overlay */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 320">
                {/* Turmeric yellow route line with Indian motif */}
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F2A900" />
                    <stop offset="50%" stopColor="#FFBA33" />
                    <stop offset="100%" stopColor="#F2A900" />
                  </linearGradient>
                </defs>
                
                {/* Main route path */}
                <path
                  d="M 80 160 Q 200 120 300 160 Q 380 180 420 160"
                  stroke="url(#routeGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="12,8"
                  className="animate-pulse"
                />
                
                {/* Kitchen Location (Tiffin symbol) */}
                <circle cx="80" cy="160" r="12" fill="#27AE60" stroke="#FFFFFF" strokeWidth="3" />
                <rect x="74" y="154" width="12" height="12" rx="2" fill="#FFFFFF" />
                <text x="80" y="140" textAnchor="middle" className="fill-chai-brown text-sm font-bold">
                  रसोई
                </text>
                
                {/* Current Scooter Location */}
                <g>
                  <circle cx="300" cy="160" r="15" fill="#F2A900" className="animate-pulse">
                    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="300" y="167" textAnchor="middle" className="fill-white text-xs font-bold">🛵</text>
                  <text x="300" y="140" textAnchor="middle" className="fill-chai-brown text-sm font-bold">
                    स्कूटर
                  </text>
                </g>
                
                {/* Your Location (Home symbol) */}
                <circle cx="420" cy="160" r="12" fill="#B33C12" stroke="#FFFFFF" strokeWidth="3" />
                <text x="420" y="167" textAnchor="middle" className="fill-white text-xs font-bold">🏠</text>
                <text x="420" y="140" textAnchor="middle" className="fill-chai-brown text-sm font-bold">
                  आप
                </text>
              </svg>

              {/* Driver Info Card with Indian styling */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border-2 border-turmeric-yellow/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-turmeric-yellow rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🛵</span>
                  </div>
                  <div>
                    <p className="text-chai-brown font-bold">{currentDelivery.driver.name}</p>
                    <p className="text-chai-brown/70 text-sm">0.8 किमी दूर</p>
                  </div>
                </div>
              </div>

              {/* ETA Card */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-masala-red to-masala-red-light text-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold">5 मिनट</span>
                </div>
                <p className="text-xs opacity-90">पहुंचने में</p>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-turmeric-yellow/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-curry-green rounded-full"></div>
                  <span className="text-chai-brown font-medium text-sm">85% यात्रा पूर्ण</span>
                </div>
              </div>
            </div>

            {/* Map Actions with Indian styling */}
            <div className="p-4 border-t-2 border-turmeric-yellow/20 bg-white/80">
              <div className="flex space-x-3">
                <Button className="turmeric-button flex-1">
                  <Navigation className="w-4 h-4 mr-2" />
                  मैप में खोलें
                </Button>
                <Button className="bg-white border-2 border-chai-brown text-chai-brown hover:bg-chai-brown hover:text-white transition-all duration-300 rounded-xl">
                  <Phone className="w-4 h-4 mr-2" />
                  कॉल करें
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Delivery Partner Info with Indian styling */}
        <Card className="indian-card dabba-pattern">
          <h4 className="text-chai-brown merriweather font-bold text-xl mb-4">आपका डिलीवरी पार्टनर</h4>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-turmeric-yellow to-saffron-gold rounded-full flex items-center justify-center border-3 border-white shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-chai-brown font-bold text-lg">{currentDelivery.driver.name}</p>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-saffron-gold fill-current" />
                  <span className="text-chai-brown font-medium">{currentDelivery.driver.rating}</span>
                </div>
                <span className="text-chai-brown/70">• {currentDelivery.driver.vehicle}</span>
              </div>
            </div>
            <Button className="chai-button">
              <Phone className="w-4 h-4 mr-2" />
              कॉल
            </Button>
          </div>
        </Card>

        {/* Delivery Timeline with Indian styling */}
        <Card className="indian-card">
          <h4 className="text-chai-brown merriweather font-bold text-xl mb-6">डिलीवरी की प्रगति</h4>
          <div className="space-y-6">
            {deliverySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-3 border-white shadow-lg ${
                    step.completed 
                      ? 'bg-curry-green' 
                      : step.current 
                        ? 'bg-turmeric-yellow animate-pulse' 
                        : 'bg-chai-brown/40'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`font-bold text-lg ${
                          step.completed || step.current 
                            ? 'text-chai-brown' 
                            : 'text-chai-brown/60'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-chai-brown/80 mt-1">{step.description}</p>
                      </div>
                      <div className={`text-right ${
                        step.completed || step.current 
                          ? 'text-chai-brown' 
                          : 'text-chai-brown/60'
                      }`}>
                        <span className="font-medium">{step.time}</span>
                        {step.current && (
                          <div className="w-3 h-3 bg-turmeric-yellow rounded-full mt-1 ml-auto animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Quick Actions with Indian styling */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-white border-2 border-masala-red text-masala-red hover:bg-masala-red hover:text-white transition-all duration-300 rounded-xl py-3">
            <Phone className="w-4 h-4 mr-2" />
            सहायता कॉल
          </Button>
          <Button className="bg-white border-2 border-chai-brown text-chai-brown hover:bg-chai-brown hover:text-white transition-all duration-300 rounded-xl py-3">
            <MapPin className="w-4 h-4 mr-2" />
            पता अपडेट
          </Button>
        </div>

        {/* Delivery Instructions with Indian styling */}
        <Card className="indian-card dabba-pattern">
          <h4 className="text-chai-brown merriweather font-bold text-xl mb-3">डिलीवरी निर्देश</h4>
          <div className="bg-cream-ivory/50 rounded-xl p-4 mb-4">
            <p className="text-chai-brown/80 leading-relaxed">
              कृपया दरवाजे की घंटी बजाएं और यदि कोई जवाब नहीं मिले तो दरवाजे पर छोड़ दें। किसी भी समस्या के लिए {currentDelivery.driver.phone} पर संपर्क करें।
            </p>
          </div>
          <Button className="bg-white border-2 border-turmeric-yellow text-turmeric-yellow hover:bg-turmeric-yellow hover:text-white transition-all duration-300 rounded-xl">
            निर्देश संपादित करें
          </Button>
        </Card>
      </div>
    </div>
  );
}