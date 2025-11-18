import {
  Home,
  Upload,
  Settings,
  BarChart2,
  Shield,
  Database,
  Brain,
  FileText,
  Download,
  Activity,
  Zap,
  ArrowRight,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function IDSDashboard() {
  const navItems = [
    { name: "Dashboard", icon: Home, href: "/", active: true },
    {
      name: "Dataset Upload",
      icon: Upload,
      href: "/dataset-upload",
      active: false,
    },
    {
      name: "Data Preprocessing",
      icon: Database,
      href: "/preprocessing",
      active: false,
    },
    { name: "Model Training", icon: Brain, href: "/training", active: false },
    {
      name: "Results & Analytics",
      icon: BarChart2,
      href: "/results",
      active: false,
    },
    { name: "Model Export", icon: Download, href: "/export", active: false },
    {
      name: "Real-time Detection",
      icon: Shield,
      href: "/detection",
      active: false,
    },
    { name: "API Management", icon: Settings, href: "/api", active: false },
  ];

  const kpiCards = [
    {
      label: "Models Trained",
      value: "12",
      delta: "+3 this week",
      icon: Brain,
      color: "text-blue-600",
    },
    {
      label: "Datasets Processed",
      value: "8",
      delta: "+2 new uploads",
      icon: Database,
      color: "text-green-600",
    },
    {
      label: "Detection Accuracy",
      value: "97.3%",
      delta: "Best model performance",
      icon: Shield,
      color: "text-purple-600",
    },
    {
      label: "Threats Detected",
      value: "1,847",
      delta: "+156 today",
      icon: AlertTriangle,
      color: "text-red-600",
    },
  ];

  const recentTraining = [
    {
      dataset: "NSL-KDD",
      model: "CNN+LSTM Hybrid",
      accuracy: "96.8%",
      status: "Completed",
      timestamp: "2 hours ago",
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      dataset: "CICIDS2017",
      model: "CNN+LSTM+Attention",
      accuracy: "97.3%",
      status: "Completed",
      timestamp: "6 hours ago",
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      dataset: "UNSW-NB15",
      model: "CNN+LSTM Hybrid",
      accuracy: "94.2%",
      status: "Training",
      timestamp: "Running for 45min",
      icon: Activity,
      color: "text-blue-600",
    },
    {
      dataset: "Custom Dataset",
      model: "CNN+GRU Hybrid",
      accuracy: "Processing...",
      status: "Preprocessing",
      timestamp: "5 minutes ago",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const quickActions = [
    {
      title: "Upload New Dataset",
      description: "Upload CSV, JSON, or PCAP files",
      icon: Upload,
      href: "/dataset-upload",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "Start Training",
      description: "Configure and train a new model",
      icon: Brain,
      href: "/training",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      title: "View Results",
      description: "Analyze model performance",
      icon: BarChart2,
      href: "/results",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      title: "Real-time Detection",
      description: "Monitor network traffic",
      icon: Shield,
      href: "/detection",
      color: "bg-red-50 text-red-600 border-red-200",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#111111] font-inter">
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <span className="text-lg font-roboto font-bold">AI - IDS</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left text-sm transition-colors ${
                  item.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <IconComponent
                  className="w-[18px] h-[18px]"
                  strokeWidth={1.5}
                />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* AI Model Status */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg mt-8">
          <Brain className="w-5 h-5 text-green-600" />
          <div>
            <div className="text-sm font-bold text-green-700">
              AI Model Active
            </div>
            <div className="text-xs text-green-600">
              Hybrid CNN+LSTM Running
            </div>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mt-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-semibold text-white">
              CS
            </div>
            <span className="text-sm font-semibold">CyberSec Admin</span>
          </div>
          <div className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center">
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-1">
          <span>IDS Platform</span>
          <span className="mx-1.5 text-gray-300">/</span>
          <span>Dashboard</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
          Intrusion Detection System
        </h1>
        <p className="text-gray-600 mb-8">
          Hybrid Deep Learning Platform for Network Security Monitoring
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-[48px] h-[48px] rounded-full bg-gray-100 flex items-center justify-center ${card.color}`}
                  >
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {card.label}
                  </div>
                  <div className="text-[28px] font-poppins font-semibold leading-none mb-1">
                    {card.value}
                  </div>
                  <div className="text-xs text-green-600">{card.delta}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <a
                key={index}
                href={action.href}
                className={`p-4 rounded-lg border ${action.color} hover:shadow-md transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                <p className="text-xs opacity-75">{action.description}</p>
              </a>
            );
          })}
        </div>

        {/* Recent Training Sessions */}
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-2">
              Recent Training Sessions
            </h2>
            <p className="text-gray-600 text-sm">
              Latest CNN+LSTM model training results
            </p>
          </div>

          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr,1fr,120px,120px,150px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[600px]">
              <div>DATASET</div>
              <div>MODEL ARCHITECTURE</div>
              <div>ACCURACY</div>
              <div>STATUS</div>
              <div>TIMESTAMP</div>
            </div>

            {/* Table Rows */}
            {recentTraining.map((session, index) => {
              const IconComponent = session.icon;
              return (
                <div
                  key={index}
                  className="grid grid-cols-[1fr,1fr,120px,120px,150px] text-sm border-b border-gray-200 py-4 px-6 min-w-[600px] hover:bg-gray-50"
                >
                  <div className="font-medium">{session.dataset}</div>
                  <div className="text-gray-600">{session.model}</div>
                  <div className="font-semibold text-blue-600">
                    {session.accuracy}
                  </div>
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-4 h-4 ${session.color}`} />
                    <span className={session.color}>{session.status}</span>
                  </div>
                  <div className="text-gray-500 text-xs">
                    {session.timestamp}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-4 text-sm text-gray-500 bg-gray-50">
            Showing 4 of 12 training sessions.{" "}
            <a href="/results" className="text-blue-600 hover:underline">
              View all →
            </a>
          </div>
        </div>

        {/* Model Performance Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-[52px] h-[52px] border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                Detection Accuracy Trend
              </div>
              <div className="text-[28px] font-poppins font-semibold leading-none">
                97.3%
              </div>
              <div className="text-xs text-green-600">
                +2.1% improvement this month
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="h-56 w-full mb-4 bg-gradient-to-b from-blue-50 to-transparent rounded-lg flex items-end justify-center">
            <svg className="w-full h-full p-4" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M 50 160 L 120 140 L 190 130 L 260 120 L 330 115 L 400 110 L 470 105 L 540 100 L 610 95 L 680 90 L 750 85"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 50 160 L 120 140 L 190 130 L 260 120 L 330 115 L 400 110 L 470 105 L 540 100 L 610 95 L 680 90 L 750 85 L 750 180 L 50 180 Z"
                fill="url(#gradient)"
              />
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-gray-500 uppercase">
            {[
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
            ].map((month, index) => (
              <span key={index}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
