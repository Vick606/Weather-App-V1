import './style.css';

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherData(location) {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        return processWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

function processWeatherData(data) {
    return {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
    };
}

document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = document.getElementById('location-input').value;
    const loadingElement = document.getElementById('loading');
    const displayElement = document.getElementById('weather-display');

    loadingElement.style.display = 'block';
    displayElement.innerHTML = '';

    try {
        const weatherData = await getWeatherData(location);
        displayWeather(weatherData);
    } catch (error) {
        displayElement.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    } finally {
        loadingElement.style.display = 'none';
    }
});

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fas fa-sun',
        '01n': 'fas fa-moon',
        '02d': 'fas fa-cloud-sun',
        '02n': 'fas fa-cloud-moon',
        '03d': 'fas fa-cloud',
        '03n': 'fas fa-cloud',
        '04d': 'fas fa-cloud',
        '04n': 'fas fa-cloud',
        '09d': 'fas fa-cloud-showers-heavy',
        '09n': 'fas fa-cloud-showers-heavy',
        '10d': 'fas fa-cloud-rain',
        '10n': 'fas fa-cloud-rain',
        '11d': 'fas fa-bolt',
        '11n': 'fas fa-bolt',
        '13d': 'fas fa-snowflake',
        '13n': 'fas fa-snowflake',
        '50d': 'fas fa-smog',
        '50n': 'fas fa-smog'
    };

    return iconMap[iconCode] || 'fas fa-question';
}

function displayWeather(weatherData) {
    const displayElement = document.getElementById('weather-display');
    const iconClass = getWeatherIcon(weatherData.icon);
    
    displayElement.innerHTML = `
        <div class="weather-card">
            <i class="${iconClass} weather-icon"></i>
            <h2>${weatherData.location}</h2>
            <p class="temperature">${Math.round(weatherData.temperature)}°C</p>
            <p class="description">${weatherData.description}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
        </div>
    `;
}