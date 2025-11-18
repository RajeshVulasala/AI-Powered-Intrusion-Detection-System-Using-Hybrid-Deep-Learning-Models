import {
  Upload,
  File,
  CheckCircle2,
  AlertCircle,
  Database,
  Loader2,
  X,
  Eye,
  Download,
  Shield,
  ArrowRight,
  FileType,
  HardDrive,
  Calendar,
} from "lucide-react";
import { useState, useCallback } from "react";
import useUpload from "@/utils/useUpload";

export default function DatasetUploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [upload, { loading }] = useUpload();

  const standardDatasets = [
    {
      name: "NSL-KDD",
      description: "Enhanced KDD Cup 99 dataset with reduced redundancy",
      size: "125 MB",
      records: "148,517",
      features: "41",
      type: "CSV",
      downloadUrl: "https://example.com/nsl-kdd.csv",
    },
    {
      name: "CICIDS2017",
      description: "Canadian Institute for Cybersecurity IDS dataset",
      size: "2.1 GB",
      records: "2,830,743",
      features: "78",
      type: "CSV",
      downloadUrl: "https://example.com/cicids2017.csv",
    },
    {
      name: "UNSW-NB15",
      description: "Network intrusion dataset from UNSW Australia",
      size: "847 MB",
      records: "2,540,044",
      features: "49",
      type: "CSV",
      downloadUrl: "https://example.com/unsw-nb15.csv",
    },
  ];

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      await uploadFile(file);
    }
  }, []);

  const handleFileInput = useCallback(async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      await uploadFile(file);
    }
  }, []);

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/datasets/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();

      const fileData = {
        id: Date.now(),
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        type: file.type,
        uploadedAt: new Date().toISOString(),
        status: "uploaded",
        url: result.url,
      };

      setUploadedFiles((prev) => [...prev, fileData]);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const downloadDataset = async (dataset) => {
    try {
      const response = await fetch("/api/datasets/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: dataset.name, url: dataset.downloadUrl }),
      });

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const result = await response.json();

      const fileData = {
        id: Date.now(),
        name: dataset.name + ".csv",
        size: dataset.size,
        type: "text/csv",
        uploadedAt: new Date().toISOString(),
        status: "downloaded",
        url: result.url,
        features: dataset.features,
        records: dataset.records,
      };

      setUploadedFiles((prev) => [...prev, fileData]);
    } catch (error) {
      console.error("Download error:", error);
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
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">
            <span>IDS Platform</span>
            <span className="mx-1.5 text-gray-300">/</span>
            <span>Dataset Upload</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            Dataset Management
          </h1>
          <p className="text-gray-600">
            Upload custom datasets or download standard IDS datasets for
            training
          </p>
        </div>

        {/* Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* File Upload */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Custom Dataset
            </h2>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Drop files here or click to browse
              </h3>
              <p className="text-gray-500 mb-4">
                Supports CSV, JSON, and PCAP files up to 500MB
              </p>

              <input
                type="file"
                className="hidden"
                id="file-upload"
                accept=".csv,.json,.pcap,.txt"
                onChange={handleFileInput}
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <File className="w-4 h-4 mr-2" />
                )}
                Select Files
              </label>
            </div>
          </div>

          {/* Standard Datasets */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Standard IDS Datasets
            </h2>

            <div className="space-y-4">
              {standardDatasets.map((dataset, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{dataset.name}</h3>
                    <button
                      onClick={() => downloadDataset(dataset)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {dataset.description}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{dataset.size}</span>
                    <span>•</span>
                    <span>{dataset.records} records</span>
                    <span>•</span>
                    <span>{dataset.features} features</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Uploaded Datasets</h2>
              <p className="text-gray-600 text-sm mt-1">
                Manage your uploaded and downloaded datasets
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-[1fr,120px,120px,150px,120px,100px] bg-gray-50 text-xs font-medium uppercase text-gray-500 py-3 px-6 min-w-[800px]">
                <div>DATASET NAME</div>
                <div>SIZE</div>
                <div>TYPE</div>
                <div>UPLOADED</div>
                <div>STATUS</div>
                <div>ACTIONS</div>
              </div>

              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr,120px,120px,150px,120px,100px] text-sm border-b border-gray-200 py-4 px-6 min-w-[800px] hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <FileType className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <div>{file.size}</div>
                  <div className="text-gray-600">
                    {file.type === "text/csv" ? "CSV" : "Other"}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {new Date(file.uploadedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 capitalize">
                      {file.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setUploadedFiles((prev) =>
                          prev.filter((f) => f.id !== file.id),
                        )
                      }
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {uploadedFiles.length} dataset(s) ready for processing
                </span>
                <a
                  href="/preprocessing"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                >
                  Continue to Preprocessing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
