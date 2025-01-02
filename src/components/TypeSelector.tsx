import React from 'react';

interface TypeSelectorProps {
  type: string;
  onTypeChange: (newType: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ type, onTypeChange }) => {
  return (
    <div>
      <label htmlFor="type-selector">Select Type: </label>
      <select
        id="type-selector"
        value={type}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="movie">Movies</option>
        <option value="series">TV Series</option>
        <option value="episode">TV Episodes</option>
      </select>
    </div>
  );
};

export default TypeSelector;
