import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Brain,
  FileText,
  Clock,
  Users,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-care min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center space-x-2 text-sm animate-pulse-soft">
              <Zap className="w-4 h-4" />
              <span>Live Hackathon Demo</span>
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Health
                <span className="text-transparent bg-gradient-hero bg-clip-text">360°</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Revolutionary HealthTech platform reducing waiting times, 
                simplifying reports, and transforming patient experience 
                with AI-powered care.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Smart Booking</h3>
                  <p className="text-sm text-muted-foreground">Zero wait times</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-innovation/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-innovation" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Triage</h3>
                  <p className="text-sm text-muted-foreground">Smart priority</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-care-orange/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-care-orange" />
                </div>
                <div>
                  <h3 className="font-semibold">Report AI</h3>
                  <p className="text-sm text-muted-foreground">Plain language</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Multi-lingual</h3>
                  <p className="text-sm text-muted-foreground">India-first design</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 animate-float">
                <Calendar className="w-5 h-5 mr-2" />
                Book Smart Appointment
              </Button>
              <Button variant="care" size="lg" className="flex-1">
                <Brain className="w-5 h-5 mr-2" />
                Try AI Symptom Check
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-muted">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Faster Booking</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-care-orange">12min</div>
                <div className="text-sm text-muted-foreground">Avg Wait Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern healthcare technology platform"
                className="w-full h-auto rounded-2xl shadow-warm animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-soft animate-pulse-soft">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-success" />
                  <div>
                    <div className="text-sm font-semibold">Wait Time</div>
                    <div className="text-xs text-muted-foreground">5 minutes</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-soft animate-pulse-soft">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-care-orange" />
                  <div>
                    <div className="text-sm font-semibold">AI Accuracy</div>
                    <div className="text-xs text-muted-foreground">94% confident</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;