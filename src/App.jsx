import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayouts';
import awsmobile from './aws-exports';
import { Amplify } from 'aws-amplify';
import LoginPage from './components/LoginPage';
import ValidatePage from './components/ValidatePage';
import SignUpPage from './components/SignUpPage';
import Success from './layouts/UserDashBoard';
import NavBar from './components/TopNav';
import WeeklyTasks from './components/WeeklyTasks';
import MyFamily from './components/MyFamily';
import FamilyFights from './components/FamilyFights';
import NotFamily from './components/NotFamily';
import ViewInvites from './components/ViewInvites';

Amplify.configure(awsmobile);
// This is a mock authentication function.
// You can replace this with your authentication logic.

function App() {
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
                <Route path='/NotFamily' element={<NotFamily />} />
                <Route path='/ViewInvites' element={<ViewInvites />} />
                {/* <Route path='/contacts' element={<Contacts isAuthenticated={isAuthenticated} />} /> */}
            </Routes>
        </Router>
    </>
  );
}


export default App;
