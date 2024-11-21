import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent py-2.5">
        Transform Your Career with AI-Optimized Roadmaps
      </h2>
      <p className="text-base sm:text-lg text-gray-50 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
        Climb.ai Provides AI-powered roadmaps, personalized learning paths,
        and real-time guidance to help you achieve your career goals.
      </p>
      <button
        onClick={() => navigate('/roadmaps')}
        className="bg-blue-600 text-white py-3 px-6 text-lg rounded hover:bg-blue-700 transition-colors mt-10 inline-flex items-center gap-2"
      >
        Explore Roadmaps
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Hero; 