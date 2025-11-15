import { FileText, DollarSign, Plane, Briefcase } from "lucide-react";
import { Badge } from "./ui/badge";

export function SupportedDocuments() {
  const documentTypes = [
    { name: "Lease Agreements", icon: FileText, color: "text-green-600" },
    { name: "Medical Bills", icon: DollarSign, color: "text-red-600" },
    { name: "Visa Forms", icon: Plane, color: "text-blue-600" },
    { name: "Financial Contracts", icon: Briefcase, color: "text-purple-600" }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl text-gray-900 mb-3">Supported Document Types</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">Analyze any complex document with local AI</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {documentTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-full gap-2 text-sm sm:text-base hover:border-green-300 hover:bg-green-50 hover:shadow-md transition-all cursor-pointer"
              >
                <Icon className={`w-4 h-4 ${type.color}`} />
                <span className="hidden sm:inline">{type.name}</span>
                <span className="sm:hidden">{type.name.split(' ')[0]}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
