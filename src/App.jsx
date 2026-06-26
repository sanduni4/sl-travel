import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AttractionDetail from "./pages/AttractionDetail";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { getFavorites, toggleFavorite } from "./utils/storage";
import "./styles/global.css";
import { FiMap } from "react-icons/fi";
import LocationService from "./pages/LocationService";
import { attractions } from "./data/attractions";

export default function App() {
  // Initialize favorites from LocalStorage
  const [favorites, setFavorites] = useState(() => getFavorites());

  function handleToggleFavorite(id) {
    const updated = toggleFavorite(id);
    setFavorites(updated);
  }

 useEffect(() => {
    function handleStorage(e) {
      if (e.key === "sl_travel_favorites") {
        setFavorites(getFavorites());
      }
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const savedCount = attractions.filter((a) =>
  favorites.includes(a.id)
).length;

  return (
    <BrowserRouter>
<Navbar favCount={savedCount} />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />
        <Route
          path="/attraction/:id"
          element={<AttractionDetail favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />

        <Route
          path="/location"
          element={<LocationService favorites={favorites} />}
        />

        <Route path="/profile" element={<Profile />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <main className="page-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="empty-state">
                <div className="empty-icon">
                  <FiMap />
                </div>
                <h3>Page not found</h3>
                <p>This path doesn't exist in our travel guide.</p>
                <a href="/" className="btn btn-primary" style={{ marginTop: "var(--space-md)" }}>
                  Go Home
                </a>
              </div>
            </main>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
