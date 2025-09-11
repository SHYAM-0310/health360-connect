import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppointmentBooking from "@/components/AppointmentBooking";
import SymptomChecker from "@/components/SymptomChecker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  MapPin,
  Smartphone,
  Globe,
  Gamepad2,
  Heart,
  Shield
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Core Features Section */}
      <section id="appointments" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Core Features
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Revolutionizing Healthcare Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of healthcare with our AI-powered platform designed specifically for Indian healthcare needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Appointment Booking */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Smart Appointment Booking</h3>
                <p className="text-muted-foreground">
                  Book appointments with real-time wait estimates and QR code check-in
                </p>
              </div>
              <AppointmentBooking />
            </div>

            {/* Symptom Checker */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Symptom Analysis</h3>
                <p className="text-muted-foreground">
                  Get instant triage and priority assessment with voice support
                </p>
              </div>
              <SymptomChecker />
            </div>
          </div>
        </div>
      </section>

      {/* India-First Innovation */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-care-orange border-care-orange">
              🇮🇳 India-First Innovation
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Built for Indian Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Culturally aware features designed to address real challenges in Indian healthcare system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Integration */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-success" />
                </div>
                <CardTitle>WhatsApp Booking</CardTitle>
                <CardDescription>
                  Book appointments via WhatsApp for low-tech users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-success">
                  Available in 8 Languages
                </Badge>
              </CardContent>
            </Card>

            {/* Multi-lingual Support */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-innovation/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-innovation" />
                </div>
                <CardTitle>Regional Language Support</CardTitle>
                <CardDescription>
                  Hindi, Tamil, Telugu, Bengali and more with voice support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-innovation">
                  Text-to-Speech Enabled
                </Badge>
              </CardContent>
            </Card>

            {/* Cricket Gamification */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-care-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-care-orange" />
                </div>
                <CardTitle>Cricket Health Points</CardTitle>
                <CardDescription>
                  Gamified health tracking with cricket-themed rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-care-orange">
                  🏏 Cultural Connect
                </Badge>
              </CardContent>
            </Card>

            {/* Festival Reminders */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <CardTitle>Festival Health Alerts</CardTitle>
                <CardDescription>
                  Adaptive health reminders during festivals and pollution seasons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-warning">
                  Seasonal Awareness
                </Badge>
              </CardContent>
            </Card>

            {/* Community Heatmap */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle>Disease Heatmap</CardTitle>
                <CardDescription>
                  Real-time community health tracking and outbreak alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-destructive">
                  Live Monitoring
                </Badge>
              </CardContent>
            </Card>

            {/* Offline Support */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Offline-First Design</CardTitle>
                <CardDescription>
                  Works in low connectivity areas with sync capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-primary">
                  Rural Clinic Ready
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Hackathon Impact
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Real Results, Real Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Reduced Wait Times</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-care-orange mb-2">94%</div>
                <div className="text-muted-foreground">AI Accuracy</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">12min</div>
                <div className="text-muted-foreground">Average Wait</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-innovation mb-2">8</div>
                <div className="text-muted-foreground">Languages Supported</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Health360°</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Transforming Indian Healthcare • One Smart Appointment at a Time
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline">React + Vite</Badge>
            <Badge variant="outline">AI-Powered</Badge>
            <Badge variant="outline">India-First</Badge>
            <Badge variant="outline">Hackathon Ready</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;