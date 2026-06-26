export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            reject("Location permission denied.");
            break;
          case err.POSITION_UNAVAILABLE:
            reject("Location unavailable.");
            break;
          case err.TIMEOUT:
            reject("Location request timed out.");
            break;
          default:
            reject("Unknown location error.");
        }
      },
      { timeout: 10000, maximumAge: 300000 }
    );
  });
}

/**
 * Haversine formula: calculate distance in km between two lat/lng points
 */
export function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

/** Build a Google Maps URL for given coordinates */
export function getMapsUrl(lat, lng, label = "") {
  const query = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${query}&center=${lat},${lng}`;
}
