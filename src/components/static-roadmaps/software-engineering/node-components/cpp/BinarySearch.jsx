import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinarySearch = {
  title: 'Binary Search',
  description: 'Master the binary search algorithm and its variations',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Binary Search Algorithm',
        'Time Complexity Analysis',
        'Iterative Implementation',
        'Recursive Implementation',
        'Search Space Understanding'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Lower and Upper Bound',
        'Binary Search on Answer',
        'Search in Rotated Array',
        'Peak Element Finding',
        'Matrix Binary Search'
      ]
    },
    {
      title: 'Problem Patterns',
      items: [
        'Monotonic Functions',
        'Minimizing Maximum',
        'Maximizing Minimum',
        'Finding K-th Element',
        'Range-based Problems'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Binary Search Guide',
      url: 'https://www.geeksforgeeks.org/binary-search/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Binary Search Patterns',
      url: 'https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Binary Search Masterclass',
      url: 'https://www.youtube.com/watch?v=GU7DpgHINWQ',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/binary-search/',
      icon: Code2
    }
  ]
};

export default BinarySearch; 