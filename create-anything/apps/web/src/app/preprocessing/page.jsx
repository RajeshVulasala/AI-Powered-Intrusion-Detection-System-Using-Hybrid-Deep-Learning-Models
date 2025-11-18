import {
  Shield,
  Database,
  ArrowRight,
  FileText,
  Settings,
  Play,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Filter,
  Shuffle,
  Calculator,
  Eye,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function DataPreprocessingPage() {
  const [selectedDataset, setSelectedDataset] = useState("nsl-kdd");
  const [preprocessingStatus, setPreprocessingStatus] = useState("ready");

  const datasets = [
    {
      id: "nsl-kdd",
      name: "NSL-KDD",
      size: "125 MB",
      records: "148,517",
      features: "41",
      status: "ready",
      issues: ["3 missing values", "Categorical features need encoding"],
    },
    {
      id: "cicids",
      name: "CICIDS2017",
      size: "2.1 GB",
      records: "2,830,743",
      features: "78",
      status: "processing",
      issues: ["Timestamp parsing needed", "Feature scaling required"],
    },
    {
      id: "custom",
      name: "Custom Dataset",
      size: "45 MB",
      records: "78,234",
      features: "23",
      status: "ready",
      issues: ["No issues detected"],
    },
  ];

  const preprocessingSteps = [
    {
      step: 1,
      name: "Data Validation",
      description: "Check data integrity and format",
      status: "completed",
      duration: "12s",
    },
    {
      step: 2,
      name: "Missing Value Handling",
      description: "Fill or remove missing values",
      status: "completed",
      duration: "28s",
    },
    {
      step: 3,
      name: "Feature Encoding",
      description: "Convert categorical to numerical",
      status: "running",
      duration: "Running...",
    },
    {
      step: 4,
      name: "Normalization",
      description: "Scale features to 0-1 range",
      status: "pending",
      duration: "Pending",
    },
    {
      step: 5,
      name: "Sequence Creation",
      description: "Create time sequences for LSTM",
      status: "pending",
      duration: "Pending",
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
            <span>Data Preprocessing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            Data Preprocessing Pipeline
          </h1>
          <p className="text-gray-600">
            Clean, transform, and prepare datasets for CNN+LSTM training
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Dataset Selection & Processing */}
          <div className="xl:col-span-2 space-y-6">
            {/* Dataset Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Select Dataset</h2>

              <div className="space-y-4">
                {datasets.map((dataset) => (
                  <div
                    key={dataset.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedDataset === dataset.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedDataset(dataset.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{dataset.name}</h3>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          dataset.status === "ready"
                            ? "text-green-600 bg-green-100"
                            : dataset.status === "processing"
                              ? "text-blue-600 bg-blue-100"
                              : "text-gray-600 bg-gray-100"
                        }`}
                      >
                        {dataset.status}
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600 mb-3">
                      <span>{dataset.size}</span>
                      <span>•</span>
                      <span>{dataset.records} records</span>
                      <span>•</span>
                      <span>{dataset.features} features</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Issues: </span>
                      <span className="text-orange-600">
                        {dataset.issues.join(", ")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Processing Pipeline */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Processing Pipeline</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <Play className="w-4 h-4" />
                    Start Processing
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {preprocessingSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold">
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : step.status === "running" ? (
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <span className="text-gray-400">{step.step}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{step.name}</h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {step.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Configuration & Preview */}
          <div className="space-y-6">
            {/* Processing Configuration */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Configuration</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Missing Value Strategy
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Mean Imputation</option>
                    <option>Median Imputation</option>
                    <option>Drop Rows</option>
                    <option>Forward Fill</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Normalization Method
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Min-Max Scaling</option>
                    <option>Standard Scaling</option>
                    <option>Robust Scaling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sequence Length
                  </label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Train/Test Split
                  </label>
                  <input
                    type="range"
                    min="60"
                    max="90"
                    defaultValue="80"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>60%</span>
                    <span>80%</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Data Preview</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Shape:</span>
                  <span className="font-mono text-sm">(148517, 41)</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Memory Usage:</span>
                  <span className="font-mono text-sm">47.8 MB</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Missing Values:</span>
                  <span className="font-mono text-sm text-orange-600">
                    3 (0.01%)
                  </span>
                </div>

                <div className="border border-gray-200 rounded p-3 bg-gray-50">
                  <div className="text-xs font-mono">
                    protocol_type object
                    <br />
                    service object
                    <br />
                    flag object
                    <br />
                    src_bytes int64
                    <br />
                    dst_bytes int64
                    <br />
                    ...
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Eye className="w-4 h-4" />
                  View Full Schema
                </button>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Export Processed Data
              </h2>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100">
                  <span className="font-medium text-blue-700">
                    Download CSV
                  </span>
                  <Download className="w-4 h-4 text-blue-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100">
                  <span className="font-medium text-green-700">
                    Download NumPy
                  </span>
                  <Download className="w-4 h-4 text-green-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100">
                  <span className="font-medium text-purple-700">
                    Export Config
                  </span>
                  <Download className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
