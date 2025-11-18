import {
  Shield,
  Key,
  Activity,
  BarChart3,
  Settings,
  ArrowRight,
  Copy,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Code,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function APIManagementPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState("detection");

  const apiKeys = [
    {
      id: 1,
      name: "Production API Key",
      key: "cyg_prod_sk_1a2b3c4d5e6f7g8h9i0j",
      created: "2024-11-01",
      lastUsed: "2024-11-18",
      requests: 45678,
      status: "active",
    },
    {
      id: 2,
      name: "Development API Key",
      key: "cyg_dev_sk_9z8y7x6w5v4u3t2s1r0q",
      created: "2024-10-15",
      lastUsed: "2024-11-17",
      requests: 12345,
      status: "active",
    },
    {
      id: 3,
      name: "Testing API Key",
      key: "cyg_test_sk_abcdef123456789012345",
      created: "2024-11-10",
      lastUsed: "2024-11-18",
      requests: 8901,
      status: "limited",
    },
  ];

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/detect",
      description: "Analyze network traffic for threats",
      requests: 24567,
      avgLatency: "1.2ms",
      successRate: "99.8%",
    },
    {
      method: "POST",
      path: "/api/train",
      description: "Start model training with dataset",
      requests: 156,
      avgLatency: "45ms",
      successRate: "98.1%",
    },
    {
      method: "GET",
      path: "/api/models",
      description: "List available trained models",
      requests: 3456,
      avgLatency: "23ms",
      successRate: "99.9%",
    },
    {
      method: "GET",
      path: "/api/metrics",
      description: "Get model performance metrics",
      requests: 2345,
      avgLatency: "15ms",
      successRate: "99.7%",
    },
    {
      method: "POST",
      path: "/api/datasets/upload",
      description: "Upload custom dataset",
      requests: 89,
      avgLatency: "1.5s",
      successRate: "97.8%",
    },
  ];

  const usageStats = [
    { label: "Total API Calls", value: "127,456", change: "+12.5%" },
    { label: "Active Keys", value: "3", change: "0%" },
    { label: "Avg Response Time", value: "1.8ms", change: "-5%" },
    { label: "Success Rate", value: "99.4%", change: "+0.1%" },
  ];

  const getMethodColor = (method) => {
    switch (method) {
      case "GET":
        return "text-green-600 bg-green-100";
      case "POST":
        return "text-blue-600 bg-blue-100";
      case "PUT":
        return "text-yellow-600 bg-yellow-100";
      case "DELETE":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
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

        {/* API Status */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <span className="text-sm font-bold text-green-700">API Online</span>
          </div>
          <div className="text-xs text-green-600">
            All endpoints operational
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">
            <span>IDS Platform</span>
            <span className="mx-1.5 text-gray-300">/</span>
            <span>API Management</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            API Management Console
          </h1>
          <p className="text-gray-600">
            Manage API keys, monitor usage, and access documentation
          </p>
        </div>

        {/* Usage Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {usageStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-green-600">
                {stat.change} this week
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - API Keys & Endpoints */}
          <div className="xl:col-span-2 space-y-6">
            {/* API Keys Management */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">API Keys</h2>
                    <p className="text-gray-600 text-sm">
                      Manage access keys for the IDS API
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold">
                    <Plus className="w-4 h-4" />
                    Create Key
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr,200px,120px,120px,120px,100px,100px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[900px]">
                  <div>NAME</div>
                  <div>API KEY</div>
                  <div>CREATED</div>
                  <div>LAST USED</div>
                  <div>REQUESTS</div>
                  <div>STATUS</div>
                  <div>ACTIONS</div>
                </div>

                {/* API Key Rows */}
                {apiKeys.map((key) => (
                  <div
                    key={key.id}
                    className="grid grid-cols-[1fr,200px,120px,120px,120px,100px,100px] text-sm border-b border-gray-200 py-4 px-6 min-w-[900px] hover:bg-gray-50"
                  >
                    <div className="font-medium">{key.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs">
                        {showApiKey ? key.key : key.key.slice(0, 16) + "..."}
                      </span>
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        {showApiKey ? (
                          <EyeOff className="w-3 h-3" />
                        ) : (
                          <Eye className="w-3 h-3" />
                        )}
                      </button>
                      <button
                        onClick={() => copyToClipboard(key.key)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-gray-600">{key.created}</div>
                    <div className="text-gray-600">{key.lastUsed}</div>
                    <div className="font-semibold">
                      {key.requests.toLocaleString()}
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          key.status === "active"
                            ? "text-green-600 bg-green-100"
                            : key.status === "limited"
                              ? "text-yellow-600 bg-yellow-100"
                              : "text-red-600 bg-red-100"
                        }`}
                      >
                        {key.status}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* API Endpoints */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold mb-2">API Endpoints</h2>
                <p className="text-gray-600 text-sm">
                  Available endpoints and their performance metrics
                </p>
              </div>

              <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[80px,1fr,120px,120px,120px,120px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[800px]">
                  <div>METHOD</div>
                  <div>ENDPOINT</div>
                  <div>REQUESTS</div>
                  <div>AVG LATENCY</div>
                  <div>SUCCESS RATE</div>
                  <div>DOCS</div>
                </div>

                {/* Endpoint Rows */}
                {apiEndpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[80px,1fr,120px,120px,120px,120px] text-sm border-b border-gray-200 py-4 px-6 min-w-[800px] hover:bg-gray-50"
                  >
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(endpoint.method)}`}
                      >
                        {endpoint.method}
                      </span>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-medium">
                        {endpoint.path}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {endpoint.description}
                      </div>
                    </div>
                    <div className="font-semibold">
                      {endpoint.requests.toLocaleString()}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {endpoint.avgLatency}
                    </div>
                    <div className="text-green-600 font-medium">
                      {endpoint.successRate}
                    </div>
                    <div>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Code className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Documentation & Tools */}
          <div className="space-y-6">
            {/* Quick Start */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Start</h2>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">1. Get API Key</h3>
                  <p className="text-sm text-gray-600">
                    Create a new API key from the management panel above.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">2. Make Request</h3>
                  <div className="bg-gray-900 rounded p-3 mt-2">
                    <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                      {`curl -H "Authorization: Bearer YOUR_KEY" \\
  -X POST /api/detect \\
  -d '{"data": "network_traffic"}'`}
                    </pre>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">3. Handle Response</h3>
                  <p className="text-sm text-gray-600">
                    Process the JSON response with threat classifications and
                    confidence scores.
                  </p>
                </div>
              </div>
            </div>

            {/* Rate Limits */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Rate Limits</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium text-blue-700">
                      Standard Tier
                    </div>
                    <div className="text-sm text-blue-600">
                      1,000 requests/hour
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">847</div>
                </div>

                <div className="text-sm text-gray-600">
                  <div className="flex justify-between mb-2">
                    <span>Current Usage</span>
                    <span>153 / 1,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "15.3%" }}
                    ></div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center mt-3">
                  Resets in 47 minutes
                </div>
              </div>
            </div>

            {/* Documentation Links */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Documentation</h2>

              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <div className="font-medium">API Reference</div>
                    <div className="text-sm text-gray-600">
                      Complete endpoint documentation
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <div className="font-medium">SDK & Libraries</div>
                    <div className="text-sm text-gray-600">
                      Python, JavaScript, Go
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <div className="font-medium">Code Examples</div>
                    <div className="text-sm text-gray-600">
                      Sample implementations
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Status & Health */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">API Health</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Detection API</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Training API</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Upload API</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Operational
                  </span>
                </div>

                <div className="text-xs text-gray-500 text-center mt-4">
                  Last updated: Nov 18, 2024 11:45 UTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
