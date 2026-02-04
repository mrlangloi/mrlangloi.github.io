import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="container">
                {/* Navbar */}
                <Navbar />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/projects" element={<Projects />} /> */}
                        <Route path="/about" element={<About />} />
                    </Routes>
                    {/* Footer */}
                    <Footer />
                </main>
            </div>
        </Router>
    );
}

export default App;