import React from 'react';
import './Dropdown.css';
import Link from 'next/link';

function Dropdown({ name, categories }: { name: string; categories: string[] }) {
  console.log(categories);
  return (
    <div className="dropdown">
      <button className="dropbtn">{name}</button>
      <div className="dropdown-content">
        {categories.map((item, itemIndex) => (
          <a className="dropdown-link" href={`/category/${encodeURIComponent(item)}`} key={itemIndex}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
