import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SingleDance = lazy(() => import('./pages/SingleDance'));
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import { LoginScreen } from './pages/LoginScreen'; // Import LoginScreen
import { SignupScreen } from './pages/SignupScreen'; // Import SignupScreen
import ScrolltoTop from './components/ScrolltoTop';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure footer stays at bottom */}
        <Navbar />
        <main className="flex-grow"> {/* Allow content to grow and push footer */}
          <Suspense fallback={<div>Loading...</div>}>
          <ScrolltoTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginScreen />} /> {/* Add Login Route */}
            <Route path="/signup" element={<SignupScreen />} /> {/* Add Signup Route */}
            <Route path="/dance/:id" element={<SingleDance />}/>
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
