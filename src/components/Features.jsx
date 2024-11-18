import FeatureCard from './FeatureCard';

const Features = () => (
  <section id="features" className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    <FeatureCard
      title="Adaptive Learning Paths"
      description="Experience AI-powered learning roadmaps that dynamically adjust based on your progress, challenges, and career goals."
    />
    <FeatureCard
      title="Interactive Learning Suite"
      description="Access real-time AI assistance, coding challenges, and a live code playground with instant feedback and suggestions."
    />
    <FeatureCard
      title="Career Development Tools"
      description="Accelerate your career with mentorship matching, mock interviews, portfolio building, and personalized career counseling."
    />
  </section>
);

export default Features; 