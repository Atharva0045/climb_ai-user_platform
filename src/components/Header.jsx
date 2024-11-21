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
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/assets/platform-icon.svg" 
                alt="Climb AI Logo" 
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">Climb AI</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex space-x-4 lg:space-x-8">
              {isRoadmapsPage ? (
                <Link
                  to="/"
                  className="text-white hover:text-cyan-400 font-medium transition-colors text-sm lg:text-base"
                >
                  Home
                </Link>
              ) : (
                <>
                  <Link
                    to="/roadmaps"
                    className="text-white hover:text-cyan-400 font-medium transition-colors text-sm lg:text-base"
                  >
                    Static Roadmaps
                  </Link>
                  {isHomePage && (
                    <>
                      <a
                        href="#features"
                        className="text-white hover:text-cyan-400 font-medium transition-colors text-sm lg:text-base"
                        onClick={(e) => handleNavClick(e, '#features')}
                      >
                        Features
                      </a>
                      <a
                        href="#tools"
                        className="text-white hover:text-cyan-400 font-medium transition-colors text-sm lg:text-base"
                        onClick={(e) => handleNavClick(e, '#tools')}
                      >
                        Tools
                      </a>
                      <a
                        href="#contributors"
                        className="text-white hover:text-cyan-400 font-medium transition-colors text-sm lg:text-base"
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

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/climbai/user_platform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub"
              className="text-white hover:text-cyan-400 transition-colors hidden sm:block"
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <button
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2 border border-gray-700">
              <Link
                to="/roadmaps"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmaps
              </Link>
              {isHomePage ? (
                <>
                  <a
                    href="#features"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      handleNavClick(e, '#features');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Features
                  </a>
                  <a
                    href="#tools"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                    onClick={(e) => {
                      handleNavClick(e, '#tools');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Tools
                  </a>
                  <a
                    href="#contributors"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors"
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <a
                href="https://github.com/climbai/user_platform"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-700 transition-colors sm:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 