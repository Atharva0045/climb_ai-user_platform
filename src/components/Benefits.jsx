import { Route, Bot, Rocket, Compass, BookOpen } from "lucide-react";

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6">
    <div className="mb-4 text-cyan-500">
      <Icon size={48} />
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

const Benefits = () => (
  <section id="features" className="mt-28">
    <h2 className="text-4xl font-bold text-white mb-4">
      Key Features
    </h2>
    <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
      Experience a new way of learning with AI-powered features designed for your success
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <BenefitCard
        icon={Compass}
        title="Adaptive Learning Paths"
        description="AI-powered roadmaps that dynamically adjust based on your progress and goals"
      />
      <BenefitCard
        icon={Bot}
        title="AI Learning Assistant"
        description="24/7 AI support to help you overcome challenges and guide your learning process"
      />
      <BenefitCard
        icon={BookOpen}
        title="Career Development"
        description="Portfolio building tools and technical interview preparation resources"
      />
    </div>
  </section>
);

export default Benefits; 