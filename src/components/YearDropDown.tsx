import React from 'react';

interface YearDropdownProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => (1900 + index).toString());

  return (
    <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
      <option value="">Select a Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;
