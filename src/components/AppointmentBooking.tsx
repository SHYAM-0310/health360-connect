import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  QrCode,
  CheckCircle
} from "lucide-react";

const AppointmentBooking = () => {
  const { toast } = useToast();
  const [isBooking, setIsBooking] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    
    // Simulate API call
    setTimeout(() => {
      const id = "APT" + Math.random().toString(36).substr(2, 9).toUpperCase();
      setAppointmentId(id);
      setIsBooking(false);
      setShowConfirmation(true);
      
      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment ID is ${id}. Estimated wait time: 15 minutes.`,
      });
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-soft animate-fade-in">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <CardTitle className="text-success">Appointment Confirmed!</CardTitle>
          <CardDescription>Your slot has been reserved</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Appointment Details */}
          <div className="bg-gradient-card p-4 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Appointment ID</span>
              <Badge variant="secondary" className="font-mono">
                {appointmentId}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Estimated Wait</span>
              <Badge variant="outline" className="text-care-orange">
                15 minutes
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Date & Time</span>
              <span className="text-sm font-medium">Today, 2:30 PM</span>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-16 h-16 text-muted-foreground animate-pulse-soft" />
            </div>
            <p className="text-sm text-muted-foreground">
              Show this QR code at reception for quick check-in
            </p>
          </div>

          <Button 
            onClick={() => setShowConfirmation(false)}
            className="w-full"
            variant="outline"
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Book Smart Appointment</span>
        </CardTitle>
        <CardDescription>
          AI-powered scheduling with real-time wait estimates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleBooking} className="space-y-4">
          {/* Personal Details */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Full Name</span>
              </Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="phone" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </Label>
                <Input id="phone" placeholder="+91 98765 43210" required />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-3">
            <div>
              <Label className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Department</span>
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Medicine</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedic">Orthopedic</SelectItem>
                  <SelectItem value="pediatric">Pediatric</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </Label>
                <Input type="date" required />
              </div>
              <div>
                <Label className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time</span>
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning-1">9:00 AM (Wait: 5 min)</SelectItem>
                    <SelectItem value="morning-2">10:30 AM (Wait: 15 min)</SelectItem>
                    <SelectItem value="afternoon-1">2:30 PM (Wait: 10 min)</SelectItem>
                    <SelectItem value="afternoon-2">4:00 PM (Wait: 25 min)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Symptoms/Notes */}
          <div>
            <Label htmlFor="symptoms">Symptoms or Notes (Optional)</Label>
            <Textarea 
              id="symptoms" 
              placeholder="Describe your symptoms to help doctors prepare..."
              className="h-20"
            />
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isBooking}
          >
            {isBooking ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Booking Appointment...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentBooking;