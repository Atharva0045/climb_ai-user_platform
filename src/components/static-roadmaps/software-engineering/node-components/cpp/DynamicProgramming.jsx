import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const DynamicProgramming = {
  title: 'Dynamic Programming',
  description: 'Master the art of solving complex problems using Dynamic Programming',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Memoization',
        'Tabulation',
        'State and Transition',
        'Optimal Substructure',
        'Overlapping Subproblems'
      ]
    },
    {
      title: 'Common Patterns',
      items: [
        '0/1 Knapsack',
        'Unbounded Knapsack',
        'Longest Common Subsequence',
        'Matrix Chain Multiplication',
        'Coin Change Problems'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'DP on Trees',
        'DP with Bitmasks',
        'Digit DP',
        'Probability DP',
        'DP with Game Theory'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'DP Guide',
      url: 'https://www.geeksforgeeks.org/dynamic-programming/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'DP Patterns',
      url: 'https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'DP Masterclass',
      url: 'https://www.youtube.com/watch?v=nqowUJzG-iM',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'DP Problems',
      url: 'https://leetcode.com/tag/dynamic-programming/',
      icon: Code2
    }
  ]
};

export default DynamicProgramming; 