import React, { useState, useEffect, useRef } from "react";
import "./YearDropDown.scss";

interface YearDropdownProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({
  selectedYear,
  onYearChange,
}) => {
  const startYear = 2025;
  const allYears = Array.from({ length: startYear - 1900 + 1 }, (_, index) =>
    (startYear - index).toString()
  );

  const [visibleYears, setVisibleYears] = useState<string[]>(allYears.slice(0, 40));
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setVisibleYears(allYears.slice(0, 40));
    } else {
      setVisibleYears(allYears.filter((year) => year.includes(value)));
    }
  };

  const handleSelectYear = (year: string) => {
    onYearChange(year);
    setIsOpen(false);
    setSearchTerm("");
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
    <div className="year-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedYear || "Select a Year"}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search year..."
            className="search-input"
          />
          <ul>
            {visibleYears.map((year) => (
              <li
                key={year}
                onClick={() => handleSelectYear(year)}
                className={`dropdown-item ${
                  selectedYear === year ? "selected" : ""
                }`}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default YearDropdown;
