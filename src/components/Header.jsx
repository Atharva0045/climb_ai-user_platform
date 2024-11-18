import { Github } from "lucide-react";

const Header = () => (
  <header className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-75 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo with Icon */}
        <div className="flex items-center space-x-2">
          <img 
            src="/platform-icon.svg" 
            alt="Climb AI Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-white text-3xl font-bold">Climb AI</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8" aria-label="Main navigation">
          <a
            href="#"
            className="text-white hover:text-cyan-400 font-medium transition-colors"
            aria-label="Roadmaps"
          >
            Roadmaps
          </a>
          <a
            href="#features"
            className="text-white hover:text-cyan-400 font-medium transition-colors"
            aria-label="Features"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Features
          </a>
          <a
            href="#"
            className="text-white hover:text-cyan-400 font-medium transition-colors"
            aria-label="Community"
          >
            Community
          </a>
          <a
            href="#contributors"
            className="text-white hover:text-cyan-400 font-medium transition-colors"
            aria-label="Contribute"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contributors')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contribute
          </a>
        </nav>

        {/* GitHub Link */}
        <a
          href="https://github.com/climbai/user_platform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our GitHub"
          className="text-white hover:text-cyan-400 transition-colors"
        >
          <Github className="h-8 w-8" />
        </a>
      </div>
    </div>
  </header>
);

export default Header; 