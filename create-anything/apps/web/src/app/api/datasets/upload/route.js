export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [
      "text/csv",
      "application/json",
      "application/vnd.tcpdump.pcap",
    ];
    if (
      !allowedTypes.includes(file.type) &&
      !file.name.endsWith(".csv") &&
      !file.name.endsWith(".json") &&
      !file.name.endsWith(".pcap")
    ) {
      return Response.json(
        { error: "Invalid file type. Supported: CSV, JSON, PCAP" },
        { status: 400 },
      );
    }

    // Validate file size (500MB limit)
    const maxSize = 500 * 1024 * 1024; // 500MB
    if (file.size > maxSize) {
      return Response.json(
        { error: "File too large. Maximum size is 500MB" },
        { status: 413 },
      );
    }

    // For demo purposes, we'll just return a mock response
    // In production, you would process and store the file
    const fileData = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
      url: `/uploads/${file.name}`, // Mock URL
      status: "uploaded",
      preview: await generateDatasetPreview(file),
    };

    return Response.json({
      success: true,
      file: fileData,
      url: fileData.url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}

async function generateDatasetPreview(file) {
  try {
    // For CSV files, generate a preview of the data
    if (file.type === "text/csv" || file.name.endsWith(".csv")) {
      const text = await file.text();
      const lines = text.split("\n").slice(0, 6); // First 5 rows + header
      const header = lines[0]?.split(",") || [];
      const sampleRows = lines.slice(1, 6).map((line) => line.split(","));

      return {
        type: "csv",
        headers: header,
        rows: sampleRows.filter((row) => row.length > 1),
        totalRows: text.split("\n").length - 1,
        totalColumns: header.length,
      };
    }

    // For JSON files
    if (file.type === "application/json" || file.name.endsWith(".json")) {
      const text = await file.text();
      const data = JSON.parse(text);

      if (Array.isArray(data)) {
        const sample = data.slice(0, 5);
        const keys = sample.length > 0 ? Object.keys(sample[0]) : [];

        return {
          type: "json",
          headers: keys,
          rows: sample.map((item) => keys.map((key) => item[key])),
          totalRows: data.length,
          totalColumns: keys.length,
        };
      }
    }

    return {
      type: "unknown",
      message: "File uploaded successfully",
    };
  } catch (error) {
    console.error("Preview generation error:", error);
    return {
      type: "error",
      message: "Could not generate preview",
    };
  }
}
