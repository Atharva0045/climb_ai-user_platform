// src/App.js

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 font-sans min-h-screen">
      <Header />
      
      <main className="max-w-7xl text-center py-10 px-4 mt-16">
        <Hero />
        <Benefits />
        <Features />
        <Contributors />
      </main>

      <Footer />
    </div>
  );
};

export default App;
