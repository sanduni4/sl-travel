import { useEffect, useState } from "react";
import { attractions } from "../data/attractions";
import { getUserLocation, calculateDistance } from "../utils/geo";
import {
  FiMapPin,
  FiHeart,
  FiNavigation,
  FiAlertTriangle,
  FiRefreshCw,
} from "react-icons/fi";
import "./LocationService.css";

export default function LocationService({ favorites }) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const favoritePlaces = attractions.filter((a) => favorites.includes(a.id));

  function loadLocation() {
    setLoading(true);
    setError("");

    getUserLocation()
      .then((pos) => {
        setLocation(pos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <main className="location-page page-content">
      <div className="container">
        <section className="location-card">
          <FiMapPin className="location-main-icon" />
          <h1>Location Services</h1>
          <p>View your current location and distance to saved attractions.</p>

          {loading && <p className="location-status">Getting your location...</p>}

          {error && (
            <div className="location-error">
              <FiAlertTriangle />
              <span>{error}</span>
            </div>
          )}

          {location && (
            <div className="location-result">
              <p>
                <strong>Latitude:</strong> {location.lat.toFixed(6)}
              </p>
              <p>
                <strong>Longitude:</strong> {location.lng.toFixed(6)}
              </p>

              <a
                className="btn btn-primary location-map-btn"
                href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                <FiMapPin />
                <span>Open My Location</span>
              </a>
            </div>
          )}

          <button className="btn btn-outline location-retry-btn" onClick={loadLocation}>
            <FiRefreshCw />
            <span>Refresh Location</span>
          </button>
        </section>

        <section className="location-card">
          <h2 className="location-section-title">
            <FiHeart /> Favourite Places Distance
          </h2>

          {favoritePlaces.length === 0 ? (
            <p className="location-empty">No favourite places saved yet.</p>
          ) : (
            <div className="location-list">
              {favoritePlaces.map((place) => {
                const distance = location
                  ? calculateDistance(
                      location.lat,
                      location.lng,
                      place.lat,
                      place.lng
                    )
                  : null;

                const directionUrl = location
                  ? `https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${place.lat},${place.lng}`
                  : "#";

                return (
                  <div className="location-place" key={place.id}>
                    <img src={place.image} alt={place.name} />

                    <div className="location-place__info">
                      <h3>{place.name}</h3>
                      <p>{place.location}</p>

                      {distance && (
                        <strong>{distance} km from your location</strong>
                      )}
                    </div>

                    {location && (
                      <a
                        className="location-place__nav"
                        href={directionUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Navigate to ${place.name}`}
                      >
                        <FiNavigation />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}