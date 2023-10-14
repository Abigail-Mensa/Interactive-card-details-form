// components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import OvalCopy2 from './Oval Copy 2.svg'; // Import the image file
import OvalCopy3 from './Oval Copy 3.png'; // Import the image file
import OvalCopy4 from './Oval Copy 4.svg'; // Import the image file
// Import other images as needed
import './Oval Copy 3s.svg';
import './Oval Copy 3.png';
import './Oval Copy 2s.svg';
import './Oval Copy 4.svg';
import './Oval Copy 4s.svg';

function Dashboard() {
  return (
    <div>
      <div className='body'>
        <div className='side-box'>
          {/* Use the imported image */}
          <img src={OvalCopy2} alt="Oval Copy 2" className="image-style1" />
          <img src={OvalCopy3} alt="Oval Copy 2" className="image-style2" />
          <img src={OvalCopy4} alt="Oval Copy 2" className="image-style3" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
