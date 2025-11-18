import {
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Wifi,
  Server,
  Globe,
  Users,
  Eye,
  Pause,
  Play,
  Settings,
  Filter,
  RefreshCw,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function RealTimeDetectionPage() {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [threatLevel, setThreatLevel] = useState("medium");
  const [activeConnections, setActiveConnections] = useState(1847);

  const realtimeThreats = [
    {
      id: 1,
      timestamp: "11:45:32",
      type: "DoS Attack",
      severity: "high",
      source: "192.168.1.234",
      destination: "10.0.0.15",
      confidence: 98.5,
      action: "blocked",
    },
    {
      id: 2,
      timestamp: "11:44:18",
      type: "Port Scan",
      severity: "medium",
      source: "203.0.113.0",
      destination: "192.168.1.100",
      confidence: 94.2,
      action: "monitoring",
    },
    {
      id: 3,
      timestamp: "11:43:05",
      type: "Suspicious Login",
      severity: "high",
      source: "172.16.254.1",
      destination: "192.168.1.50",
      confidence: 96.8,
      action: "blocked",
    },
    {
      id: 4,
      timestamp: "11:42:41",
      type: "Malware C&C",
      severity: "critical",
      source: "198.51.100.42",
      destination: "192.168.1.200",
      confidence: 99.1,
      action: "blocked",
    },
    {
      id: 5,
      timestamp: "11:41:29",
      type: "Brute Force",
      severity: "medium",
      source: "203.0.113.15",
      destination: "10.0.0.25",
      confidence: 91.7,
      action: "monitoring",
    },
  ];

  const networkStats = [
    { label: "Total Packets", value: "2,847,392", change: "+1,247" },
    { label: "Threats Blocked", value: "156", change: "+12" },
    { label: "Active Sessions", value: "1,847", change: "+23" },
    { label: "Bandwidth Usage", value: "845 MB/s", change: "+15%" },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case "blocked":
        return "text-red-600";
      case "monitoring":
        return "text-blue-600";
      case "allowed":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
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

        {/* Status Panel */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <span className="text-sm font-bold text-green-700">
              System Active
            </span>
          </div>
          <div className="text-xs text-green-600">
            Real-time monitoring enabled
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
            <span>Real-time Detection</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                Network Security Monitor
              </h1>
              <p className="text-gray-600">
                Live intrusion detection and threat analysis
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold ${
                  isMonitoring
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isMonitoring ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isMonitoring ? "Pause" : "Start"} Monitoring
              </button>
            </div>
          </div>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {networkStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-green-600">
                {stat.change} last hour
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN - Threat Feed */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Live Threat Feed
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Real-time detection results from CNN+LSTM model
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[80px,1fr,100px,140px,140px,80px,100px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[800px]">
                  <div>TIME</div>
                  <div>THREAT TYPE</div>
                  <div>SEVERITY</div>
                  <div>SOURCE IP</div>
                  <div>DESTINATION</div>
                  <div>CONF %</div>
                  <div>ACTION</div>
                </div>

                {/* Threat Rows */}
                {realtimeThreats.map((threat) => (
                  <div
                    key={threat.id}
                    className="grid grid-cols-[80px,1fr,100px,140px,140px,80px,100px] text-sm border-b border-gray-200 py-4 px-6 min-w-[800px] hover:bg-gray-50"
                  >
                    <div className="text-gray-600 font-mono text-xs">
                      {threat.timestamp}
                    </div>
                    <div className="font-medium">{threat.type}</div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(threat.severity)}`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                    <div className="font-mono text-xs">{threat.source}</div>
                    <div className="font-mono text-xs">
                      {threat.destination}
                    </div>
                    <div className="font-semibold text-blue-600">
                      {threat.confidence}%
                    </div>
                    <div
                      className={`font-medium capitalize ${getActionColor(threat.action)}`}
                    >
                      {threat.action}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-600">
                  {isMonitoring
                    ? "Monitoring active • Auto-refresh every 5s"
                    : "Monitoring paused"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Controls & Analytics */}
          <div className="space-y-6">
            {/* Threat Level */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Current Threat Level
              </h2>

              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  MEDIUM
                </div>
                <div className="text-sm text-gray-600">
                  Elevated activity detected
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { level: "Low", count: 23, color: "bg-green-500" },
                  { level: "Medium", count: 156, color: "bg-yellow-500" },
                  { level: "High", count: 12, color: "bg-orange-500" },
                  { level: "Critical", count: 3, color: "bg-red-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></div>
                      <span>{item.level}</span>
                    </div>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Network Overview</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">WAN Interfaces</div>
                      <div className="text-sm text-gray-600">2 active</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">LAN Subnets</div>
                      <div className="text-sm text-gray-600">5 monitored</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Critical Servers</div>
                      <div className="text-sm text-gray-600">12 protected</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Active Users</div>
                      <div className="text-sm text-gray-600">
                        {activeConnections}
                      </div>
                    </div>
                  </div>
                  <Activity className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Model Status */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">AI Model Status</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium text-green-700">
                      CNN+LSTM Hybrid
                    </div>
                    <div className="text-sm text-green-600">
                      Primary Detection
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      97.3%
                    </div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      1.2ms
                    </div>
                    <div className="text-xs text-gray-600">Latency</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-600">
                    Model last updated
                  </div>
                  <div className="text-xs text-gray-500">
                    2024-11-17 14:30 UTC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
