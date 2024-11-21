import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Functions = {
  title: 'Functions',
  description: 'Master function concepts and implementations in C++',
  sections: [
    {
      title: 'Function Basics',
      items: [
        'Function Declaration',
        'Function Definition',
        'Function Prototypes',
        'Return Types',
        'Parameters and Arguments'
      ]
    },
    {
      title: 'Advanced Concepts',
      items: [
        'Function Overloading',
        'Default Arguments',
        'Inline Functions',
        'Lambda Functions',
        'Function Pointers'
      ]
    },
    {
      title: 'Best Practices',
      items: [
        'Parameter Passing',
        'Return Value Optimization',
        'Exception Handling',
        'Function Templates',
        'Recursive Functions'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'C++ Functions',
      url: 'https://en.cppreference.com/w/cpp/language/functions',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Function Guide',
      url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-functions/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Functions Tutorial',
      url: 'https://www.youtube.com/watch?v=V9zuox47zr0',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Function Problems',
      url: 'https://www.hackerrank.com/domains/cpp/functions',
      icon: Code2
    }
  ]
};

export default Functions; 