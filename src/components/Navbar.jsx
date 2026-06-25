/**
 * Navbar — bottom navigation for mobile, top navigation for desktop
 * Uses React Router NavLink for active state styling
 */

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FiHome, FiHeart, FiInfo } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";

export default function Navbar({ favCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar */}
      <header className="top-bar">
        <div className="container top-bar__inner">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <MdTravelExplore />
            </span>
            <span className="brand-text">
              <span className="brand-main">Lanka</span>
              <span className="brand-sub">Travel Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Favourites {favCount > 0 && <span className="nav-badge">{favCount}</span>}
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Profile
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav" aria-label="Mobile navigation">
        <NavLink to="/" end className={({ isActive }) => "bottom-nav__item" + (isActive ? " bottom-nav__item--active" : "")}>
          <span className="bottom-nav__icon">
            <FiHome />
          </span>
          <span className="bottom-nav__label">Home</span>
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => "bottom-nav__item" + (isActive ? " bottom-nav__item--active" : "")}>
          <span className="bottom-nav__icon">
            <FiHeart />
            {favCount > 0 && (
              <span className="bottom-badge">{favCount}</span>
            )}
          </span>
          <span className="bottom-nav__label">Saved</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => "bottom-nav__item" + (isActive ? " bottom-nav__item--active" : "")}>
          <span className="bottom-nav__icon">
            <FiInfo />
          </span>        
             <span className="bottom-nav__label">Profile</span>
        </NavLink>
      </nav>
    </>
  );
}
