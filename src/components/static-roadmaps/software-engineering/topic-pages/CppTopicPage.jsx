import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import nodeComponents from '../node-components/cpp';

const CppTopicPage = () => {
  const { topicSlug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topic = nodeComponents[topicSlug] || {
    title: topicSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: `Content for ${topicSlug.replace(/-/g, ' ')} coming soon...`,
    sections: [],
    resources: []
  };

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/roadmap/software-engineer/cpp"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to C++ Roadmap
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {topic.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {topic.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {topic.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Resources Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">
                Learning Resources
              </h2>
              <div className="space-y-4">
                {topic.resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-300 hover:text-cyan-400"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{resource.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppTopicPage; 