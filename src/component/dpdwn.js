import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = () => {
  const options = [
    { value: 'option1', label: 'Option 1', content: 'Content for Option 1' },
    { value: 'option2', label: 'Option 2', content: 'Content for Option 2' },
    { value: 'option3', label: 'Option 3', content: 'Content for Option 3' }
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="text-dropdown">
      <div className="dropdown-header" onClick={() => setSelectedOption('')}>
        {selectedOption ? (
          <div className="selected-option">{selectedOption.label}</div>
        ) : (
          <div className="placeholder">Select an option</div>
        )}
        <FaAngleDown className="dropdown-icon" />
      </div>
      <div className="dropdown-content">
        {selectedOption && (
          <p>{selectedOption.content}</p>
        )}
      </div>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li
            key={option.value}
            className={selectedOption === option ? 'active' : ''}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
