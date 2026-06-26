import { useNavigate } from "react-router-dom";
import "./AttractionCard.css";
import {
  FiCompass,
  FiMap,
  FiFeather,
  FiHome,
  FiMapPin,
  FiHeart
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


const CATEGORY_EMOJI = {
    All: <FiCompass />,
    Historical: <FiMap />,
    Nature: <FiFeather />,
    Hotels: <FiHome />,
};

export default function AttractionCard({ attraction, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();

  function handleCardClick(e) {
    // Don't navigate if clicking the fav button
    if (e.target.closest(".fav-btn")) return;
    navigate(`/attraction/${attraction.id}`);
  }

  function handleFavClick(e) {
    e.stopPropagation();
    onToggleFavorite(attraction.id);
  }

  const stars = "★".repeat(Math.round(attraction.rating)) + "☆".repeat(5 - Math.round(attraction.rating));

  return (
    <article className="attraction-card card" onClick={handleCardClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === "Enter" && navigate(`/attraction/${attraction.id}`)}
      aria-label={`View details for ${attraction.name}`}>

      {/* Image */}
      <div className="attraction-card__img-wrap">
        <img
          src={attraction.image}
          alt={attraction.name}
          loading="lazy"
          className="attraction-card__img"
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&q=60"; }}
        />
        {/* Category badge overlay */}
        <span className={`badge badge-${attraction.category} attraction-card__badge`}>
          {CATEGORY_EMOJI[attraction.category]} {attraction.category}
        </span>
        {/* Fav button overlay */}
        <button
          className={`fav-btn attraction-card__fav${isFavorite ? " active" : ""}`}
          onClick={handleFavClick}
          aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
          title={isFavorite ? "Remove from favourites" : "Save to favourites"}
        >
          {isFavorite ? <FaHeart /> : <FiHeart />}
        </button>
      </div>

      {/* Content */}
      <div className="attraction-card__body">
        <div className="attraction-card__rating">
          <span className="stars" aria-label={`Rating ${attraction.rating} out of 5`}>{stars}</span>
          <span className="attraction-card__rating-num">{attraction.rating}</span>
        </div>
        <h3 className="attraction-card__name">{attraction.name}</h3>
        <p className="attraction-card__desc">{attraction.shortDescription}</p>
        <div className="attraction-card__footer">
            <span className="attraction-card__location">
              <FiMapPin />
              {attraction.location.split(",")[0]}
            </span>
          <button
            className="btn btn-primary attraction-card__cta"
            onClick={e => { e.stopPropagation(); navigate(`/attraction/${attraction.id}`); }}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
