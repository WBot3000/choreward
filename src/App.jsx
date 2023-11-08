import { useState } from 'react';
import { AuthContext } from './AuthContext.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayouts';
import awsmobile from './aws-exports';
import { Amplify, Auth } from 'aws-amplify';
import LoginPage from './components/LoginPage';
import ValidatePage from './components/ValidatePage';
import SignUpPage from './components/SignUpPage';
import Success from './layouts/UserDashBoard';
import NavBar from './components/TopNav';
import WeeklyTasks from './components/WeeklyTasks';
import MyFamily from './components/MyFamily';
import FamilyFights from './components/FamilyFights';

Amplify.configure(awsmobile);
// This is a mock authentication function.
// You can replace this with your authentication logic.

function App() {
    //const [isAuthenticated, setIsAuthenticated] = useState(false)
    //console.log("user is authenticated:", Auth.currentAuthenticatedUser())

    //Auth.currentAuthenticatedUser().then(() => { setIsAuthenticated(true) }).catch(() => { setIsAuthenticated(false) })

    // Auth.signIn()

    // function updateAuthStatus(authStatus) {
    //   setIsAuthenticated(authStatus)
    // }
    
    // function for sign out 

    // Auth.signOut()
    // set IsAuthgenticated to false

  return (
    <>
        <Router>
            <Routes>  
                <Route path='*' element={<DashboardLayout/>} />
                <Route path='/' exact={true} element={<DashboardLayout/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<SignUpPage />} />
                <Route path='/validate' element={<ValidatePage />} />
                <Route path='/success' element={<Success />} />
                <Route path='/NavBar' element={<NavBar />} />
                <Route path='/WeeklyTasks' element={<WeeklyTasks />} />
                <Route path='/MyFamily' element={<MyFamily />} />
                <Route path='/FamilyFights' element={<FamilyFights />} />
                {/* <Route path='/contacts' element={<Contacts isAuthenticated={isAuthenticated} />} /> */}
            </Routes>
        </Router>
    </>
  );
}


export default App;
