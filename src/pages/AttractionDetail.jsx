import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { attractions } from "../data/attractions";
import { getUserLocation, calculateDistance, getMapsUrl } from "../utils/geo";
import WeatherWidget from "../components/WeatherWidget";
import "./AttractionDetail.css";
import {
  FiArrowLeft,
  FiHeart,
  FiMapPin,
  FiClock,
  FiTag,
  FiMap,
  FiRefreshCw,
  FiAlertTriangle
} from "react-icons/fi";

import { FaHeart } from "react-icons/fa";

import {
  MdTempleBuddhist,
  MdForest,
  MdHotel,
  MdTravelExplore
} from "react-icons/md";


const CATEGORY_ICON = {
  Historical: <MdTempleBuddhist />,
  Nature: <MdForest />,
  Hotels: <MdHotel />
};

export default function AttractionDetail({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const attraction = attractions.find((a) => a.id === Number(id));

  const [distance, setDistance] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const isFav = favorites.includes(attraction?.id);

  // Auto-request location on mount
  useEffect(() => {
    if (!attraction) return;
    setLocationLoading(true);
    getUserLocation()
      .then(({ lat, lng }) => {
        const dist = calculateDistance(lat, lng, attraction.lat, attraction.lng);
        setDistance(dist);
      })
      .catch((err) => setLocationError(err))
      .finally(() => setLocationLoading(false));
  }, [attraction]);

  if (!attraction) {
    return (
      <main className="page-content">
        <div className="container">
          <div className="empty-state" style={{ paddingTop: "var(--space-2xl)" }}>
            <div className="empty-icon">😕</div>
            <h3>Attraction not found</h3>
            <p>This attraction doesn't exist or has been removed.</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: "var(--space-md)" }}>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const mapsUrl = getMapsUrl(attraction.lat, attraction.lng, attraction.name);
  const stars = "★".repeat(Math.round(attraction.rating)) + "☆".repeat(5 - Math.round(attraction.rating));

  return (
    <main className="detail-page page-content">
      {/* Hero Image */}
      <div className="detail-hero">
        {!imgLoaded && <div className="detail-hero__skeleton" />}
        <img
          className={`detail-hero__img${imgLoaded ? " loaded" : ""}`}
          src={attraction.image}
          alt={attraction.name}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=60";
            setImgLoaded(true);
          }}
        />
        <div className="detail-hero__overlay" />

        {/* Back button */}
        <button className="detail-hero__back btn" onClick={() => navigate(-1)} aria-label="Go back">
          <>
            <FiArrowLeft />
            <span>Back</span>
          </>
        </button>

        {/* Fav button */}
        <button
          className={`fav-btn detail-hero__fav${isFav ? " active" : ""}`}
          onClick={() => onToggleFavorite(attraction.id)}
          aria-label={isFav ? "Remove from favourites" : "Save to favourites"}
        >
          {isFav ? <FaHeart /> : <FiHeart />}
        </button>

        {/* Title overlay */}
        <div className="detail-hero__info">
          <span className={`badge badge-${attraction.category}`}>
            {CATEGORY_ICON[attraction.category]}
            <span>{attraction.category}</span>
          </span>

          <h1 className="detail-hero__name">{attraction.name}</h1>
          <div className="detail-hero__rating">
            <span className="stars">{stars}</span>
            <span className="detail-hero__rating-num">{attraction.rating} / 5</span>
          </div>
        </div>
      </div>


      <div className="container detail-body">
        {/* ── Main column ── */}
        <div className="detail-main-col">
          {/* Quick Info Strip */}
          <div className="detail-quick-info">
            <div className="detail-quick-info__item">
              <span className="detail-quick-info__icon"><span className="detail-quick-info__icon">
                <FiMapPin />
              </span>
              </span>
              <div>
                <span className="detail-quick-info__label">Location</span>
                <span className="detail-quick-info__val">{attraction.location}</span>
              </div>
            </div>
            <div className="detail-quick-info__item">
              <span className="detail-quick-info__icon"><span className="detail-quick-info__icon">
                <FiClock />
              </span>
              </span>
              <div>
                <span className="detail-quick-info__label">Opening Hours</span>
                <span className="detail-quick-info__val">{attraction.openHours}</span>
              </div>
            </div>
            <div className="detail-quick-info__item">
              <span className="detail-quick-info__icon">
                <span className="detail-quick-info__icon">
                  <FiTag />
                </span>

              </span>
              <div>
                <span className="detail-quick-info__label">Entry Fee</span>
                <span className="detail-quick-info__val">{attraction.entryFee}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="detail-section">
            <h2 className="detail-section__title">* About</h2>
            <p className="detail-description">{attraction.fullDescription}</p>
          </section>

          {/* Tags */}
          <div className="detail-tags">
            {attraction.tags.map((tag) => (
              <span key={tag} className="detail-tag">#{tag}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <section className="detail-section detail-actions">
            <a
              className="btn btn-primary detail-actions__maps"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <FiMap />
                <span>Open in Google Maps</span>
              </>

            </a>
            <button
              className={`btn ${isFav ? "btn-danger" : "btn-outline"} detail-actions__fav`}
              onClick={() => onToggleFavorite(attraction.id)}
            >
              <>
                {isFav ? <FaHeart /> : <FiHeart />}
                <span>
                  {isFav ? "Remove Favourite" : "Save to Favourites"}
                </span>
              </>

            </button>
          </section>

          <p className="detail-coords">
            {attraction.lat}°N · {attraction.lng}°E
          </p>
        </div>

        {/* ── Side column (stacks below on mobile, sticky aside on desktop) ── */}
        <div className="detail-side-col">
          {/* Distance from User */}
          <section className="detail-section">
            <h2 className="detail-section__title">* Distance</h2>
            <div className="distance-card">
              {locationLoading && (
                <div className="distance-card__loading">
                  <div className="spinner" style={{ padding: "8px" }}></div>
                  <span>Getting your location…</span>
                </div>
              )}
              {!locationLoading && distance && (
                <div className="distance-card__result">
                  <span className="distance-card__km">{distance} km</span>
                  <span className="distance-card__label">from you</span>
                </div>
              )}
              {!locationLoading && locationError && (
                <div className="distance-card__error">
                  <span><>
                    <FiAlertTriangle />
                    <span>{locationError}</span>
                  </>
                  </span>
                  <button
                    className="btn btn-outline"
                    style={{ fontSize: "0.78rem", height: "38px", minHeight: "38px" }}
                    onClick={() => {
                      setLocationError(null);
                      setLocationLoading(true);
                      getUserLocation()
                        .then(({ lat, lng }) => setDistance(calculateDistance(lat, lng, attraction.lat, attraction.lng)))
                        .catch((e) => setLocationError(e))
                        .finally(() => setLocationLoading(false));
                    }}
                  >
                    <>
                      <FiRefreshCw />
                      <span>Retry</span>
                    </>

                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Weather */}
          <section className="detail-section">
            <h2 className="detail-section__title">* Weather</h2>
            <WeatherWidget city={attraction.city} />
          </section>
        </div>
      </div>
    </main>
  );
}
