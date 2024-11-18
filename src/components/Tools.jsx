import { 
  Brain, 
  LineChart, 
  Code2, 
  UserCheck, 
  FileText 
} from "lucide-react";

const ToolCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border-2 border-transparent hover:border-cyan-500">
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-cyan-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Tools = () => (
  <section id="tools" className="mt-28">
    <h2 className="text-4xl font-bold text-white mb-4">
      Our Tools Suite
    </h2>
    <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
      Comprehensive set of tools designed to accelerate your learning journey and skill development
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ToolCard
        icon={Brain}
        title="Skill Evaluation Tools"
        description="Coding challenges and quizzes to evaluate your knowledge and track your progress"
      />
      <ToolCard
        icon={LineChart}
        title="Knowledge Tracker"
        description="Track your learning milestones and visualize your progress with detailed analytics"
      />
      <ToolCard
        icon={Code2}
        title="Interactive Playground"
        description="Live coding environment with AI-powered suggestions to enhance your coding skills"
      />
      <ToolCard
        icon={UserCheck}
        title="Interview Resources"
        description="Curated technical interview preparation materials to help you succeed"
      />
      <ToolCard
        icon={FileText}
        title="Documentation Guide"
        description="Best practices and templates for writing clear and effective documentation"
      />
    </div>
  </section>
);

export default Tools; 