
// import React from 'react';
// import { ListGroup } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa';


// const Sidebar = ({ activeTab, setActiveTab }) => {
//   return (
//     <div className="sidebar bg-white">
//       <ListGroup className="list-group-flush mt-4 ms-4">
//         <div>
//           <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//           <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//         </div>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-5 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Home')}
//           active={activeTab === 'Home'}
//         >
//           <FaHome className="me-2" /> Dashboard
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Profile')}
//           active={activeTab === 'Profile'}
//         >
//           <FaUser className="me-2" /> Activity
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Settings')}
//           active={activeTab === 'Settings'}
//         >
//           <FaCog className="me-2" /> My Listing
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Messages')}
//           active={activeTab === 'Messages'}
//         >
//           <FaEnvelope className="me-2" /> Favourites
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('SavedProfile')}
//           active={activeTab === 'SavedProfile'}
//         >
//           <FaEnvelope className="me-2" /> Saved Profile
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('AccountSettings')}
//           active={activeTab === 'AccountSettings'}
//         >
//           <FaCog className="me-2" /> Account Settings
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// };

// export default Sidebar;









// import { useState } from 'react';
// import { ListGroup } from 'react-bootstrap';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa';

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const handleItemClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <div className="sidebar bg-white">
//       <ListGroup className="list-group-flush mt-4 ms-4">
//         <div>
//           <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//           <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//         </div>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-5 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('Home')}
//           active={activeTab === 'Home'}
//         >
//           <FaHome className="me-2" /> Dashboard
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('Profile')}
//           active={activeTab === 'Profile'}
//         >
//           <FaUser className="me-2" /> Activity
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('Settings')}
//           active={activeTab === 'Settings'}
//         >
//           <FaCog className="me-2" /> My Listing
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('Messages')}
//           active={activeTab === 'Messages'}
//         >
//           <FaEnvelope className="me-2" /> Favourites
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('SavedProfile')}
//           active={activeTab === 'SavedProfile'}
//         >
//           <FaEnvelope className="me-2" /> Saved Profile
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => handleItemClick('AccountSettings')}
//           active={activeTab === 'AccountSettings'}
//         >
//           <FaCog className="me-2" /> Account Settings
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
import './Sidebar.css'; // Ensure you have appropriate styles for mobile view

const Sidebar = ({ activeTab, setActiveTab }) => {
  const handleItemClick = (tab) => {
    setActiveTab(tab);
  };

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div>
      <Button 
        className="toggle-sidebar-btn mt-2 border-0" style={{background: "darkorange"}} 
        onClick={() => setSidebarVisible(!isSidebarVisible)}
        aria-controls="sidebar-content"
        aria-expanded={isSidebarVisible}
      >
        {isSidebarVisible ? <FaTimes /> : '-'}
      </Button>
      <div id="sidebar-content" className={`collapse ${isSidebarVisible ? 'show' : ''}`}>
        <div className="sidebar bg-white">
          <ListGroup className="list-group-flush mt-4 ms-4">
            <div>
              <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
              <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
            </div>
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
              onClick={() => handleItemClick('AccountSettings')}
              active={activeTab === 'AccountSettings'}
            >
              <FaCog className="me-2" /> Security
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => handleItemClick('AccountSettings')}
              active={activeTab === 'AccountSettings'}
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

