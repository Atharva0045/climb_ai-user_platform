const FeatureCard = ({ title, description }) => (
  <div className="border-4 border-cyan-500 rounded-lg shadow-md p-6 text-left">
    <h3 className="text-2xl text-white font-semibold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

export default FeatureCard; 