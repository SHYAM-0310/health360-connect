import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu,
  X,
  Calendar,
  FileText,
  Users,
  Activity,
  Globe
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "हिं" : "EN");
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Health360°</h1>
              <p className="text-xs text-muted-foreground">Smart Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#appointments" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
            <a href="#reports" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <FileText className="w-4 h-4" />
              <span>Smart Reports</span>
            </a>
            <a href="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Users className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
          </nav>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </Button>
            <Badge variant="secondary" className="animate-pulse-soft">
              Live Demo
            </Badge>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#appointments" className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
              <a href="#reports" className="flex items-center space-x-2 text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Smart Reports</span>
              </a>
              <a href="/dashboard" className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Dashboard</span>
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                </Button>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;