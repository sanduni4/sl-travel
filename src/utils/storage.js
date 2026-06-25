/**
 * LocalStorage utilities for persisting favorites and user preferences
 */

const FAVORITES_KEY = "sl_travel_favorites";
const PREFS_KEY = "sl_travel_prefs";

/** Retrieve saved favorite IDs array from localStorage */
export function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Save updated favorites array to localStorage */
export function saveFavorites(ids) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } catch (err) {
    console.error("Failed to save favorites:", err);
  }
}

/** Toggle a single attraction ID in/out of favorites */
export function toggleFavorite(id) {
  const current = getFavorites();
  const updated = current.includes(id)
    ? current.filter((f) => f !== id)
    : [...current, id];
  saveFavorites(updated);
  return updated;
}

/** Check if an attraction ID is a favorite */
export function isFavorite(id) {
  return getFavorites().includes(id);
}

/** Save user preferences (e.g. last category filter) */
export function savePrefs(prefs) {
  try {
    const existing = getPrefs();
    localStorage.setItem(PREFS_KEY, JSON.stringify({ ...existing, ...prefs }));
  } catch (err) {
    console.error("Failed to save prefs:", err);
  }
}

/** Get user preferences */
export function getPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
