
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY ; 

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


export async function fetchWeather(city) {
  if (!API_KEY || API_KEY === "demo") {
    return getMockWeather(city);
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(city)},LK&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Weather fetch failed for city "${city}": ${res.statusText}`);
    if (res.status === 401) throw new Error("Invalid API key. Using demo data.");
    if (res.status === 404) throw new Error(`City "${city}" not found.`);
    throw new Error(`Weather fetch failed: ${res.statusText}`);
  }

  const data = await res.json();
  return {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    city: data.name,
    demo: false,
  };
}

// Mock weather data generator for demo mode
function getMockWeather(city) {
  const conditions = [
    { description: "partly cloudy", icon: "02d" },
    { description: "clear sky", icon: "01d" },
    { description: "light rain", icon: "10d" },
    { description: "scattered clouds", icon: "03d" },
    { description: "overcast clouds", icon: "04d" },
  ];
  const idx = city.length % conditions.length;
  const temp = 26 + (city.charCodeAt(0) % 8); // Vary between 26-34°C

  return {
    temp,
    feelsLike: temp + 2,
    humidity: 70 + (city.length % 20),
    description: conditions[idx].description,
    icon: conditions[idx].icon,
    windSpeed: (2 + (city.length % 5)).toFixed(1),
    city,
    demo: true,
  };
}

/** Get the OpenWeatherMap icon URL */
export function getWeatherIconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export async function fetchWeatherByCoords(lat, lng) {
  if (!API_KEY || API_KEY === "demo") {
    return {
      temp: 29,
      feelsLike: 31,
      humidity: 78,
      description: "partly cloudy",
      icon: "02d",
      windSpeed: "3.5",
      city: "Your Location",
      demo: true,
    };
  }

  const url = `${BASE_URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Weather data unavailable.");
  }

  const data = await res.json();

  return {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    city: data.name,
    demo: false,
  };
}
