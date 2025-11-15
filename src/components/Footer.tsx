import { Shield, Cpu, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg text-gray-900 mb-2">
            No servers. No uploads. 100% private-by-design AI.
          </p>
          <p className="text-sm text-gray-500">
            Powered by client-side RAG with Transformers.js
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-900 mb-1">Browser-Only Processing</h3>
            <p className="text-xs text-gray-500">All AI runs in your browser</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-3">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm text-gray-900 mb-1">Local RAG</h3>
            <p className="text-xs text-gray-500">Client-side embeddings & retrieval</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-sm text-gray-900 mb-1">Zero Server Upload</h3>
            <p className="text-xs text-gray-500">Documents never leave your device</p>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © 2024 Advocate-Leaf · Built with privacy first
          </p>
        </div>
      </div>
    </footer>
  );
}
