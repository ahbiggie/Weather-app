import 'dotenv/config';
import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

// PHASE 1: The Landing Page
app.get('/', (req, res) => {
    // Just render the page without data so the user can see the search bar
    res.render('index.ejs', { data: null, error: null });
});
// PHASE 2: The Action (POST)
app.post('/report', async (req, res) => {
    const cityName = req.body.city;

    try {
        // 1. Get Coordinates (Geocoding)
        // Critical Thinking: We use this endpoint to turn a Name into Math (Lat/Lon)
        const geoRes = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);

        if (geoRes.data.length === 0) {
            throw new Error("City not found");
        }

        const { lat, lon } = geoRes.data[0];

        // 2. Get Forecast using those coords
        // Note: I added &units=metric to get Celsius!
        const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

        const data = forecastRes.data;

        // 3. Your brilliant filter logic
        const dailyForecast = data.list.filter((day) => day.dt_txt.includes("12:00:00"));
        data.list = dailyForecast;

        res.render('index.ejs', { data, error: null });

    } catch (error) {
        // Critical Thinking: If the API fails, we don't want a blank screen.
        // we send an error message back to the UI.
        res.render('index.ejs', { data: null, error: "Pick a valid city, please!" });
    }
});
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})