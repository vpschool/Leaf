import { useState } from "react";
import { 
  Upload, 
  Send, 
  Leaf, 
  FileText, 
  AlertTriangle, 
  Sparkles, 
  Volume2, 
  BarChart3,
  Download,
  ArrowLeft,
  Lightbulb,
  Languages,
  FileSearch,
  Shield,
  Info,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface DocumentAnalyzerProps {
  onBack: () => void;
}

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
}

export function DocumentAnalyzer({ onBack }: DocumentAnalyzerProps) {
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello! I've analyzed your document locally. I found 3 potential red flags and summarized the key terms. You can ask me anything about this document."
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Based on my local analysis, here's what I found in your document..."
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const quickActions = [
    { label: "Summarize", icon: FileText, color: "text-green-600", bg: "hover:bg-green-50" },
    { label: "Find Red Flags", icon: AlertTriangle, color: "text-red-600", bg: "hover:bg-red-50" },
    { label: "Explain Simply", icon: Lightbulb, color: "text-yellow-600", bg: "hover:bg-yellow-50" },
    { label: "Translate", icon: Languages, color: "text-blue-600", bg: "hover:bg-blue-50" }
  ];

  const recentDocs = [
    "lease_agreement_2024.pdf",
    "medical_bill_nov.pdf",
    "visa_application.pdf"
  ];

  const redFlags = [
    "Automatic renewal clause without notification (Page 3)",
    "Non-refundable deposit mentioned (Page 5)",
    "Unusual penalty fees for early termination (Page 7)"
  ];

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-white border-r border-gray-200 flex flex-col
        transform transition-transform lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="tracking-tight text-gray-900">Advocate-Leaf</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <Button onClick={onBack} variant="outline" size="sm" className="w-full gap-2 text-gray-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="p-5 border-b border-gray-100">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 gap-2 shadow-sm">
                  <Upload className="w-4 h-4" />
                  Upload PDF
                  <Info className="w-3.5 h-3.5 ml-auto opacity-70" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="max-w-xs">
                <p className="text-sm">Your file never leaves your browser. "Upload" means selecting a file from your device — nothing is sent to a server.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex-1 p-5 overflow-auto">
          <h3 className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Recent Documents</h3>
          <div className="space-y-2">
            {recentDocs.map((doc, index) => (
              <button
                key={index}
                className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                  index === 0 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate text-xs sm:text-sm">{doc}</span>
                </div>
                {index === 0 && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Analyzed locally</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-gradient-to-br from-green-50/50 to-blue-50/50">
          <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
            <Shield className="w-4 h-4" />
            <span>Local Mode Enabled</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            All AI processing happens in your browser. Your documents never leave your device.
          </p>
        </div>
      </div>

      {/* Center Panel - Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-3 sm:p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden flex-shrink-0"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="min-w-0">
              <h2 className="text-gray-900 truncate text-sm sm:text-base">lease_agreement_2024.pdf</h2>
              <p className="text-xs sm:text-sm text-gray-500">15 pages · Analyzed locally 2 min ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-50 text-green-700 border border-green-200 gap-2 hidden sm:flex">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs">Local-Only AI</span>
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden flex-shrink-0"
              onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
            >
              <Info className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Document Preview */}
        <div className="bg-white p-4 sm:p-8 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 border-2 border-dashed border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <FileSearch className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-sm sm:text-base">PDF Preview</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">lease_agreement_2024.pdf</p>
                <p className="text-xs text-gray-400 mt-1">Processed with Transformers.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4 sm:p-8 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-lg rounded-2xl p-3 sm:p-4 ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-900 shadow-sm"
                  }`}
                >
                  {msg.type === "ai" && (
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <Shield className="w-3 h-3" />
                      <span>Generated locally</span>
                    </div>
                  )}
                  <p className="leading-relaxed text-sm sm:text-base">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-100 p-3 sm:p-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`gap-2 ${action.color} ${action.bg} border-gray-200 text-xs sm:text-sm`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{action.label}</span>
                    <span className="sm:hidden">{action.label.split(' ')[0]}</span>
                  </Button>
                );
              })}
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything about this document…"
                className="resize-none rounded-xl border-gray-200 focus:border-green-300 text-sm"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl h-10 w-10 shadow-sm flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center hidden sm:block">
              All responses generated locally using client-side RAG
            </p>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Insights */}
      <div className={`
        fixed xl:static inset-y-0 right-0 z-40
        w-full sm:w-96 bg-white border-l border-gray-200 flex flex-col
        transform transition-transform xl:transform-none
        ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'}
      `}>
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-gray-900">Insights</h2>
            <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
              Local Analysis
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setRightSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4 sm:p-5 space-y-4 sm:space-y-5">
          {/* Red Flags */}
          <Card className="border-red-200 bg-red-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-4 h-4" />
                Red Flags Detected
                <Badge variant="secondary" className="ml-auto text-xs bg-red-100 text-red-700">
                  3 Found
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {redFlags.map((flag, index) => (
                  <div key={index} className="text-xs text-red-700 leading-relaxed bg-white rounded-lg p-3 border border-red-100">
                    • {flag}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Terms */}
          <Card className="shadow-sm border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-600" />
                Key Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Monthly Rent:</span>
                <span className="text-gray-900">$2,400</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Security Deposit:</span>
                <span className="text-gray-900">$4,800</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Lease Term:</span>
                <span className="text-gray-900">12 months</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pet Deposit:</span>
                <span className="text-gray-900">$500</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Optional Enhancements</p>
            
            {/* Gemini Enhancement */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full gap-2 justify-start hover:border-purple-300 hover:bg-purple-50 transition-all text-left">
                    <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-900 truncate">Enhance with Gemini</div>
                      <div className="text-xs text-gray-500">Google Cloud · Optional</div>
                    </div>
                    <Info className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-sm">Uses Google Cloud to rewrite or simplify your AI-generated explanation. Your original document is never uploaded — only the AI summary text.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ElevenLabs Audio */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full gap-2 justify-start hover:border-blue-300 hover:bg-blue-50 transition-all text-left">
                    <Volume2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-900 truncate">Voice Summary</div>
                      <div className="text-xs text-gray-500">ElevenLabs · Optional</div>
                    </div>
                    <Info className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-sm">Generate an audio summary using ElevenLabs. Only the cleaned summary text is sent — never your original document.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Snowflake Insights */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="border-cyan-200 bg-cyan-50/50 cursor-pointer hover:border-cyan-300 hover:bg-cyan-50 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2 mb-3">
                        <BarChart3 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-cyan-900 flex items-center gap-2">
                            <span>Anonymous Trends</span>
                            <Info className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                          </div>
                          <p className="text-xs text-cyan-700 mt-1 leading-relaxed">
                            See how your document compares to others
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full text-xs border-cyan-300 text-cyan-700 hover:bg-cyan-100">
                        View Insights
                      </Button>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-sm">Uses Snowflake to show anonymous trends. No document text is sent — only metadata like document type, word count, and detected categories.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Separator />

          {/* Download Report */}
          <Button className="w-full gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-sm">
            <Download className="w-4 h-4" />
            Download Report (PDF)
          </Button>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Report generated locally in your browser
          </p>
        </ScrollArea>
      </div>
    </div>
  );
}
