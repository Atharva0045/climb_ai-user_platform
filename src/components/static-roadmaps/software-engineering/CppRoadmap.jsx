import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CppFlowchart from './flowcharts/CppFlowchart';

const CppRoadmap = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/roadmap/software-engineer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Language Selection
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Software Engineering (C++) Roadmap
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow this structured path to master C++ programming along with data structures and algorithms to land your dream software engineering job.
          </p>
        </div>

        <CppFlowchart />

        <div className="mt-8 flex justify-center gap-6">
          {["Beginner", "Intermediate", "Advanced", "Expert"].map(level => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                level === "Beginner" ? "bg-cyan-500" :
                level === "Intermediate" ? "bg-blue-500" :
                level === "Advanced" ? "bg-indigo-500" :
                "bg-purple-500"
              }`}></div>
              <span className="text-gray-400 text-sm">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CppRoadmap; 