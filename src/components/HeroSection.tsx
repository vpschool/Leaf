import { Leaf, Shield, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Clean Navbar */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="tracking-tight text-gray-900 hidden sm:inline">Advocate-Leaf</span>
          </div>
          <Badge variant="secondary" className="px-3 py-1.5 bg-green-50 border border-green-200 text-green-700 gap-2 text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">100% Private-by-Design · No servers. No uploads.</span>
            <span className="sm:hidden">Private-by-Design</span>
          </Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-50/30 via-white to-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Clarity in the fine print. Confidence in your life.
          </p>

          {/* Privacy Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2 bg-white border border-green-200 text-green-700 gap-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">100% Private-by-Design · No servers. No uploads.</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight px-4">
            Understand Complex Documents Without Compromising Privacy
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Medical bills, leases, visa forms, and financial contracts — explained clearly using AI that runs entirely on your device.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-green-200 hover:shadow-xl transition-all"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Your First Document
            </Button>
            <p className="text-xs text-gray-500 max-w-sm px-4">
              Your file never leaves your browser. "Upload" means selecting a file locally.
            </p>
          </div>

          {/* Centerpiece Graphic */}
          <div className="relative mt-12 mb-8">
            <div className="relative inline-block">
              {/* Main leaf icon */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-300 animate-pulse">
                <Leaf className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
