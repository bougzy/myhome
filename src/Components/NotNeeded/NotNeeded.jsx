
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


// import { useState } from 'react';
// import { ListGroup, Button } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
// import './Sidebar.css'; // Ensure you have appropriate styles for mobile view

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const handleItemClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   return (
//     <div>
//       <Button 
//         className="toggle-sidebar-btn border-0" style={{background: "darkorange"}} 
//         onClick={() => setSidebarVisible(!isSidebarVisible)}
//         aria-controls="sidebar-content"
//         aria-expanded={isSidebarVisible}
//       >
//         {isSidebarVisible ? <FaTimes /> : '-'}
//       </Button>
//       <div id="sidebar-content" className={`collapse ${isSidebarVisible ? 'show' : ''}`}>
//         <div className="sidebar bg-white">
//           <ListGroup className="list-group-flush mt-4 ms-4">
//             <div>
//               <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//               <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//             </div>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-5 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Home')}
//               active={activeTab === 'Home'}
//             >
//               <FaHome className="me-2" /> Dashboard
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Profile')}
//               active={activeTab === 'Profile'}
//             >
//               <FaUser className="me-2" /> Activity
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Settings')}
//               active={activeTab === 'Settings'}
//             >
//               <FaCog className="me-2" /> My Listing
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Messages')}
//               active={activeTab === 'Messages'}
//             >
//               <FaEnvelope className="me-2" /> Favourites
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('SavedProfile')}
//               active={activeTab === 'SavedProfile'}
//             >
//               <FaEnvelope className="me-2" /> Saved Profile
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('AccountSettings')}
//               active={activeTab === 'AccountSettings'}
//             >
//               <FaCog className="me-2" /> Account Settings
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('AccountSettings')}
//               active={activeTab === 'AccountSettings'}
//             >
//               <FaCog className="me-2" /> Security
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('AccountSettings')}
//               active={activeTab === 'AccountSettings'}
//             >
//               <FaCog className="me-2" /> Logout
//             </ListGroup.Item>
//           </ListGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from 'react';
// import { ListGroup, Button } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
// import './Sidebar.css'; // Ensure you have appropriate styles for mobile view

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const handleItemClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   return (
//     <div>
//       <div id="sidebar-content" className={`collapse ${isSidebarVisible ? 'show' : ''}`}>
//         <div className="sidebar bg-white">
//           <ListGroup className="list-group-flush mt-4 ms-4">
//             <div className="mt-5">
//               <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//               <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//             </div>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-5 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Home')}
//               active={activeTab === 'Home'}
//             >
//               <FaHome className="me-2" /> Dashboard
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Profile')}
//               active={activeTab === 'Profile'}
//             >
//               <FaUser className="me-2" /> Activity
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Settings')}
//               active={activeTab === 'Settings'}
//             >
//               <FaCog className="me-2" /> My Listing
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Messages')}
//               active={activeTab === 'Messages'}
//             >
//               <FaEnvelope className="me-2" /> Favourites
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('SavedProfile')}
//               active={activeTab === 'SavedProfile'}
//             >
//               <FaEnvelope className="me-2" /> Saved Profile
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('AccountSettings')}
//               active={activeTab === 'AccountSettings'}
//             >
//               <FaCog className="me-2" /> Account Settings
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Security')}
//               active={activeTab === 'Security'}
//             >
//               <FaCog className="me-2" /> Security
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Logout')}
//               active={activeTab === 'Logout'}
//             >
//               <FaCog className="me-2" /> Logout
//             </ListGroup.Item>
//           </ListGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import { useState } from 'react';
// import { ListGroup, Button } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
// import './Sidebar.css'; // Ensure you have appropriate styles for mobile view

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const handleItemClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const handleCloseSidebar = () => {
//     setSidebarVisible(false);
//   };

//   return (
//     <div>
//       <div id="sidebar-content" className={`collapse ${isSidebarVisible ? 'show' : ''}`}>
//         <div className="sidebar bg-white">
//           <ListGroup className="list-group-flush mt-4 ms-4">
//             <div className="mt-5 d-flex justify-content-between align-items-center">
//               <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//               <Button className="d-md-none" variant="link" onClick={handleCloseSidebar}>
//                 <FaTimes style={{ color: "#FF8844" }} />
//               </Button>
//             </div>
//             <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-5 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Home')}
//               active={activeTab === 'Home'}
//             >
//               <FaHome className="me-2" /> Dashboard
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Profile')}
//               active={activeTab === 'Profile'}
//             >
//               <FaUser className="me-2" /> Activity
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Settings')}
//               active={activeTab === 'Settings'}
//             >
//               <FaCog className="me-2" /> My Listing
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Messages')}
//               active={activeTab === 'Messages'}
//             >
//               <FaEnvelope className="me-2" /> Favourites
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('SavedProfile')}
//               active={activeTab === 'SavedProfile'}
//             >
//               <FaEnvelope className="me-2" /> Saved Profile
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('AccountSettings')}
//               active={activeTab === 'AccountSettings'}
//             >
//               <FaCog className="me-2" /> Account Settings
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Security')}
//               active={activeTab === 'Security'}
//             >
//               <FaCog className="me-2" /> Security
//             </ListGroup.Item>
//             <ListGroup.Item
//               className="border-0 rounded-5 mt-3 d-flex align-items-center"
//               action
//               onClick={() => handleItemClick('Logout')}
//               active={activeTab === 'Logout'}
//             >
//               <FaCog className="me-2" /> Logout
//             </ListGroup.Item>
//           </ListGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






















// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from './Components/Security/Security';
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import './App.css';  

// const App = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <Dashb />;
//       case 'Profile':
//         return <Activities />;
//       case 'Settings':
//         return <MyListing />;
//       case 'Messages':
//         return <Favorites />;
//       case 'SavedProfile':
//         return <SavedProfile />;
//       case 'AccountSettings':
//         return <AccountSettings />;
//       case 'Security':
//         return <Security/>;
//       case 'Logout':
//         return <Logout/>;
//       default:
//         return <Dashb />;
//     }
//   };

//   return (
//     <Container fluid>
//       <Button 
//         className="toggle-sidebar-button border-0" style={{background:"darkorange"}} 
//         onClick={() => setSidebarVisible(!isSidebarVisible)}
//       >
//         {isSidebarVisible ? 'X' : 'X'}
//       </Button>
//       <Row>
//         {isSidebarVisible && (
//           <Col md={2}>
//             <Sidebar 
//               activeTab={activeTab} 
//               setActiveTab={(tab) => { 
//                 setActiveTab(tab);
//                 setSidebarVisible(false);
//               }}
//               setSidebarVisible={setSidebarVisible} 
//             />
//           </Col>
//         )}
//         <Col md={isSidebarVisible ? 10 : 12} className="bg-light content-area" style={{ height: "170vh" }}>
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from './Components/Security/Security';
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import './App.css';  // Import the CSS file

// const App = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <Dashb />;
//       case 'Profile':
//         return <Activities />;
//       case 'Settings':
//         return <MyListing />;
//       case 'Messages':
//         return <Favorites />;
//       case 'SavedProfile':
//         return <SavedProfile />;
//       case 'AccountSettings':
//         return <AccountSettings />;
//       case 'Security':
//         return <Security/>;
//       case 'Logout':
//         return <Logout/>;
//       default:
//         return <Dashb />;
//     }
//   };

//   return (
//     <Container fluid className="app-container">
//       <Button 
//         className="toggle-sidebar-button border-0 mx-3" style={{background:"darkorange"}} 
//         onClick={() => setSidebarVisible(!isSidebarVisible)}
//       >
//         {isSidebarVisible ? 'X' : 'X'}
//       </Button>
//       <Row>
//         {isSidebarVisible && (
//           <Col md={2} className="sidebar-column">
//             <Sidebar 
//               activeTab={activeTab} 
//               setActiveTab={(tab) => { 
//                 setActiveTab(tab);
//                 setSidebarVisible(false);
//               }}
//               setSidebarVisible={setSidebarVisible} 
//             />
//           </Col>
//         )}
//         <Col md={isSidebarVisible ? 10 : 12} className="bg-light content-area">
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;



/* 
.sidebar .list-group-item.active {
  background-color: #FF8844 !important;  
  color: white !important;  
  border-radius:"20px" !important;
}





.toggle-sidebar-button {
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: #FF8844;
  color: rgb(138, 6, 6);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .toggle-sidebar-button {
    display: block;
  }

  .sidebar {
    position: fixed;
    width: 80%;
    height: 100%;
    z-index: 999;
    transition: transform 0.3s ease-in-out;
    background-color: white;
  }

  .content-area {
    padding-top: 0px; 
  }
}
 */



/* .sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100%;
  transition: left 0.3s ease-in-out;
  z-index: 1040; 
} */

/* .sidebar-container.open {
  left: 0;
} */

/* @media (min-width: 768px) {
  .sidebar-container {
    position: static;
    transition: none;
    left: 0;
  }
} */

/* .content {
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .content {
    margin-left: 16.666667%; 
  }
} */