import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code2, Brain, Target, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const RoadmapSection = ({ title, items, icon: Icon }) => (
  <div className="bg-gray-800 rounded-lg p-6 border-2 border-transparent hover:border-cyan-500 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-6 h-6 text-cyan-500" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li 
          key={index}
          className="flex items-start gap-3 text-gray-300 p-2 rounded hover:bg-gray-700 transition-colors"
        >
          <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 text-sm">
            {index + 1}
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RoadmapDetail = () => {
  const { roleId } = useParams();
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching roadmap data
    const fetchRoadmapData = () => {
      setLoading(true);
      // This would typically be an API call to fetch the specific roadmap
      // For now, we'll use mock data
      const mockData = {
        'frontend-developer': {
          title: 'Frontend Developer',
          description: 'Master the art of creating responsive, user-friendly web applications with modern frontend technologies.',
          fundamentals: [
            'HTML5, CSS3, and JavaScript ES6+',
            'Responsive Web Design & CSS Frameworks',
            'Version Control (Git)',
            'Web Accessibility Standards',
          ],
          core: [
            'React.js Fundamentals',
            'State Management (Redux/Context)',
            'Component Design Patterns',
            'Performance Optimization',
          ],
          advanced: [
            'TypeScript',
            'Testing (Jest, React Testing Library)',
            'Next.js & Server-Side Rendering',
            'Web Security Best Practices',
          ],
          specialization: [
            'UI/UX Design Principles',
            'Progressive Web Apps',
            'GraphQL & Apollo Client',
            'Micro-Frontend Architecture',
          ],
        },
        // Add more roles as needed
      };

      setTimeout(() => {
        setRoadmapData(mockData[roleId] || {
          title: roleId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          description: 'Roadmap coming soon...',
          fundamentals: ['Coming soon...'],
          core: ['Coming soon...'],
          advanced: ['Coming soon...'],
          specialization: ['Coming soon...'],
        });
        setLoading(false);
      }, 1000);
    };

    fetchRoadmapData();
  }, [roleId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin text-cyan-500">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/roadmaps"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Roadmaps
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {roadmapData.title} Roadmap
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {roadmapData.description}
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoadmapSection
            title="Fundamentals"
            items={roadmapData.fundamentals}
            icon={BookOpen}
          />
          <RoadmapSection
            title="Core Concepts"
            items={roadmapData.core}
            icon={Code2}
          />
          <RoadmapSection
            title="Advanced Topics"
            items={roadmapData.advanced}
            icon={Brain}
          />
          <RoadmapSection
            title="Specialization"
            items={roadmapData.specialization}
            icon={Target}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
            <Award className="w-5 h-5" />
            Start Learning Path
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail; 