import { Shield, Zap, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Private",
      description: "All AI runs locally in your browser. Your documents never leave your device.",
      color: "text-blue-500",
      bgColor: "from-blue-50 to-blue-100",
      badge: "Browser-Only",
      badgeColor: "bg-blue-50 text-blue-700"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get answers about hidden fees, penalties, and confusing clauses — instantly. No servers.",
      color: "text-yellow-500",
      bgColor: "from-yellow-50 to-yellow-100",
      badge: "No Servers",
      badgeColor: "bg-yellow-50 text-yellow-700"
    },
    {
      icon: FileText,
      title: "Smart Analysis",
      description: "Red flags, summaries, and plain-language explanations powered by client-side RAG.",
      color: "text-green-500",
      bgColor: "from-green-50 to-green-100",
      badge: "Client-Side RAG",
      badgeColor: "bg-green-50 text-green-700"
    }
  ];

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all bg-white rounded-2xl group"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`w-14 h-14 mx-auto mb-5 bg-gradient-to-br ${benefit.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                    <h3 className="text-lg text-gray-900">{benefit.title}</h3>
                    <span className={`text-xs ${benefit.badgeColor} px-2 py-0.5 rounded-full`}>
                      {benefit.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
