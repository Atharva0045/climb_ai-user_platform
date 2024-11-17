import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 font-sans">
      {/* Header */}
      <header className="w-full py-3">
        <h1 className="text-white text-4xl font-bold text-left ml-4">
          Climb AI
        </h1>

        {/* Navigation Bar */}
        <nav class="fixed w-full top-0 z-50">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center space-x-10 h-16 items-center">
              <a href="#" class="text-white hover:text-gray-300 font-medium">
                Home
              </a>
              <a href="#" class="text-white hover:text-gray-300 font-medium">
                About
              </a>
              <a href="#" class="text-white hover:text-gray-300 font-medium">
                Services
              </a>
              <a href="#" class="text-white hover:text-gray-300 font-medium">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl text-center py-10">
        <h2 className="text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent py-2.5">
          Transform Your Career with AI-Optimized Roadmaps
        </h2>
        <p className="text-lg text-gray-50 leading-relaxed mb-10">
          Climb.ai Provides AI-powered roadmaps, personalized learning paths,
          and real-time guidance to help you achieve your career goals.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 text-lg rounded hover:bg-blue-700 transition-colors mt-10">
          Get Started for Free
        </button>

        {/* Features Section */}
        <section className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-4 border-cyan-500 rounded-lg shadow-md p-6 text-left">
            <h3 className="text-2xl text-white font-semibold mb-2">
              Automate Your Processes
            </h3>
            <p className="text-white">
              Save time and reduce errors by automating repetitive tasks with AI
              precision.
            </p>
          </div>

          <div className="border-4 border-cyan-500 rounded-lg shadow-md p-6 text-left">
            <h3 className="text-2xl text-white font-semibold mb-2">
              Data-Driven Insights
            </h3>
            <p className="text-white">
              Gain valuable insights from your data to make informed decisions
              faster.
            </p>
          </div>

          <div className="border-4 border-cyan-500 rounded-lg shadow-md p-6 text-left">
            <h3 className="text-2xl text-white font-semibold mb-2">
              Seamless Integration
            </h3>
            <p className="text-white">
              Integrate Climb AI into your existing tools without a hitch.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 w-full p-2 text-center text-white text-sm">
        © {new Date().getFullYear()} Climb AI. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
