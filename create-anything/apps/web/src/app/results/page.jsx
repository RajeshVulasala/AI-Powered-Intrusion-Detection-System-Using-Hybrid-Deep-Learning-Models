import {
  BarChart3,
  TrendingUp,
  Target,
  Shield,
  Brain,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Download,
  Eye,
  Activity,
  Clock,
  Users,
  Zap,
} from "lucide-react";

export default function ResultsAnalyticsPage() {
  const modelResults = [
    {
      id: 1,
      dataset: "NSL-KDD",
      architecture: "CNN+LSTM Hybrid",
      accuracy: 96.8,
      precision: 97.2,
      recall: 96.4,
      f1Score: 96.8,
      trainTime: "2h 15m",
      status: "completed",
      createdAt: "2024-11-17",
    },
    {
      id: 2,
      dataset: "CICIDS2017",
      architecture: "CNN+LSTM+Attention",
      accuracy: 97.3,
      precision: 97.8,
      recall: 96.9,
      f1Score: 97.3,
      trainTime: "4h 32m",
      status: "completed",
      createdAt: "2024-11-16",
    },
    {
      id: 3,
      dataset: "UNSW-NB15",
      architecture: "CNN+LSTM Hybrid",
      accuracy: 94.2,
      precision: 94.8,
      recall: 93.6,
      f1Score: 94.2,
      trainTime: "3h 18m",
      status: "completed",
      createdAt: "2024-11-15",
    },
    {
      id: 4,
      dataset: "Custom Dataset",
      architecture: "CNN+GRU Hybrid",
      accuracy: 95.1,
      precision: 95.6,
      recall: 94.7,
      f1Score: 95.1,
      trainTime: "1h 45m",
      status: "completed",
      createdAt: "2024-11-14",
    },
  ];

  const attackCategories = [
    { name: "DoS/DDoS", detected: 1247, accuracy: 98.5, color: "text-red-600" },
    {
      name: "Probe/Scan",
      detected: 342,
      accuracy: 96.2,
      color: "text-orange-600",
    },
    { name: "U2R", detected: 89, accuracy: 94.8, color: "text-yellow-600" },
    { name: "R2L", detected: 156, accuracy: 95.3, color: "text-purple-600" },
    { name: "Botnet", detected: 78, accuracy: 97.1, color: "text-pink-600" },
    {
      name: "Normal Traffic",
      detected: 8432,
      accuracy: 99.2,
      color: "text-green-600",
    },
  ];

  const confusionMatrixData = [
    [892, 12, 3, 8], // Normal
    [15, 234, 2, 4], // DoS
    [5, 8, 167, 12], // Probe
    [7, 3, 9, 89], // U2R
  ];

  const confusionLabels = ["Normal", "DoS", "Probe", "U2R"];

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
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">
            <span>IDS Platform</span>
            <span className="mx-1.5 text-gray-300">/</span>
            <span>Results & Analytics</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            Model Performance Analytics
          </h1>
          <p className="text-gray-600">
            Detailed analysis and evaluation metrics for trained CNN+LSTM models
          </p>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">97.3%</div>
            <div className="text-sm text-gray-600">Best Accuracy</div>
            <div className="text-xs text-green-600 mt-1">
              CICIDS2017 Dataset
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">95.9%</div>
            <div className="text-sm text-gray-600">Average F1-Score</div>
            <div className="text-xs text-blue-600 mt-1">Across all models</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2.8h</div>
            <div className="text-sm text-gray-600">Avg Training Time</div>
            <div className="text-xs text-purple-600 mt-1">Per model</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,912</div>
            <div className="text-sm text-gray-600">Threats Detected</div>
            <div className="text-xs text-red-600 mt-1">Last 24 hours</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Model Results Table */}
          <div className="xl:col-span-2 space-y-6">
            {/* Model Performance Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold mb-2">
                  Model Performance Results
                </h2>
                <p className="text-gray-600 text-sm">
                  Detailed metrics for all trained models
                </p>
              </div>

              <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr,1fr,80px,80px,80px,80px,100px,100px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[900px]">
                  <div>DATASET</div>
                  <div>ARCHITECTURE</div>
                  <div>ACC %</div>
                  <div>PREC %</div>
                  <div>REC %</div>
                  <div>F1 %</div>
                  <div>TIME</div>
                  <div>ACTIONS</div>
                </div>

                {/* Table Rows */}
                {modelResults.map((model, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr,1fr,80px,80px,80px,80px,100px,100px] text-sm border-b border-gray-200 py-4 px-6 min-w-[900px] hover:bg-gray-50"
                  >
                    <div>
                      <div className="font-medium">{model.dataset}</div>
                      <div className="text-xs text-gray-500">
                        {model.createdAt}
                      </div>
                    </div>
                    <div className="text-gray-600">{model.architecture}</div>
                    <div className="font-semibold text-green-600">
                      {model.accuracy}%
                    </div>
                    <div className="font-semibold text-blue-600">
                      {model.precision}%
                    </div>
                    <div className="font-semibold text-purple-600">
                      {model.recall}%
                    </div>
                    <div className="font-semibold text-orange-600">
                      {model.f1Score}%
                    </div>
                    <div className="text-gray-600">{model.trainTime}</div>
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attack Classification Performance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Attack Classification Performance
              </h2>

              <div className="space-y-4">
                {attackCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-600">
                          {category.detected} detections
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${category.color}`}>
                        {category.accuracy}%
                      </div>
                      <div className="text-xs text-gray-500">accuracy</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Confusion Matrix & ROC */}
          <div className="space-y-6">
            {/* Confusion Matrix */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Confusion Matrix</h2>
              <p className="text-sm text-gray-600 mb-4">
                Latest NSL-KDD Model Results
              </p>

              <div className="space-y-3">
                {/* Matrix Grid */}
                <div className="grid grid-cols-5 gap-1 text-xs">
                  {/* Header Row */}
                  <div></div>
                  {confusionLabels.map((label, idx) => (
                    <div key={idx} className="text-center font-medium p-2">
                      {label}
                    </div>
                  ))}

                  {/* Matrix Rows */}
                  {confusionMatrixData.map((row, rowIdx) => (
                    <>
                      <div
                        key={`label-${rowIdx}`}
                        className="font-medium p-2 text-right"
                      >
                        {confusionLabels[rowIdx]}
                      </div>
                      {row.map((value, colIdx) => (
                        <div
                          key={`${rowIdx}-${colIdx}`}
                          className={`p-2 text-center font-medium rounded ${
                            rowIdx === colIdx
                              ? "bg-green-100 text-green-800"
                              : value > 10
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {value}
                        </div>
                      ))}
                    </>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-100 rounded"></div>
                    <span>True Positives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-100 rounded"></div>
                    <span>False Positives</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROC Curve Placeholder */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">ROC Curve</h2>
              <p className="text-sm text-gray-600 mb-4">AUC Score: 0.987</p>

              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <svg className="w-full h-full p-4" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient
                      id="rocGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#8B5CF6"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                  </defs>
                  {/* ROC Curve */}
                  <path
                    d="M 20 180 Q 30 160 50 140 Q 70 120 90 100 Q 120 70 150 50 Q 170 30 180 20"
                    stroke="url(#rocGradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Diagonal Reference Line */}
                  <path
                    d="M 20 180 L 180 20"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                  />
                  {/* Axes */}
                  <text
                    x="100"
                    y="195"
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    False Positive Rate
                  </text>
                  <text
                    x="10"
                    y="100"
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                    transform="rotate(-90 10 100)"
                  >
                    True Positive Rate
                  </text>
                </svg>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Export Results</h2>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium text-blue-700">
                    Download Model (.h5)
                  </span>
                  <Download className="w-4 h-4 text-blue-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="font-medium text-green-700">
                    Export Metrics (JSON)
                  </span>
                  <Download className="w-4 h-4 text-green-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="font-medium text-purple-700">
                    Generate Report (PDF)
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
