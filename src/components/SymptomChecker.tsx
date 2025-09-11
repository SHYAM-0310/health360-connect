import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Search,
  Brain,
  AlertTriangle,
  CheckCircle,
  Clock,
  Mic,
  Volume2
} from "lucide-react";

const SymptomChecker = () => {
  const { toast } = useToast();
  const [symptoms, setSymptoms] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        priority: symptoms.toLowerCase().includes("chest pain") || symptoms.toLowerCase().includes("difficulty breathing") ? "high" : 
                 symptoms.toLowerCase().includes("fever") || symptoms.toLowerCase().includes("headache") ? "medium" : "low",
        condition: symptoms.toLowerCase().includes("fever") ? "Possible Viral Infection" : 
                  symptoms.toLowerCase().includes("headache") ? "Tension Headache" : 
                  "General Consultation Recommended",
        waitTime: symptoms.toLowerCase().includes("chest pain") ? "Immediate" : "15-20 minutes",
        department: symptoms.toLowerCase().includes("chest pain") ? "Emergency" : 
                   symptoms.toLowerCase().includes("headache") ? "General Medicine" : "General Medicine",
        confidence: Math.floor(Math.random() * 20) + 80
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete",
        description: `Priority: ${mockAnalysis.priority.toUpperCase()} | Confidence: ${mockAnalysis.confidence}%`,
      });
    }, 3000);
  };

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setSymptoms(prev => prev + (prev ? " " : "") + "I have been experiencing headache and mild fever since yesterday");
      setIsListening(false);
      toast({
        title: "Voice Input Captured",
        description: "Your symptoms have been recorded",
      });
    }, 2000);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-innovation" />
          <span>AI Symptom Pre-Check</span>
        </CardTitle>
        <CardDescription>
          Describe your symptoms for intelligent triage and priority assessment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Symptom Input */}
        <div className="space-y-2">
          <Label htmlFor="symptoms" className="flex items-center justify-between">
            <span>Describe your symptoms</span>
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={startListening}
                disabled={isListening}
                className="text-xs"
              >
                <Mic className={`w-4 h-4 mr-1 ${isListening ? 'text-care-orange animate-pulse' : ''}`} />
                {isListening ? 'Listening...' : 'Voice Input'}
              </Button>
              {analysis && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => speakText(`Your condition appears to be ${analysis.condition} with ${analysis.priority} priority`)}
                  className="text-xs"
                >
                  <Volume2 className="w-4 h-4 mr-1" />
                  Listen
                </Button>
              )}
            </div>
          </Label>
          <div className="relative">
            <Input
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="E.g., I have been experiencing headache, fever, and body aches since yesterday..."
              className="h-20 text-area resize-none pr-12"
              style={{ minHeight: '80px', paddingTop: '12px' }}
            />
            <Button
              onClick={handleAnalyze}
              disabled={!symptoms.trim() || isAnalyzing}
              className="absolute bottom-2 right-2"
              size="sm"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-1" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-4 animate-fade-in">
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>AI Analysis Results</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Priority & Condition */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Priority Level:</span>
                    <Badge 
                      variant={analysis.priority === 'high' ? 'destructive' : 
                              analysis.priority === 'medium' ? 'secondary' : 'outline'}
                      className="flex items-center space-x-1"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      <span className="uppercase">{analysis.priority}</span>
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Possible Condition:</span>
                    <span className="font-medium">{analysis.condition}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">AI Confidence:</span>
                    <Badge variant="outline">{analysis.confidence}%</Badge>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Recommended Dept:</span>
                    <Badge variant="secondary">{analysis.department}</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Est. Wait Time:</span>
                    <Badge variant="outline" className="text-care-orange">
                      {analysis.waitTime}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button variant="hero" className="flex-1">
                  <Search className="w-4 h-4 mr-2" />
                  Book Appointment Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Get Second Opinion
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Symptom Tags */}
        <div className="border-t pt-4">
          <Label className="text-sm text-muted-foreground mb-3 block">
            Quick select common symptoms:
          </Label>
          <div className="flex flex-wrap gap-2">
            {['Fever', 'Headache', 'Cough', 'Body Ache', 'Chest Pain', 'Difficulty Breathing'].map((symptom) => (
              <Button
                key={symptom}
                variant="outline"
                size="sm"
                onClick={() => setSymptoms(prev => prev + (prev ? ', ' : '') + symptom.toLowerCase())}
                className="text-xs"
              >
                {symptom}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SymptomChecker;