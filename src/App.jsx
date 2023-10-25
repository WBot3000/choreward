import { BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayouts';
import awsmobile from './aws-exports';
import {Amplify} from 'aws-amplify';

Amplify.configure(awsmobile);
// This is a mock authentication function.
// You can replace this with your authentication logic.
const isAuthenticated = () => {
  // This example always returns true. In a real-world scenario,
  // you'll check if the user is authenticated or not.
  return true;
};

// ProtectRoute component to guard routes that require authentication.
// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  if (isAuthenticated()) {
    return children;
  }

  // Redirect to login or show a message if not authenticated.
  return <div>You are not authenticated. <Link to="/login">Login</Link></div>;
}

function signOut() {
  // Clear authentication-related data
  localStorage.removeItem("authToken");
  // TODO: Add any other cleanup logic if necessary

  // Redirect to login page
  window.location.href = "/login";
}

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />
      </Routes>
      <button onClick={signOut}>Sign Out</button>
    </Router>
    </>
  );
}

function Login() {
  // Mock login page. In a real-world scenario,
  // you'll have a form and authentication logic here.
  return <div>Login Page</div>;
}

export default App;
