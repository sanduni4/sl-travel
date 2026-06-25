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
