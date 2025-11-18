# AI-Powered Intrusion Detection System Using Hybrid Deep Learning Models

A comprehensive intrusion detection system built with hybrid deep learning models (CNN + LSTM) for real-time network security monitoring. This project includes both web and mobile applications for managing datasets, training models, and detecting threats.

## 🎯 Features

- **Dataset Management**: Upload and manage network traffic datasets (CSV, JSON, PCAP)
- **Data Preprocessing**: Automated data validation, encoding, normalization, and sequence creation
- **Model Training**: Train hybrid deep learning models (CNN+LSTM, CNN+GRU, CNN+LSTM+Attention)
- **Real-time Detection**: Monitor network traffic and detect intrusions in real-time
- **Results & Analytics**: View model performance metrics, accuracy, and threat statistics
- **Model Export**: Export trained models for deployment
- **API Management**: RESTful API endpoints for integration

## 🏗️ Project Structure

```
├── apps/
│   ├── web/          # React Router web application
│   └── mobile/       # Expo React Native mobile application
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (For mobile) Expo CLI and development environment

### Web Application

1. Navigate to the web directory:
```bash
cd apps/web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4000` (or the port shown in terminal)

### Mobile Application

1. Navigate to the mobile directory:
```bash
cd apps/mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start Expo:
```bash
npx expo start
```

## 📱 Application Pages

### Web Application Routes

- `/` - Dashboard with KPIs and quick actions
- `/dataset-upload` - Upload new datasets
- `/preprocessing` - Data preprocessing pipeline
- `/training` - Model training configuration and execution
- `/results` - View training results and analytics
- `/model-export` - Export trained models
- `/detection` - Real-time intrusion detection
- `/api-management` - API endpoint management

## 🛠️ Tech Stack

### Web Application
- **Framework**: React Router v7
- **UI**: Tailwind CSS, Chakra UI, Shadcn UI
- **State Management**: Zustand, TanStack Query
- **Backend**: Hono.js with React Router Server
- **Database**: Neon Database (PostgreSQL)
- **Authentication**: Auth.js (@auth/core)

### Mobile Application
- **Framework**: Expo Router v5
- **Runtime**: React Native 0.79
- **UI**: React Native with Tailwind CSS
- **State Management**: Zustand, TanStack Query

## 📊 Supported Datasets

- NSL-KDD
- CICIDS2017
- UNSW-NB15
- Custom datasets (CSV, JSON, PCAP)

## 🧠 Model Architectures

- **CNN + LSTM Hybrid**: Convolutional layers followed by LSTM for sequential patterns
- **CNN + GRU Hybrid**: Convolutional layers with GRU for faster training
- **CNN + LSTM + Attention**: Enhanced model with attention mechanism
- **Bidirectional LSTM + CNN**: Bidirectional LSTM with CNN for complex patterns

## 📝 API Endpoints

- `POST /api/datasets/upload` - Upload dataset
- `GET /api/datasets/download` - Download dataset
- `POST /api/training/start` - Start model training
- `GET /api/auth/token` - Authentication token
- `GET /api/auth/expo-web-success` - Mobile authentication callback

## 🔒 Security

- JWT-based authentication
- Secure cookie handling
- Environment variable protection
- Secure API endpoints

## 📄 License

This project is part of an academic/research project on AI-Powered Intrusion Detection Systems.

## 👤 Author

Rajesh Vulasala

## 🔗 Repository

GitHub: [https://github.com/RajeshVulasala/AI-Powered-Intrusion-Detection-System-Using-Hybrid-Deep-Learning-Models](https://github.com/RajeshVulasala/AI-Powered-Intrusion-Detection-System-Using-Hybrid-Deep-Learning-Models)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

