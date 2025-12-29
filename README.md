# Weather App

A real-time weather application built with Node.js that provides current weather information for any city using a public weather API.

## Tech Stack

- **View Engine:** [EJS](https://ejs.co/) (Embedded JavaScript templates)
- **Backend:** [Express.js](https://expressjs.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Environment:** Node.js

## Features

- Search for current weather data by city name.
- Displays temperature, humidity, wind speed, and weather descriptions.
- Dynamic rendering of weather icons and data.
- Error handling for invalid city names or API failures.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- An API key from a public weather provider (e.g., OpenWeatherMap).

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

1. Start the server:
   ```bash
   nodemon index.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Enter a city name in the search bar to get the current weather report.

## Project Structure

```text
├── public/          # Static files (CSS, Images)
├── views/           # EJS templates
│   └── index.ejs    # Main application view
├── index.js           # Express server and API logic
├── package.json     # Project dependencies
└── .env             # Environment variables
```
