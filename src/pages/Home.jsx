/**
 * Home Page — main discovery page with hero, search, category filter, and attraction grid
 */

import { useState, useEffect, useMemo } from "react";
import { attractions } from "../data/attractions";
import { savePrefs, getPrefs } from "../utils/storage";
import AttractionCard from "../components/AttractionCard";
import CategoryFilter from "../components/CategoryFilter";
import heroVideo from "../video/sri-lanka-travel.mp4";
import { FiSearch } from "react-icons/fi";
import "./Home.css";

export default function Home({ favorites, onToggleFavorite }) {
  const savedPrefs = getPrefs();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(savedPrefs.category || "All");

  useEffect(() => {
    savePrefs({ category });
  }, [category]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return attractions.filter((a) => {
      const matchCat = category === "All" || a.category === category;

      const matchSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.shortDescription.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [search, category]);

  function handleCategoryChange(cat) {
    setCategory(cat);
    setSearch("");
  }

  return (
    <main className="home page-content">
      {/* Hero Banner */}
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero__overlay" />

        <div className="container hero__content">
          <p className="hero__eyebrow">Discover Sri Lanka</p>

          <h1 className="hero__title">
            The Pearl of the
            <br />
            Indian Ocean
          </h1>

          <p className="hero__subtitle">
            Explore ancient wonders, lush landscapes, and tropical paradise
          </p>

          <div className="search-bar hero__search">
            <span className="search-icon" aria-hidden>
              <FiSearch />
            </span>

            <input
              type="search"
              placeholder="Search attractions, places…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search attractions"
              maxLength={80}
            />

            {search && (
              <button
                className="clear-btn"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-bar">
          <div className="stats-bar__item">
            <span className="stats-bar__num">{attractions.length}</span>
            <span className="stats-bar__label">Attractions</span>
          </div>

          <div className="stats-bar__divider" />

          <div className="stats-bar__item">
            <span className="stats-bar__num">3</span>
            <span className="stats-bar__label">Categories</span>
          </div>

          <div className="stats-bar__divider" />

          <div className="stats-bar__item">
            <span className="stats-bar__num">{favorites.length}</span>
            <span className="stats-bar__label">Saved</span>
          </div>
        </div>

        <section id="explore-category" className="home-section">
           <h2 className="section-title">Explore by Category</h2>
          <CategoryFilter selected={category} onChange={handleCategoryChange} />
        </section>

        <section className="home-section">
          <div className="results-header">
            <h2 className="section-title">
              {search
                ? `Results for "${search}"`
                : category === "All"
                ? "All Attractions"
                : category}
            </h2>

            <span className="results-count">{filtered.length} found</span>
          </div>

          {filtered.length > 0 ? (
            <div className="attractions-grid">
              {filtered.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  isFavorite={favorites.includes(attraction.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No results found</h3>
              <p>Try adjusting your search or selecting a different category</p>

              <button
                className="btn btn-primary"
                style={{ marginTop: "var(--space-md)" }}
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}