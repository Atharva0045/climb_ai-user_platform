import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent py-2.5 leading-tight">
        Transform Your Career with AI-Optimized Roadmaps
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-50 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
        Climb.ai Provides AI-powered roadmaps, personalized learning paths,
        and real-time guidance to help you achieve your career goals.
      </p>
      <button
        onClick={() => navigate('/roadmaps')}
        className="bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base lg:text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 mt-6 sm:mt-8 lg:mt-10 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Explore Roadmaps
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Hero; 