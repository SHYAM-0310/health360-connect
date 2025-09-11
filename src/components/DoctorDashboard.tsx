import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  Activity,
  Calendar,
  FileText,
  TrendingUp,
  User,
  Phone
} from "lucide-react";

const DoctorDashboard = () => {
  // Mock data for demo
  const patients = [
    {
      id: "APT001",
      name: "Rajesh Kumar",
      age: 45,
      symptoms: "Chest pain, difficulty breathing",
      priority: "high" as const,
      waitTime: "Next",
      department: "Cardiology",
      aiAnalysis: "Possible cardiac event - requires immediate attention"
    },
    {
      id: "APT002", 
      name: "Priya Singh",
      age: 28,
      symptoms: "Fever, headache, body aches",
      priority: "medium" as const,
      waitTime: "15 min",
      department: "General Medicine",
      aiAnalysis: "Viral infection symptoms - routine consultation"
    },
    {
      id: "APT003",
      name: "Amit Sharma",
      age: 35,
      symptoms: "Regular checkup",
      priority: "low" as const,
      waitTime: "30 min",
      department: "General Medicine", 
      aiAnalysis: "Routine health checkup - no urgent symptoms"
    }
  ];

  const stats = {
    todayPatients: 24,
    avgWaitTime: 12,
    emergencies: 3,
    satisfaction: 94
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Doctor Dashboard</h2>
          <p className="text-muted-foreground">Live patient queue with AI triage insights</p>
        </div>
        <Badge variant="secondary" className="animate-pulse-soft">
          Live Demo Mode
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">{stats.todayPatients}</div>
                <div className="text-sm text-muted-foreground">Today's Patients</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-care-orange" />
              <div>
                <div className="text-2xl font-bold">{stats.avgWaitTime}min</div>
                <div className="text-sm text-muted-foreground">Avg Wait Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <div>
                <div className="text-2xl font-bold">{stats.emergencies}</div>
                <div className="text-sm text-muted-foreground">High Priority</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <div>
                <div className="text-2xl font-bold">{stats.satisfaction}%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Queue */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>Live Patient Queue</span>
          </CardTitle>
          <CardDescription>
            AI-prioritized patients with pre-analysis and symptom summary
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patients.map((patient, index) => (
              <div 
                key={patient.id}
                className={`p-4 rounded-lg border-l-4 ${
                  patient.priority === 'high' ? 'border-l-destructive bg-destructive-light' :
                  patient.priority === 'medium' ? 'border-l-warning bg-warning-light' :
                  'border-l-success bg-success-light'
                } transition-all duration-300 hover:shadow-soft`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    {/* Patient Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{patient.name}, {patient.age}</h4>
                        <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                      </div>
                      <Badge 
                        variant={
                          patient.priority === 'high' ? 'destructive' :
                          patient.priority === 'medium' ? 'secondary' : 'outline'
                        }
                        className="flex items-center space-x-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        <span className="uppercase">{patient.priority}</span>
                      </Badge>
                    </div>

                    {/* Symptoms & AI Analysis */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-1">Reported Symptoms</h5>
                        <p className="text-sm">{patient.symptoms}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-muted-foreground mb-1">AI Pre-Analysis</h5>
                        <p className="text-sm italic text-innovation">{patient.aiAnalysis}</p>
                      </div>
                    </div>

                    {/* Department & Wait Time */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{patient.department}</Badge>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{patient.waitTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button variant="default" size="sm">
                      <User className="w-4 h-4 mr-1" />
                      Call Patient
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-1" />
                      View History
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="shadow-soft hover:shadow-warm transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <Calendar className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Schedule Management</h4>
              <p className="text-sm text-muted-foreground">Adjust time slots & availability</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-warm transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <FileText className="w-8 h-8 text-care-orange mx-auto" />
              <h4 className="font-semibold">Report Generator</h4>
              <p className="text-sm text-muted-foreground">Create simplified patient reports</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-warm transition-all cursor-pointer">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <TrendingUp className="w-8 h-8 text-success mx-auto" />
              <h4 className="font-semibold">Analytics Dashboard</h4>
              <p className="text-sm text-muted-foreground">Patient flow & performance metrics</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;