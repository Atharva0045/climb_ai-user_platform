// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import Profile from "./components/Profile";
import "./index.css";

const HomePage = () => (
  <>
    <Hero />
    <Benefits />
    <Tools />
    <Contributors />
  </>
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 font-sans min-h-screen">
          <Header />
          
          <main className="max-w-7xl text-center py-10 px-4 mt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
