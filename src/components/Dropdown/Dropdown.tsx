import React from 'react'
import './Dropdown.css';

function Dropdown({ name }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">{name}</button>
      <div className="dropdown-content">
        <a href="#" className="dropdown-link">Link 1</a>
        <a href="#" className="dropdown-link">Link 2</a>
        <a href="#" className="dropdown-link">Link 3</a>
        <a href="#" className="dropdown-link">Link 4</a>
      </div>
    </div>
  );
}

export default Dropdown;

