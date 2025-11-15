import { Sparkles, Volume2, BarChart3 } from "lucide-react";

export function PartnerBadges() {
  const partners = [
    {
      name: "Google Cloud",
      subtitle: "Gemini API",
      description: "Optional enhancements",
      icon: Sparkles,
      gradient: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      name: "ElevenLabs",
      subtitle: "Voice AI",
      description: "Audio summary",
      icon: Volume2,
      gradient: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      name: "Snowflake",
      subtitle: "Analytics",
      description: "Anonymous trends",
      icon: BarChart3,
      gradient: "from-cyan-100 to-cyan-200",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-green-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Powered By</p>
          <p className="text-xs text-gray-400">Optional cloud enhancements available</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${partner.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${partner.iconColor}`} />
                  </div>
                  <h3 className="text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{partner.subtitle}</p>
                  <p className="text-xs text-gray-500">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Core AI processing runs 100% locally. Optional enhancements use cloud services but never send your original documents — only processed summaries or metadata.
          </p>
        </div>
      </div>
    </div>
  );
}
