import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicRecursion = {
  title: 'Basic Recursion',
  description: 'Master fundamental recursive problem-solving techniques',
  sections: [
    {
      title: 'Core Concepts',
      items: [
        'Base Case and Recursive Case',
        'Call Stack Understanding',
        'Recursive Tree',
        'Time Complexity Analysis',
        'Space Complexity (Stack Space)'
      ]
    },
    {
      title: 'Basic Problems',
      items: [
        'Factorial Calculation',
        'Fibonacci Series',
        'Array Sum/Product',
        'String Reversal',
        'Power Function'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Tail Recursion',
        'Multiple Recursion Calls',
        'Backtracking Basics',
        'Recursive Sorting',
        'Tree Recursion'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Recursion Guide',
      url: 'https://www.geeksforgeeks.org/recursion/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Recursion Tutorial',
      url: 'https://www.programiz.com/cpp-programming/recursion',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Recursion Masterclass',
      url: 'https://www.youtube.com/watch?v=IJDJ0kBx2LM',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Recursion Problems',
      url: 'https://leetcode.com/tag/recursion/',
      icon: Code2
    }
  ]
};

export default BasicRecursion; 