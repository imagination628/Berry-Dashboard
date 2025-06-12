import React from 'react'; // ✅ Required for JSX to work

import { NavLink } from 'react-router-dom';
import { FaHome, FaTools } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white vh-100 p-3 shadow-sm" style={{ width: '240px' }}>
      <h4 className="mb-4 text-primary">🍇 BERRY</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/" className="nav-link" style={({ isActive }) => ({
            backgroundColor: isActive ? '#e3f2fd' : 'transparent',
            borderRadius: '8px',
            fontWeight: 500
          })}>
            <FaHome className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/crud" className="nav-link" style={({ isActive }) => ({
            backgroundColor: isActive ? '#e3f2fd' : 'transparent',
            borderRadius: '8px',
            fontWeight: 500
          })}>
            <FaTools className="me-2" />
            CRUD Operations
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
