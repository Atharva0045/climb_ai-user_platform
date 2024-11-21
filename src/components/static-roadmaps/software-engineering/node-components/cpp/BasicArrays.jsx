import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicArrays = {
  title: 'Basic Arrays',
  description: 'Master array operations and manipulations in C++',
  sections: [
    {
      title: 'Array Fundamentals',
      items: [
        'Array Declaration',
        'Array Initialization',
        'Array Traversal',
        'Multi-dimensional Arrays',
        'Dynamic Arrays'
      ]
    },
    {
      title: 'Basic Operations',
      items: [
        'Insertion and Deletion',
        'Linear Search',
        'Array Rotation',
        'Array Reversal',
        'Subarray Operations'
      ]
    },
    {
      title: 'Common Problems',
      items: [
        'Maximum/Minimum Element',
        'Second Largest Element',
        'Remove Duplicates',
        'Array Rearrangement',
        "Kadane's Algorithm"
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Array Documentation',
      url: 'https://en.cppreference.com/w/cpp/container/array',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Array Tutorial',
      url: 'https://www.geeksforgeeks.org/array-data-structure/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Array Masterclass',
      url: 'https://www.youtube.com/watch?v=n60Dn0UsbEk',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Array Problems',
      url: 'https://leetcode.com/tag/array/',
      icon: Code2
    }
  ]
};

export default BasicArrays; 