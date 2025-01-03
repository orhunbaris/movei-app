import React, { useState, useRef, useEffect } from "react";
import "./TypeSelector.scss";

interface TypeSelectorProps {
  type: string;
  onTypeChange: (newType: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ type, onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const options = ["movie", "series", "episode"];

  const handleSelectType = (selectedType: string) => {
    onTypeChange(selectedType);
    setIsOpen(false);
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="type-selector" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelectType(option)}
                className={`dropdown-item ${type === option ? "selected" : ""}`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TypeSelector;
