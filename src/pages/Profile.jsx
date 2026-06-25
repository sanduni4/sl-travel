/**
 * Profile Page — traveller dashboard, saved travel info, app preferences
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMapPin,
  FiCompass,
  FiSettings,
  FiBell,
  FiGlobe,
  FiChevronRight,
  FiCloud,
} from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { getUserLocation } from "../utils/geo";
import { fetchWeatherByCoords } from "../services/weather";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState("");
  const [currentLocation, setCurrentLocation] = useState("Getting location...");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    getUserLocation()
      .then(async ({ lat, lng }) => {
        const data = await fetchWeatherByCoords(lat, lng);
        setWeather(data);
        setCurrentLocation(data.city || "Current Location");
      })
      .catch(() => {
        setCurrentLocation("Location not allowed");
      });
  }, []);

  return (
    <main className="profile-page page-content">
      <section className="profile-dashboard">
        <h1 className="dashboard-greeting">{greeting} 👋</h1>
        <p className="dashboard-subtitle">Ready to explore Sri Lanka today?</p>

        <div className="dashboard-info-grid">
          <div className="dashboard-info-card">
            <FiMapPin />
            <div>
              <span>Current Location</span>
              <strong>{currentLocation}</strong>
            </div>
          </div>

          <div className="dashboard-info-card">
            <FiCloud />
            <div>
              <span>Today&apos;s Weather</span>
              <strong>
                {weather ? `${weather.temp}°C • ${weather.description}` : "Loading..."}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="profile-card">
          <h2 className="profile-section-title">Travel Preferences</h2>

          <button
            type="button"
            className="profile-menu-item"
            onClick={() => navigate("/favorites")}
          >
            <FiHeart className="profile-menu-icon" />

            <div className="profile-menu-content">
              <strong>Saved Attractions</strong>
              <span>View your favourite destinations</span>
            </div>

            <FiChevronRight className="profile-arrow" />
          </button>

          <button
            type="button"
            className="profile-menu-item"
            onClick={() => navigate("/location")}
          >
            <FiMapPin className="profile-menu-icon" />

            <div className="profile-menu-content">
              <strong>Location Services</strong>
              <span>View your current location and distance to favourite places</span>
            </div>

            <FiChevronRight className="profile-arrow" />
          </button>

          <button
            type="button"
            className="profile-menu-item"
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                document.getElementById("explore-category")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 100);
            }}
          >
            <FiCompass className="profile-menu-icon" />

            <div className="profile-menu-content">
              <strong>Explore Mode</strong>
              <span>Historical, Nature and Hotels</span>
            </div>

            <FiChevronRight className="profile-arrow" />
          </button>
        </section>

        <section className="profile-card">
          <h2 className="profile-section-title">App Settings</h2>

          <div className="profile-info-item">
            <FiBell className="profile-info-icon" />

            <div className="profile-info-content">
              <strong>Travel Updates</strong>
              <span>Weather and attraction updates</span>
            </div>
          </div>

          <div className="profile-info-item">
            <FiGlobe className="profile-info-icon" />

            <div className="profile-info-content">
              <strong>Language</strong>
              <span>English</span>
            </div>
          </div>

          <div className="profile-info-item">
            <FiSettings className="profile-info-icon" />

            <div className="profile-info-content">
              <strong>App Version</strong>
              <span>v1.0.0 Mobile Web App</span>
            </div>
          </div>
        </section>

        <section className="profile-about-box">
          <MdTravelExplore />
          <h3>Discover Sri Lanka</h3>
          <p>
            Explore beautiful attractions, check weather, save favourites, and
            get directions with Sri Lanka Travel Companion.
          </p>
        </section>
      </div>
    </main>
  );
}