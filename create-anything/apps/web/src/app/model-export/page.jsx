import {
  Shield,
  Download,
  ArrowRight,
  Package,
  CheckCircle2,
  FileText,
  Archive,
  Code,
  Settings,
  Eye,
  Share2,
  Cloud,
  HardDrive,
} from "lucide-react";
import { useState } from "react";

export default function ModelExportPage() {
  const [selectedModel, setSelectedModel] = useState("cnn-lstm-v1");

  const trainedModels = [
    {
      id: "cnn-lstm-v1",
      name: "CNN+LSTM Hybrid v1.0",
      dataset: "NSL-KDD",
      accuracy: "96.8%",
      size: "12.4 MB",
      trained: "2024-11-17",
      format: "TensorFlow",
      status: "ready",
    },
    {
      id: "cnn-lstm-attention",
      name: "CNN+LSTM+Attention v2.1",
      dataset: "CICIDS2017",
      accuracy: "97.3%",
      size: "18.7 MB",
      trained: "2024-11-16",
      format: "TensorFlow",
      status: "ready",
    },
    {
      id: "cnn-gru-hybrid",
      name: "CNN+GRU Hybrid v1.5",
      dataset: "Custom Dataset",
      accuracy: "95.1%",
      size: "9.8 MB",
      trained: "2024-11-15",
      format: "TensorFlow",
      status: "ready",
    },
  ];

  const exportFormats = [
    {
      name: "TensorFlow SavedModel",
      extension: ".pb",
      description: "Native TensorFlow format for deployment",
      size: "12.4 MB",
      icon: Package,
      color: "text-orange-600 bg-orange-100",
    },
    {
      name: "Keras HDF5",
      extension: ".h5",
      description: "Portable format for Keras models",
      size: "11.2 MB",
      icon: Archive,
      color: "text-blue-600 bg-blue-100",
    },
    {
      name: "TensorFlow Lite",
      extension: ".tflite",
      description: "Optimized for mobile deployment",
      size: "3.1 MB",
      icon: Download,
      color: "text-green-600 bg-green-100",
    },
    {
      name: "ONNX Format",
      extension: ".onnx",
      description: "Universal format for ML models",
      size: "15.8 MB",
      icon: Share2,
      color: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <span className="text-lg font-roboto font-bold">AI - IDS</span>
        </div>

        <nav className="space-y-2">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            Back to Dashboard
          </a>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">
            <span>IDS Platform</span>
            <span className="mx-1.5 text-gray-300">/</span>
            <span>Model Export</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            Model Export & Deployment
          </h1>
          <p className="text-gray-600">
            Export trained CNN+LSTM models for production deployment
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Model Selection & Export Options */}
          <div className="xl:col-span-2 space-y-6">
            {/* Model Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Select Model</h2>

              <div className="space-y-4">
                {trainedModels.map((model) => (
                  <div
                    key={model.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedModel === model.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{model.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                          {model.status}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                      <span>Dataset: {model.dataset}</span>
                      <span>Accuracy: {model.accuracy}</span>
                      <span>Size: {model.size}</span>
                      <span>Format: {model.format}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Trained: {model.trained}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Formats */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Export Formats</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exportFormats.map((format, index) => {
                  const IconComponent = format.icon;
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${format.color}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{format.name}</h3>
                          <span className="text-xs text-gray-500 font-mono">
                            {format.extension}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {format.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Size: {format.size}
                        </span>
                        <button className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                          <Download className="w-3 h-3" />
                          Export
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Model Details & Actions */}
          <div className="space-y-6">
            {/* Model Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Model Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Architecture:</span>
                  <span className="font-mono text-sm">CNN+LSTM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Parameters:</span>
                  <span className="font-mono text-sm">1.2M</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Input Shape:</span>
                  <span className="font-mono text-sm">(10, 41)</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Output Classes:</span>
                  <span className="font-mono text-sm">5</span>
                </div>

                <div className="border border-gray-200 rounded p-3 bg-gray-50">
                  <div className="text-xs font-mono">
                    Conv1D(filters=64) →<br />
                    MaxPooling1D() →<br />
                    LSTM(units=128) →<br />
                    Dense(units=5) →<br />
                    Softmax()
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Eye className="w-4 h-4" />
                  View Architecture
                </button>
              </div>
            </div>

            {/* Deployment Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Deployment Options</h2>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100">
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-700">
                      Deploy to Cloud
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100">
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-700">
                      Local Deployment
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-purple-700">
                      API Endpoint
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            </div>

            {/* Configuration Files */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Configuration Files
              </h2>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">model_config.json</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">requirements.txt</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">deployment.yaml</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">dockerfile</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Export All */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Bundle Export</h2>

              <p className="text-sm text-gray-600 mb-4">
                Download complete deployment package with model, configs, and
                documentation.
              </p>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-semibold">
                <Archive className="w-5 h-5" />
                Export Complete Bundle
              </button>

              <div className="text-xs text-gray-500 text-center mt-2">
                Estimated size: 25.7 MB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
