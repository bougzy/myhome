

import { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
import './Sidebar.css'; // Ensure you have appropriate styles for mobile view

const Sidebar = ({ activeTab, setActiveTab, setSidebarVisible }) => {
  const handleItemClick = (tab) => {
    setActiveTab(tab);
    setSidebarVisible(false); // Hide the sidebar on item click
  };

  return (
    <div>
      <div id="sidebar-content" className="collapse show">
        <div className="sidebar bg-white">
          <ListGroup className="list-group-flush mt-4 ms-4">
            <div className="mt-5 d-flex justify-content-between align-items-center">
              <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
              <Button 
                className="close-sidebar-button d-md-none border-0" 
                style={{background:"none"}} 
                onClick={() => setSidebarVisible(false)}
              >
                <FaTimes style={{ color: "#FF8844" }} />
              </Button>
            </div>
            <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
            <ListGroup.Item
              className="border-0 rounded-5 mt-5 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Home')}
              active={activeTab === 'Home'}
            >
              <FaHome className="me-2" /> Dashboard
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Profile')}
              active={activeTab === 'Profile'}
            >
              <FaUser className="me-2" /> Activity
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Settings')}
              active={activeTab === 'Settings'}
            >
              <FaCog className="me-2" /> My Listing
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Messages')}
              active={activeTab === 'Messages'}
            >
              <FaEnvelope className="me-2" /> Favourites
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('SavedProfile')}
              active={activeTab === 'SavedProfile'}
            >
              <FaEnvelope className="me-2" /> Saved Profile
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('AccountSettings')}
              active={activeTab === 'AccountSettings'}
            >
              <FaCog className="me-2" /> Account Settings
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Security')}
              active={activeTab === 'Security'}
            >
              <FaCog className="me-2" /> Security
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('Logout')}
              active={activeTab === 'Logout'}
            >
              <FaCog className="me-2" /> Logout
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
