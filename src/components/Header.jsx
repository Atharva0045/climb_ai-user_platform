import { Menu, X, Github } from "lucide-react";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isRoadmapsPage = location.pathname === '/roadmaps';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isHomePage) {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${sectionId === '#features' ? '' : ''}`);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 w-[120px] sm:w-[160px]">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/assets/platform-icon.svg" 
                alt="Climb AI Logo" 
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <h1 className="text-white text-lg sm:text-2xl font-bold">Climb AI</h1>
            </Link>
          </div>

          <nav 
            className="hidden md:flex flex-1 justify-center max-w-2xl mx-auto px-4" 
            aria-label="Main navigation"
          >
            <div className="flex space-x-6 lg:space-x-8">
              {isRoadmapsPage ? (
                <Link
                  to="/"
                  className="text-white hover:text-cyan-400 font-medium transition-colors whitespace-nowrap"
                  aria-label="Home"
                >
                  Home
                </Link>
              ) : (
                <>
                  <Link
                    to="/roadmaps"
                    className="text-white hover:text-cyan-400 font-medium transition-colors whitespace-nowrap"
                    aria-label="Static Roadmaps"
                  >
                    Static Roadmaps
                  </Link>
                  {isHomePage && (
                    <>
                      <a
                        href="#features"
                        className="text-white hover:text-cyan-400 font-medium transition-colors whitespace-nowrap"
                        onClick={(e) => handleNavClick(e, '#features')}
                      >
                        Features
                      </a>
                      <a
                        href="#tools"
                        className="text-white hover:text-cyan-400 font-medium transition-colors whitespace-nowrap"
                        onClick={(e) => handleNavClick(e, '#tools')}
                      >
                        Tools
                      </a>
                      <a
                        href="#contributors"
                        className="text-white hover:text-cyan-400 font-medium transition-colors whitespace-nowrap"
                        onClick={(e) => handleNavClick(e, '#contributors')}
                      >
                        Contribute
                      </a>
                    </>
                  )}
                </>
              )}
            </div>
          </nav>

          <div className="flex-shrink-0 flex items-center justify-end w-[120px] sm:w-[160px] space-x-4">
            <button
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <a
              href="https://github.com/climbai/user_platform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub"
              className="text-white hover:text-cyan-400 transition-colors hidden md:block"
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
            <nav className="flex flex-col py-2">
              <Link
                to="/roadmaps"
                className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmaps
              </Link>
              {isHomePage ? (
                <>
                  <a
                    href="#features"
                    className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50"
                    onClick={(e) => {
                      handleNavClick(e, '#features');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Features
                  </a>
                  <a
                    href="#tools"
                    className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50"
                    onClick={(e) => {
                      handleNavClick(e, '#tools');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Tools
                  </a>
                  <a
                    href="#contributors"
                    className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50"
                    onClick={(e) => {
                      handleNavClick(e, '#contributors');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Contribute
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <a
                href="https://github.com/climbai/user_platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 px-4 py-3 hover:bg-gray-700/50 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 