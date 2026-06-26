import { Link } from "react-router-dom";
import { attractions } from "../data/attractions";
import AttractionCard from "../components/AttractionCard";
import "./Favorites.css";
import { FiTrash2, FiBookmark, FiHeart, FiCompass } from "react-icons/fi";


export default function Favorites({ favorites, onToggleFavorite }) {
  const savedAttractions = attractions.filter((a) => favorites.includes(a.id));

  function handleClearAll() {
    if (window.confirm("Remove all favourites? This cannot be undone.")) {
      savedAttractions.forEach((a) => onToggleFavorite(a.id));
    }
  }

  return (
    <main className="favorites-page page-content">
      <div className="container">
        {/* Page Header */}
        <div className="favorites-header">
          <div>
            <h1 className="favorites-title">My Favourites</h1>
            <p className="favorites-subtitle">
              {savedAttractions.length > 0
                ? `${savedAttractions.length} attraction${savedAttractions.length !== 1 ? "s" : ""} saved`
                : "No favourites yet"}
            </p>
          </div>
          {savedAttractions.length > 0 && (
            <button className="btn btn-outline favorites-clear" onClick={handleClearAll}>
              <FiTrash2 />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Persistence note */}
        {savedAttractions.length > 0 && (
          <div className="banner banner-info favorites-note">
            <FiBookmark className="favorites-note__icon" />

            <p>
              Your favourites are saved locally and will persist after closing the browser.
            </p>
          </div>
          
        )}

        {/* Grid of saved attractions */}
        {savedAttractions.length > 0 ? (
          <div className="attractions-grid" style={{ marginTop: "var(--space-lg)" }}>
            {savedAttractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state favorites-empty">
            <div className="empty-icon">
              <FiHeart />
            </div>
            <h3>No favourites yet</h3>
            <p>
              Tap the heart icon on any attraction card to save it here.
              Your saved places persist even after closing the browser.
            </p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: "var(--space-lg)" }}>
              <>
                <FiCompass />
                <span>Explore Attractions</span>
              </>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
