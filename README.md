# Weather App

A dynamic Node.js weather application that provides a **5-Day Weather Forecast** for any city. It features a modern, glassmorphism UI that changes themes based on the weather conditions.

## Tech Stack

- **Frontend:** [EJS](https://ejs.co/), CSS3 (Variables, Flexbox, Glassmorphism)
- **Backend:** [Express.js](https://expressjs.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Environment:** Node.js

## Features

- **5-Day Forecast:** Displays daily weather summaries for the next 5 days (cherry-picked for 12:00 PM).
- **Dynamic Themes:** Background and text colors adapt to weather conditions (Clear, Clouds, Rain, Snow, Thunderstorm).
- **Robust Error Handling:** Gracefully handles invalid city names and API errors.
- **Responsive Design:** Beautiful glassmorphism cards that look great on any device.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/api).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahbiggie/Weather-app.git
   cd Weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```env
   API_KEY=your_api_key_here
   PORT=3000
   ```

## Usage

1. Start the server (development mode with nodemon):
   ```bash
   npm run dev
   # OR simply
   npx nodemon index.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Enter a city name to see the 5-day forecast with the theming in action!

## Project Structure

```text
├── public/
│   └── styles/
│       └── main.css   # Main stylesheet with dynamic themes
├── views/
│   └── index.ejs      # EJS template
├── index.js           # Server logic (Express + API integration)
├── package.json       # Dependencies
└── .env               # Environment variables
```
