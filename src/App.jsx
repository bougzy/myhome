










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


import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import Security from './Components/Security/Security';
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountingSettings/AccountingSettings';
import Favorites from './Components/Favorites/Favorites';
import SavedProfile from './Components/SavedProfile/SavedProfile';
import Logout from './Components/Logout/Logout';
import './App.css';  // Import the CSS file

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Dashb />;
      case 'Profile':
        return <Activities />;
      case 'Settings':
        return <MyListing />;
      case 'Messages':
        return <Favorites />;
      case 'SavedProfile':
        return <SavedProfile />;
      case 'AccountSettings':
        return <AccountSettings />;
      case 'Security':
        return <Security/>;
      case 'Logout':
        return <Logout/>;
      default:
        return <Dashb />;
    }
  };

  return (
    <Container fluid className="app-container">
      <Button 
        className="toggle-sidebar-button border-0 mx-3" style={{background:"darkorange"}} 
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? 'X' : 'X'}
      </Button>
      <Row>
        {isSidebarVisible && (
          <Col md={2} className="sidebar-column">
            <Sidebar 
              activeTab={activeTab} 
              setActiveTab={(tab) => { 
                setActiveTab(tab);
                setSidebarVisible(false);
              }}
              setSidebarVisible={setSidebarVisible} 
            />
          </Col>
        )}
        <Col md={isSidebarVisible ? 10 : 12} className="bg-light content-area">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default App;

