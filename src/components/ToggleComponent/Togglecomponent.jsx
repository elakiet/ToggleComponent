import React, { useState } from 'react';
import './ToggleComponent.css';
import profile from './Profile.jpeg'

function ToggleComponent() {
  const click = () => {
    const change = document.getElementById('show');
    const display = document.getElementById('demo');
    if (change.innerHTML === 'Show Details') {
      change.innerHTML = 'Hide Details';
      display.innerHTML = 'Degree/Department: BE/CSE';
    } else {
      change.innerHTML = 'Show Details';
      display.innerHTML = '';
    }
  }; 
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="details">
        <img src={profile} alt="Profile" width="50" height="50"/>
          <h2>Name: Elakiya RS</h2>
          <p>Registration No:212221040047</p>
        </div>
        <button className='btn' id='show' onClick={click}>Show Details</button>
        <p id='demo'></p>
      </div>
    </React.Fragment>
  )
}

export default ToggleComponent