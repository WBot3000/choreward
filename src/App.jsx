import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayouts';
import awsmobile from './aws-exports';
import {Amplify,} from 'aws-amplify';
import LoginPage from './components/LoginPage';
import ValidatePage from './components/ValidatePage';
import { useState } from 'react';
import SignUpPage from './components/SignUpPage';
import Success from './layouts/UserDashBoard';

Amplify.configure(awsmobile);
// This is a mock authentication function.
// You can replace this with your authentication logic.


  function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  
    function updateAuthStatus(authStatus) {
      setIsAuthenticated(authStatus)
    }

  return (
    <>
    <Router>
      <Routes>
        <Route path='*' element={<DashboardLayout isAuthenticated={isAuthenticated} />} />
        <Route path='/' exact={true} element={<DashboardLayout isAuthenticated={isAuthenticated} />} />
        <Route path='/login' element={<LoginPage updateAuthStatus={updateAuthStatus} />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/validate' element={<ValidatePage />} />
        <Route path='/success' element={<Success />} />
        {/* <Route path='/contacts' element={<Contacts isAuthenticated={isAuthenticated} />} /> */}
      </Routes>
    </Router>
    </>
  );
}


export default App;
