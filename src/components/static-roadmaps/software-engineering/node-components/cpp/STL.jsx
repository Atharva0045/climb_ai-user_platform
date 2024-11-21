import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const STL = {
  title: 'Standard Template Library (STL)',
  description: 'Master C++ STL containers, algorithms, and iterators',
  sections: [
    {
      title: 'Containers',
      items: [
        'Vector and Array',
        'Set and Multiset',
        'Map and Multimap',
        'List and Forward List',
        'Deque',
        'Priority Queue'
      ]
    },
    {
      title: 'Algorithms',
      items: [
        'Sorting Algorithms',
        'Searching Algorithms',
        'Numeric Algorithms',
        'Heap Algorithms',
        'Min/Max Operations'
      ]
    },
    {
      title: 'Iterators',
      items: [
        'Iterator Types',
        'Iterator Operations',
        'Range-based Operations',
        'Custom Iterators'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'C++ STL Reference',
      url: 'https://en.cppreference.com/w/cpp/container',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'STL Tutorial',
      url: 'https://www.geeksforgeeks.org/cpp-stl-tutorial/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'STL Complete Course',
      url: 'https://www.youtube.com/watch?v=RRVYpIET_RU',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'STL Practice Problems',
      url: 'https://leetcode.com/tag/cpp-stl/',
      icon: Code2
    }
  ]
};

export default STL; 