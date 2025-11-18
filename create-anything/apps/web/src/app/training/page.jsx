import {
  Brain,
  Settings,
  Play,
  Pause,
  Square,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Layers,
  Zap,
  Activity,
  Target,
} from "lucide-react";
import { useState } from "react";

export default function ModelTrainingPage() {
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [selectedDataset, setSelectedDataset] = useState("NSL-KDD");
  const [modelConfig, setModelConfig] = useState({
    cnnFilters: 64,
    lstmUnits: 128,
    dropoutRate: 0.2,
    learningRate: 0.001,
    batchSize: 32,
    epochs: 100,
    sequenceLength: 10,
  });

  const [trainingMetrics, setTrainingMetrics] = useState({
    currentLoss: 0.0234,
    currentAccuracy: 0.9673,
    bestAccuracy: 0.9681,
    trainTime: "2h 15m",
  });

  const availableDatasets = [
    { name: "NSL-KDD", size: "125 MB", records: "148,517" },
    { name: "CICIDS2017", size: "2.1 GB", records: "2,830,743" },
    { name: "UNSW-NB15", size: "847 MB", records: "2,540,044" },
    { name: "Custom Dataset", size: "45 MB", records: "67,432" },
  ];

  const architectureOptions = [
    {
      name: "CNN + LSTM Hybrid",
      description:
        "Convolutional layers followed by LSTM for sequential patterns",
      selected: true,
    },
    {
      name: "CNN + GRU Hybrid",
      description: "Convolutional layers with GRU for faster training",
      selected: false,
    },
    {
      name: "CNN + LSTM + Attention",
      description: "Enhanced model with attention mechanism",
      selected: false,
    },
    {
      name: "Bidirectional LSTM + CNN",
      description: "Bidirectional LSTM with CNN for complex patterns",
      selected: false,
    },
  ];

  const startTraining = async () => {
    setIsTraining(true);
    setCurrentEpoch(0);
    setTrainingProgress(0);

    try {
      const response = await fetch("/api/training/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataset: selectedDataset,
          config: modelConfig,
        }),
      });

      if (!response.ok) {
        throw new Error("Training failed to start");
      }

      // Simulate training progress
      const interval = setInterval(() => {
        setCurrentEpoch((prev) => {
          const newEpoch = prev + 1;
          setTrainingProgress((newEpoch / modelConfig.epochs) * 100);

          if (newEpoch >= modelConfig.epochs) {
            setIsTraining(false);
            clearInterval(interval);
            return modelConfig.epochs;
          }
          return newEpoch;
        });
      }, 1000);
    } catch (error) {
      console.error("Training error:", error);
      setIsTraining(false);
    }
  };

  const stopTraining = () => {
    setIsTraining(false);
  };

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
            <span>Model Training</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            CNN + LSTM Training
          </h1>
          <p className="text-gray-600">
            Configure and train hybrid deep learning models for intrusion
            detection
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Configuration */}
          <div className="xl:col-span-2 space-y-6">
            {/* Dataset Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Dataset Selection
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableDatasets.map((dataset, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedDataset === dataset.name
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedDataset(dataset.name)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{dataset.name}</h3>
                      {selectedDataset === dataset.name && (
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>
                        {dataset.size} • {dataset.records} records
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Architecture */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Model Architecture
              </h2>

              <div className="space-y-3">
                {architectureOptions.map((arch, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      arch.selected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{arch.name}</h3>
                      {arch.selected && (
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{arch.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hyperparameters */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Hyperparameters
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CNN Filters
                  </label>
                  <input
                    type="number"
                    value={modelConfig.cnnFilters}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        cnnFilters: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LSTM Units
                  </label>
                  <input
                    type="number"
                    value={modelConfig.lstmUnits}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        lstmUnits: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dropout Rate
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="1"
                    value={modelConfig.dropoutRate}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        dropoutRate: parseFloat(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Rate
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    min="0"
                    max="1"
                    value={modelConfig.learningRate}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        learningRate: parseFloat(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Batch Size
                  </label>
                  <input
                    type="number"
                    value={modelConfig.batchSize}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        batchSize: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Epochs
                  </label>
                  <input
                    type="number"
                    value={modelConfig.epochs}
                    onChange={(e) =>
                      setModelConfig((prev) => ({
                        ...prev,
                        epochs: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Training Status */}
          <div className="space-y-6">
            {/* Training Controls */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Training Controls</h2>

              <div className="space-y-4">
                {!isTraining ? (
                  <button
                    onClick={startTraining}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold"
                  >
                    <Play className="w-5 h-5" />
                    Start Training
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={stopTraining}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold"
                    >
                      <Square className="w-5 h-5" />
                      Stop Training
                    </button>
                  </div>
                )}

                {isTraining && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{trainingProgress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${trainingProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Epoch {currentEpoch} of {modelConfig.epochs}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Training Metrics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Live Metrics
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Loss</span>
                  <span className="font-semibold text-orange-600">
                    {trainingMetrics.currentLoss}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Accuracy</span>
                  <span className="font-semibold text-green-600">
                    {(trainingMetrics.currentAccuracy * 100).toFixed(2)}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Best Accuracy</span>
                  <span className="font-semibold text-blue-600">
                    {(trainingMetrics.bestAccuracy * 100).toFixed(2)}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Training Time</span>
                  <span className="font-semibold text-gray-800">
                    {trainingMetrics.trainTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Training History */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Sessions
              </h2>

              <div className="space-y-3">
                {[
                  {
                    dataset: "NSL-KDD",
                    accuracy: "96.8%",
                    time: "2h 15m",
                    status: "completed",
                  },
                  {
                    dataset: "CICIDS2017",
                    accuracy: "97.3%",
                    time: "4h 32m",
                    status: "completed",
                  },
                  {
                    dataset: "UNSW-NB15",
                    accuracy: "94.2%",
                    time: "3h 18m",
                    status: "completed",
                  },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-sm">
                        {session.dataset}
                      </div>
                      <div className="text-xs text-gray-500">
                        {session.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">
                        {session.accuracy}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 capitalize">
                          {session.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
