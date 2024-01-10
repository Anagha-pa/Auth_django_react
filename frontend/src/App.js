import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
          {/* Use the correct path here */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>
  );
}

export default App;
