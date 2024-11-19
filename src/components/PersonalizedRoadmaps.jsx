import { Code2, Database, Brain, Cloud, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const RoadmapCategory = ({ icon: Icon, title, roles, locked }) => (
  <div className={`bg-gray-800 rounded-lg p-6 border-2 border-transparent transition-all duration-300 ${
    locked ? 'opacity-75' : 'hover:border-cyan-500'
  }`}>
    <div className="flex items-center gap-4 mb-4">
      <Icon className={`w-8 h-8 ${locked ? 'text-gray-500' : 'text-cyan-500'}`} />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {locked && <Lock className="w-5 h-5 text-gray-500 ml-auto" />}
    </div>
    <div className="space-y-3">
      {roles.map((role) => (
        <div
          key={role}
          className={`block p-3 rounded-md ${
            locked 
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition-colors'
          }`}
        >
          {role}
          {locked && <span className="text-sm ml-2">(Coming Soon)</span>}
        </div>
      ))}
    </div>
  </div>
);

const QuizPrompt = () => (
  <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-8 mb-12 backdrop-blur-sm border border-cyan-500/20">
    <h2 className="text-2xl font-bold text-white mb-4">
      Personalize Your Learning Journey
    </h2>
    <p className="text-gray-300 mb-6">
      Take a quick 5-minute quiz to help us understand your interests and goals. 
      We'll use this information to create a customized learning path just for you.
    </p>
    <Link
      to="#" // We'll update this later
      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 group"
    >
      Start Quiz
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const PersonalizedRoadmaps = () => {
  const { user } = useAuth();
  const categories = [
    {
      icon: Code2,
      title: "AI-Recommended Paths",
      roles: [
        "Recommended Path 1",
        "Recommended Path 2",
        "Custom Learning Track",
      ],
      locked: !user,
    },
    {
      icon: Database,
      title: "Your Progress",
      roles: [
        "Current Learning Path",
        "Completed Modules",
        "Skill Assessment",
      ],
      locked: !user,
    },
    {
      icon: Brain,
      title: "Personalized Resources",
      roles: [
        "Custom Learning Materials",
        "Practice Projects",
        "Mentor Matching",
      ],
      locked: !user,
    },
    {
      icon: Cloud,
      title: "Learning Analytics",
      roles: [
        "Progress Tracking",
        "Skill Gap Analysis",
        "Performance Metrics",
      ],
      locked: !user,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Personalized Learning Journey
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {user 
              ? "Your AI-powered personalized learning experience awaits. Take our quiz to get started."
              : "Sign in to unlock your personalized learning journey with AI-powered recommendations and progress tracking."}
          </p>
        </div>

        {user && <QuizPrompt />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <RoadmapCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              roles={category.roles}
              locked={category.locked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRoadmaps; 