import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import { LoginScreen } from './pages/LoginScreen'; // Import LoginScreen
import { SignupScreen } from './pages/SignupScreen'; // Import SignupScreen

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure footer stays at bottom */}
        <Navbar />
        <main className="flex-grow"> {/* Allow content to grow and push footer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginScreen />} /> {/* Add Login Route */}
            <Route path="/signup" element={<SignupScreen />} /> {/* Add Signup Route */}
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
