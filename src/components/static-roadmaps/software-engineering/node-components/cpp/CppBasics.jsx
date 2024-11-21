import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const CppBasics = {
  title: 'C++ Basics',
  description: 'Master the fundamental concepts of C++ programming',
  sections: [
    {
      title: 'Core Concepts',
      items: [
        'Variables and Data Types',
        'Operators and Expressions',
        'Control Flow (if, loops)',
        'Input/Output Operations'
      ]
    },
    {
      title: 'Key Topics',
      items: [
        'Memory Management',
        'Pointers and References',
        'Object-Oriented Basics',
        'Standard Template Library (STL) Introduction'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'CPP Reference',
      url: 'https://en.cppreference.com/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'C++ Tutorial for Beginners',
      url: 'https://www.learncpp.com/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'C++ Full Course',
      url: 'https://www.youtube.com/watch?v=ZzaPdXTrSb8',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'C++ Practice Problems',
      url: 'https://leetcode.com/problemset/all/?topicSlugs=cpp',
      icon: Code2
    }
  ]
};

export default CppBasics; 