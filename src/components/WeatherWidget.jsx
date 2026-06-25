/**
 * WeatherWidget — shows current weather for an attraction city
 * Handles loading, error, and demo mode states
 */

import { useState, useEffect } from "react";
import { fetchWeather, getWeatherIconUrl } from "../services/weather";
import "./WeatherWidget.css";
import { FiCloud,FiAlertTriangle } from "react-icons/fi";

export default function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setWeather(null);

    fetchWeather(city)
      .then(data => { if (!cancelled) setWeather(data); })
      .catch(err => { if (!cancelled) setError(err.message || "Failed to load weather."); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [city]);

  if (loading) {
    return (
      <div className="weather-widget weather-widget--loading">
        <div className="spinner" style={{ padding: "var(--space-md)" }}></div>
        <span>Loading weather…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget weather-widget--error">
        <span className="weather-widget__error-icon">
          <FiAlertTriangle />
        </span>      
          <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-widget__header">
        <span className="weather-widget__label">🌤 Current Weather</span>
        {weather.demo && (
          <span className="weather-widget__demo-tag">Demo data</span>
        )}
      </div>
      <div className="weather-widget__main">
        <img
          className="weather-widget__icon"
          src={getWeatherIconUrl(weather.icon)}
          alt={weather.description}
          width={60}
          height={60}
        />
        <div className="weather-widget__temp">
          <span className="weather-widget__deg">{weather.temp}°C</span>
          <span className="weather-widget__desc">{weather.description}</span>
        </div>
      </div>
      <div className="weather-widget__details">
        <div className="weather-widget__stat">
          <span className="weather-widget__stat-label">Feels like</span>
          <span className="weather-widget__stat-val">{weather.feelsLike}°C</span>
        </div>
        <div className="weather-widget__stat">
          <span className="weather-widget__stat-label">Humidity</span>
          <span className="weather-widget__stat-val">{weather.humidity}%</span>
        </div>
        <div className="weather-widget__stat">
          <span className="weather-widget__stat-label">Wind</span>
          <span className="weather-widget__stat-val">{weather.windSpeed} m/s</span>
        </div>
      </div>
      {weather.demo && (
        <p className="weather-widget__note">
          Add an OpenWeatherMap API key in <code>src/services/weather.js</code> for live data.
        </p>
      )}
    </div>
  );
}
