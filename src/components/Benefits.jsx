import { Route, Users, Rocket } from "lucide-react";

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
  <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    <BenefitCard
      icon={Route}
      title="Personalized Learning"
      description="AI-powered roadmaps that adapt to your goals"
    />
    <BenefitCard
      icon={Users}
      title="Real-Time Support"
      description="24/7 AI assistance and community collaboration"
    />
    <BenefitCard
      icon={Rocket}
      title="Career Integration"
      description="From learning to landing your dream job"
    />
  </section>
);

export default Benefits; 