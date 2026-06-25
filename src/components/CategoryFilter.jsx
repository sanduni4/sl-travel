/**
 * CategoryFilter — horizontal scrollable chip filter bar
 */

import { categories } from "../data/attractions";
import "./CategoryFilter.css";
import {
  FiCompass,
  FiMap,
  FiFeather,
  FiHome
} from "react-icons/fi";

const CATEGORY_EMOJI = {  
  All: <FiCompass />,
  Historical: <FiMap />,
  Nature: <FiFeather />,
  Hotels: <FiHome />, };


export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {categories.map(cat => (
        <button
          key={cat}
          className={`category-chip${selected === cat ? " active" : ""}`}
          onClick={() => onChange(cat)}
          aria-pressed={selected === cat}
        >
          <span>{CATEGORY_EMOJI[cat]}</span>
          {cat}
        </button>
      ))}
    </div>
  );
}
