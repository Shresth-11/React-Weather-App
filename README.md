# ☀️ SkyCast (React.js Weather Forecast App)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Material UI](https://img.shields.io/badge/Material--UI-6.4-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-f2693f?logo=google-cloud&logoColor=white)](https://openweathermap.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?logo=vercel&logoColor=white)](https://vercel.com/)

**SkyCast** is a premium, beautifully styled real-time weather broadcasting application built with **React 19**, **Vite**, and **Material UI**. It leverages the **OpenWeatherMap API** to fetch up-to-the-minute atmospheric conditions for any city globally, rendering interactive, responsive weather dashboard cards that dynamically adjust their background imagery based on local thermal and environmental stats.

---

## ✨ Features

- 🔍 **Global City Search:** Instantly fetch precise atmospheric data for any city worldwide using the **OpenWeatherMap API**.
- 🌦️ **Adaptive Graphic Display:** Beautiful card headers dynamically swap background illustrations matching the climate:
  - ❄️ **Cold/Winter:** Snow-dusted landscapes for low-temperature climates.
  - ☀️ **Hot/Sunny:** High-luminance sun illustrations for dry or warm forecasts.
  - 🌧️ **Rainy:** Misty rain illustrations for high-humidity or storm forecasts.
- 📊 **Rich Meteorological Data:** Detailed analytics cards displaying:
  - Current Temperature & Thermal Sensation ("Feels Like").
  - Humidity levels & Wind metrics.
  - Minimum and Maximum daily temperature limits.
- 🎨 **Responsive Material Design:** Fully styled using high-end Material UI elements (`Card`, `CardContent`, `CardMedia`, `Typography`) and responsive input components.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core Engine:** [React 19](https://react.dev/)
- **Build System:** [Vite v6](https://vite.dev/)
- **Component & Design Framework:** [Material UI (MUI) v6](https://mui.com/)
- **Styling Architecture:** [Emotion CSS](https://emotion.sh/) & Vanilla CSS variables
- **Data Source Engine:** [OpenWeatherMap API (Current Weather Data)](https://openweathermap.org/api)

---

## 📂 Project Architecture

```bash
React-Weather-App/
├── public/                 # Static public assets (Vite logo, weather icons)
├── src/
│   ├── assets/             # Environmental images (summer, winter, rain)
│   ├── App.css             # Component-level styling resetting variables
│   ├── App.jsx             # Main container wrapping WeatherApp component
│   ├── index.css           # Global typography definitions
│   ├── InfoBox.css         # Styling metrics for weather dashboard cards
│   ├── InfoBox.jsx         # Card renderer mapping dynamic climate icons
│   ├── main.jsx            # React entry point mounting the DOM
│   ├── SearchBox.css       # Forms and input container coordinates
│   ├── SearchBox.jsx       # OpenWeather API integration and query controller
│   ├── WeatherApp.jsx      # Core state controller orchestrating searches and views
│   └── WeatherApp.css
├── eslint.config.js        # Linter rules and structural parameters
├── index.html              # HTML DOM mounting root
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Compiler parameters and Vite integrations
```

---

## ⚙️ Environment Setup & API Configuration

To get SkyCast working locally, you will need an API Key from OpenWeatherMap.

1. Sign up on [OpenWeatherMap](https://openweathermap.org/) and navigate to your API Keys dashboard.
2. In `src/SearchBox.jsx`, insert your unique API Key:
   ```javascript
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

---

## 🚀 Getting Started

Launch SkyCast locally in just a few CLI actions:

### 1. Clone the Repository
```bash
git clone https://github.com/Shresth-11/React-Weather-App.git
cd React-Weather-App
```

### 2. Install Project Dependencies
Ensure Node.js (v18+) is installed.
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to explore the skies!

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

*Crafted with 🩵 by [Shresth-11](https://github.com/Shresth-11)* 🚀
