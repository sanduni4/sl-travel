# 🌴 Sri Lanka Travel Companion
### SENG 41293 — Mobile Web Application Development
**University of Kelaniya | Track B: Local Tour & Travel Web Guide**
**Closing Date: June 26, 2026**

---

## 📋 Project Overview

**Sri Lanka Travel Companion** is a fully responsive, mobile-first Single Page Application (SPA) that helps tourists discover and explore the best attractions across Sri Lanka. Users can browse, search, and filter attractions by category, check live weather, calculate real-time GPS distances, save favourites persistently, and open Google Maps directions — all from a smartphone browser.

**Assignment Track:** Track B — Local Tour & Travel Web Guide
**Advanced Feature Implemented:** HTML5 Geolocation API + Google Maps deep-linking

---

## 🚀 Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| React.js | 18.2.0 | UI component library |
| React Router DOM | 6.22.0 | SPA client-side routing |
| Vite | 5.1.0 | Build tool & dev server |
| CSS3 (Flexbox + Grid) | — | Mobile-first responsive layout |
| HTML5 Geolocation API | — | GPS distance calculation |
| LocalStorage API | — | Persistent favourites |
| Fetch API (async/await) | — | Weather data from OpenWeatherMap |
| OpenWeatherMap API | 2.5 | Live weather per attraction city |
| Google Maps URL API | — | Deep-link map navigation |
| JavaScript ES6+ | — | Arrow functions, destructuring, modules |

---

## 📁 Folder Structure

```
sl-travel/
├── index.html                  # App shell HTML
├── vite.config.js              # Vite configuration
├── package.json
├── README.md
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Root: Router + global state
    ├── styles/
    │   └── global.css          # Design system, tokens, utilities
    ├── components/
    │   ├── Navbar.jsx          # Top bar + bottom mobile nav
    │   ├── Navbar.css
    │   ├── AttractionCard.jsx  # Reusable attraction card
    │   ├── AttractionCard.css
    │   ├── CategoryFilter.jsx  # Horizontal chip filter bar
    │   ├── CategoryFilter.css
    │   ├── WeatherWidget.jsx   # Async weather display
    │   └── WeatherWidget.css
    ├── pages/
    │   ├── Home.jsx            # Search + filter + grid
    │   ├── Home.css
    │   ├── AttractionDetail.jsx # Full detail + geo + weather
    │   ├── AttractionDetail.css
    │   ├── Favorites.jsx       # Saved attractions
    │   ├── Favorites.css
    │   ├── About.jsx           # App information
    │   └── About.css
    ├── services/
    │   └── weather.js          # OpenWeatherMap Fetch service
    ├── data/
    │   └── attractions.js      # 12 Sri Lankan attractions dataset
    └── utils/
        ├── storage.js          # LocalStorage CRUD helpers
        └── geo.js              # Geolocation + Haversine formula
```

---

## ⚙️ Installation & Running on Localhost

### Prerequisites
- **Node.js** v18 or higher — [Download](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)

### Steps

```bash
# 1. Extract the zip / enter the project folder
cd sl-travel

# 2. Install dependencies (excludes node_modules from the zip)
npm install

# 3. Start the development server
npm run dev
```

The app will be available at: **http://localhost:5173**

### Production Build (optional)
```bash
npm run build    # Generates optimised dist/ folder
npm run preview  # Serves the production build locally
```

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---|---|---|
| Google Chrome | 90+ | ✅ Fully supported |
| Mozilla Firefox | 88+ | ✅ Fully supported |
| Safari (iOS/macOS) | 14+ | ✅ Fully supported |
| Microsoft Edge | 90+ | ✅ Fully supported |
| Samsung Internet | 14+ | ✅ Fully supported |

> **Tested viewport sizes:** iPhone SE, iPhone 14 Pro, Samsung Galaxy S20, Google Pixel 6 (via Chrome DevTools)

---

## 📱 Testing on Mobile Viewports (Viva Demo Steps)

1. Run `npm run dev` and open `http://localhost:5173` in Chrome
2. Press **F12** to open DevTools
3. Click the **Toggle Device Toolbar** icon (Ctrl+Shift+M)
4. Select device presets: iPhone 14, Samsung Galaxy S20, Pixel 6
5. Test: search, category filter, view detail, save favourite, check distance

---

## ✨ Features List

### Core Features
- [x] **Responsive Grid** — 12 Sri Lankan attractions in a 1/2/3/4-column adaptive grid
- [x] **Dynamic Search** — Real-time filtering by name, description, location, or tags
- [x] **Category Filter** — Chip buttons for All / Historical / Nature / Hotels
- [x] **Rich Detail View** — Large image, full description, hours, entry fee, tags
- [x] **Favourites System** — Heart icon on every card; persists via LocalStorage
- [x] **Favourites Page** — View/remove all saved attractions; clear-all option
- [x] **About Page** — Tech stack, API docs, assignment info

### Advanced Features (Geolocation API)
- [x] **GPS Distance** — Haversine formula distance from user to each attraction (km)
- [x] **Permission Handling** — Graceful error messages for denied/unavailable location
- [x] **Google Maps Deep-link** — "Open in Google Maps" button on every detail page

### API Integration
- [x] **OpenWeatherMap** — Async Fetch API for live weather per city
- [x] **Loading States** — Spinner during API calls
- [x] **Error Handling** — Demo data fallback when no API key is set

### UX / Performance
- [x] **Lazy-loaded images** — `loading="lazy"` attribute on all attraction images
- [x] **Image skeleton** — Shimmer animation while image loads on detail page
- [x] **Mobile bottom nav** — Fixed bottom navigation bar for easy thumb reach
- [x] **Desktop top nav** — Standard header navigation on wider screens
- [x] **Touch targets** — All buttons ≥ 48×48px (WCAG compliant)
- [x] **Keyboard accessible** — Focus-visible styles on all interactive elements
- [x] **No page reloads** — Full SPA with React Router v6

---

## 🌤️ Weather API Setup (Optional)

The app works with **demo weather data** by default. To enable live weather:

1. Get a free API key from [openweathermap.org/api](https://openweathermap.org/api)
2. Open `src/services/weather.js`
3. Replace `const API_KEY = "demo"` with `const API_KEY = "your_actual_key"`

---

## 🏛️ Attraction Dataset

| # | Name | Category | Location |
|---|---|---|---|
| 1 | Sigiriya Rock Fortress | Historical | Matale District |
| 2 | Temple of the Tooth | Historical | Kandy |
| 3 | Galle Fort | Historical | Galle |
| 4 | Yala National Park | Nature | Hambantota |
| 5 | Horton Plains | Nature | Nuwara Eliya |
| 6 | Mirissa Beach | Nature | Matara |
| 7 | Cinnamon Grand Colombo | Hotels | Colombo |
| 8 | Jetwing Lighthouse | Hotels | Galle |
| 9 | Dambulla Cave Temple | Historical | Dambulla |
| 10 | Ella Rock & Nine Arches | Nature | Badulla |
| 11 | Anuradhapura Sacred City | Historical | North Central |
| 12 | Heritance Kandalama | Hotels | Dambulla |

---

---

# 🎓 VIVA PREPARATION GUIDE
## SENG 41293 — Technical Interview Q&A

---

## 1. Architecture Explanation

### Q: Describe the overall architecture of your application.

**A:** The application follows a **component-based SPA (Single Page Application)** architecture using React.js with Vite as the build tool.

```
User Browser
     │
     ▼
index.html  ──── loads ────▶  main.jsx
                                  │
                                  ▼
                              App.jsx  (BrowserRouter + global state)
                                  │
                    ┌─────────────┼──────────────────┐
                    ▼             ▼                   ▼
                Navbar.jsx   React Router         State (favorites[])
                             │                        │
                    ┌────────┼────────┐               ▼
                    ▼        ▼        ▼          LocalStorage
                 Home   AttractionDetail   Favorites   About
                    │        │
                    ▼        ▼
            AttractionCard  WeatherWidget
            CategoryFilter  geo.js (Haversine)
                            weather.js (Fetch API)
```

**Key architectural decisions:**
- **Unidirectional data flow**: State lives in `App.jsx` and flows down via props
- **Separation of concerns**: pages/, components/, services/, utils/, data/ each have one responsibility
- **No external state library**: React's `useState`/`useEffect` is sufficient for this app's complexity

---

## 2. How LocalStorage Works

### Q: Explain how LocalStorage is used in your app.

**A:** LocalStorage is a **Web Storage API** that allows key-value data to persist in the browser with **no expiry** — surviving page refreshes and full browser restarts.

**My Implementation (`src/utils/storage.js`):**

```javascript
// Save favorites array to LocalStorage
export function saveFavorites(ids) {
  localStorage.setItem("sl_travel_favorites", JSON.stringify(ids));
}

// Read favorites from LocalStorage on app load
export function getFavorites() {
  const raw = localStorage.getItem("sl_travel_favorites");
  return raw ? JSON.parse(raw) : [];   // parse JSON string back to array
}

// Toggle one attraction ID in/out of favorites
export function toggleFavorite(id) {
  const current = getFavorites();
  const updated = current.includes(id)
    ? current.filter(f => f !== id)    // remove if exists
    : [...current, id];                 // add if not exists
  saveFavorites(updated);
  return updated;
}
```

**How it integrates with React:**
```javascript
// App.jsx — initialize state FROM LocalStorage (runs once on mount)
const [favorites, setFavorites] = useState(() => getFavorites());

// When user taps heart icon:
function handleToggleFavorite(id) {
  const updated = toggleFavorite(id); // updates LocalStorage
  setFavorites(updated);              // updates React state → re-renders UI
}
```

**Key points:**
- LocalStorage stores only **strings**, so we use `JSON.stringify()` to save and `JSON.parse()` to read arrays/objects
- Maximum storage: ~5MB per origin
- Data is **synchronous** (unlike IndexedDB which is async)
- Scoped to the **origin** (protocol + domain + port) — other sites cannot read it

### Q: What's the difference between LocalStorage, SessionStorage, and cookies?

**A:**
| | LocalStorage | SessionStorage | Cookie |
|---|---|---|---|
| Persistence | Until manually cleared | Until tab closes | Set expiry date |
| Capacity | ~5MB | ~5MB | ~4KB |
| Accessible from JS | Yes | Yes | Yes (unless HttpOnly) |
| Sent to server | No | No | Yes (every request) |
| My use | Favorites, prefs | N/A | N/A |

---

## 3. How the Geolocation API Works

### Q: How did you implement the Geolocation API?

**A:** The **HTML5 Geolocation API** is accessed via `navigator.geolocation`. It requests the device's GPS/network location from the browser.

**My Implementation (`src/utils/geo.js`):**

```javascript
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    // Check if browser supports it
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      // SUCCESS callback
      (position) => resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }),
      // ERROR callback
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:   reject("Location permission denied."); break;
          case error.POSITION_UNAVAILABLE: reject("Location unavailable."); break;
          case error.TIMEOUT:             reject("Location request timed out."); break;
        }
      },
      // OPTIONS
      { timeout: 10000, maximumAge: 300000 }
    );
  });
}
```

**Usage in AttractionDetail.jsx:**
```javascript
useEffect(() => {
  getUserLocation()
    .then(({ lat, lng }) => {
      const dist = calculateDistance(lat, lng, attraction.lat, attraction.lng);
      setDistance(dist); // e.g. "124.7 km"
    })
    .catch(err => setLocationError(err));
}, [attraction]);
```

### Q: Explain the Haversine formula you used.

**A:** The Haversine formula calculates the **great-circle distance** between two points on a sphere (Earth), accounting for Earth's curvature.

```javascript
export function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in kilometres
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1); // distance in km, 1 decimal
}

function toRad(deg) { return deg * Math.PI / 180; }
```

**Why Haversine?** Simple Euclidean distance doesn't work on a sphere — coordinates are angles, not flat distances.

### Q: What happens if the user denies location permission?

**A:** The `error.PERMISSION_DENIED` case is caught and `setLocationError("Location permission denied.")` is called. The UI shows a friendly error message with a "Retry" button. The rest of the detail page continues to function normally — weather, description, and Google Maps still work.

---

## 4. How the Fetch API Works

### Q: How did you use the Fetch API for weather data?

**A:** The Fetch API is a modern, Promise-based interface for making HTTP requests, replacing the older XMLHttpRequest.

**My Implementation (`src/services/weather.js`):**

```javascript
export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather
    ?q=${encodeURIComponent(city)},LK
    &appid=${API_KEY}
    &units=metric`;

  const response = await fetch(url);           // returns a Promise<Response>

  if (!response.ok) {                          // HTTP error check
    if (response.status === 401) throw new Error("Invalid API key.");
    if (response.status === 404) throw new Error(`City not found.`);
    throw new Error(`Failed: ${response.statusText}`);
  }

  const data = await response.json();          // parse JSON body

  return {
    temp: Math.round(data.main.temp),
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
  };
}
```

**How it's consumed in WeatherWidget.jsx:**
```javascript
useEffect(() => {
  setLoading(true);
  fetchWeather(city)
    .then(data => setWeather(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, [city]);
```

**The three states are handled:**
1. **Loading** — spinner displayed
2. **Success** — weather card shown
3. **Error** — error message + the app falls back to demo data

### Q: What is async/await and how does it differ from .then()?

**A:** Both handle Promises. `async/await` is syntactic sugar that makes async code read like synchronous code:

```javascript
// .then() style (Promise chaining)
fetch(url)
  .then(res => res.json())
  .then(data => setWeather(data))
  .catch(err => setError(err));

// async/await style (same result, easier to read)
async function load() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  } catch (err) {
    setError(err.message);
  }
}
```

---

## 5. How Responsive Design Was Implemented

### Q: Describe your mobile-first responsive design approach.

**A:** "Mobile-first" means writing CSS **for small screens by default**, then using `min-width` media queries to progressively enhance for larger screens.

**Design Tokens (CSS Custom Properties):**
```css
:root {
  --nav-height: 64px;
  --space-md: 16px;
  --radius-md: 12px;
  /* ... all spacing, color, and typography values defined centrally */
}
```

**Mobile-first base styles (no media query):**
```css
.attractions-grid {
  display: grid;
  grid-template-columns: 1fr;  /* 1 column on mobile */
  gap: var(--space-md);
}
```

**Progressive enhancement with min-width queries:**
```css
@media (min-width: 480px) {
  .attractions-grid { grid-template-columns: repeat(2, 1fr); } /* 2 cols */
}
@media (min-width: 900px) {
  .attractions-grid { grid-template-columns: repeat(3, 1fr); } /* 3 cols */
}
@media (min-width: 1200px) {
  .attractions-grid { grid-template-columns: repeat(4, 1fr); } /* 4 cols */
}
```

**Touch target compliance:**
```css
.btn {
  min-height: 48px; /* WCAG 2.5.8 touch target minimum */
  min-width: 48px;
}
```

**Navigation pattern:**
- **Mobile**: Fixed bottom navigation (thumb-friendly, iOS-style)
- **Desktop (768px+)**: Standard horizontal top navigation

**Fluid typography:**
```css
h1 { font-size: clamp(1.8rem, 5vw, 2.6rem); }
/* clamp(minimum, preferred, maximum) — scales with viewport */
```

### Q: What's the difference between Flexbox and CSS Grid?

**A:**
- **Flexbox** — one-dimensional layout (row OR column). Used for: navbar items, button groups, card footers, centered content
- **CSS Grid** — two-dimensional layout (rows AND columns). Used for: the attraction cards grid, the tech stack grid on About page

---

## 6. React-Specific Questions

### Q: Explain useState and useEffect in your app.

**A:**

**useState** stores reactive data. When it changes, React re-renders the component:
```javascript
const [favorites, setFavorites] = useState(() => getFavorites());
// favorites = current value
// setFavorites = function to update it
// () => getFavorites() = lazy initializer (runs once)
```

**useEffect** runs side effects after render:
```javascript
useEffect(() => {
  fetchWeather(city)               // run async side effect
    .then(setWeather)
    .catch(setError)
    .finally(() => setLoading(false));
}, [city]);  // dependency array — re-run if 'city' changes
```

### Q: How does data flow in your React app?

**A:** Unidirectional (one-way) data flow:
1. **State lives in App.jsx** (`favorites` array)
2. **Passed down as props** to child pages/components
3. **Children call callback props** to update state (`onToggleFavorite`)
4. **State updates** trigger React to re-render affected components

### Q: What is React Router and how does it work?

**A:** React Router enables **client-side routing** — navigating between "pages" without a server round-trip or page reload.

```javascript
// App.jsx
<BrowserRouter>       {/* provides routing context */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/attraction/:id" element={<AttractionDetail />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>

// In AttractionDetail: read the URL parameter
const { id } = useParams(); // e.g. "3" for /attraction/3

// Navigate programmatically
const navigate = useNavigate();
navigate(-1); // go back
navigate("/favorites"); // go to page
```

---

## 7. Possible Viva Questions & Answers

**Q: Why did you choose React over plain HTML/JavaScript?**
A: React enables reusable components (AttractionCard is used on both Home and Favorites), efficient DOM updates via the virtual DOM, and clean state management with hooks. Building 12 cards manually in plain JS would mean duplicating HTML and manually managing DOM updates.

**Q: How would you add a new attraction to the dataset?**
A: Open `src/data/attractions.js` and add a new object to the `attractions` array following the same schema (id, name, shortDescription, fullDescription, category, location, lat, lng, city, image, rating, openHours, entryFee, tags). It will automatically appear in the grid, be filterable, and work with all features.

**Q: What would you do to make this a PWA (Progressive Web App)?**
A: Add a `manifest.json` (app name, icons, theme color), register a Service Worker (`sw.js`) to cache assets for offline use, and use the Cache API or IndexedDB for offline data. Vite has a `vite-plugin-pwa` that automates most of this.

**Q: How do you handle errors throughout the app?**
A: Every async operation is wrapped in try/catch or `.catch()`. The WeatherWidget shows an error state if the fetch fails. The Geolocation utility wraps `getCurrentPosition` in a Promise and rejects with human-readable messages for each error code. Images have `onError` handlers to show a fallback.

**Q: Why did you wrap getUserLocation in a Promise?**
A: Because `navigator.geolocation.getCurrentPosition()` uses the older callback style, not Promises. Wrapping it lets us use modern `async/await` syntax and handle it uniformly with other async operations using `.then()/.catch()`.

**Q: How does lazy loading images improve performance?**
A: The `loading="lazy"` HTML attribute tells the browser not to download an image until it's about to scroll into the viewport. On the home page with 12 attraction cards, this means only the visible images load initially, reducing the initial page load data significantly.

**Q: Can you make a small CSS change on command?**
A: Yes! For example, to change the primary color from gold to purple:
```css
/* In src/styles/global.css, change: */
--color-saffron: #E8A020;
/* To: */
--color-saffron: #7C3AED;
/* All buttons, active states, and chips update instantly */
```
This is the power of CSS Custom Properties — one change updates the entire design system.

**Q: How does the search work without a backend?**
A: The `filtered` array is computed using `useMemo()` which re-runs whenever `search` or `category` state changes. It uses JavaScript's `.filter()` and `.includes()` to match the search query against attraction name, description, location, and tags entirely in the browser — no server needed.

---

## 📊 Marking Criteria Checklist

| Criterion | Max | Implementation |
|---|---|---|
| Mobile-First & Responsive Design | 20 | ✅ Flexbox+Grid, 4 breakpoints, 48px touch targets, mobile bottom nav |
| Code Quality & Architecture | 20 | ✅ Modular src/ structure, ES6+, error handling, async Fetch API |
| Browser Storage & Web API | 20 | ✅ LocalStorage favorites+prefs, Geolocation API, Google Maps |
| Simulated Browser Performance | 10 | ✅ Lazy images, skeleton loading, no runtime errors, smooth animations |
| Viva Voce & Code Defense | 30 | ✅ See Q&A section above |
| **TOTAL** | **100** | |

---

*Built for SENG 41293 — University of Kelaniya, Sri Lanka. Track B: Local Tour & Travel Web Guide.*
