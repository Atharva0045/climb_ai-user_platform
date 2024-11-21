import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicMaths = {
  title: 'Basic Maths',
  description: 'Essential mathematical concepts for programming',
  sections: [
    {
      title: 'Number Theory',
      items: [
        'Prime Numbers',
        'GCD and LCM',
        'Factorials',
        'Fibonacci Series',
        'Modular Arithmetic'
      ]
    },
    {
      title: 'Mathematical Operations',
      items: [
        'Binary Operations',
        'Decimal Operations',
        'Power and Square Root',
        'Logarithms',
        'Basic Algebra'
      ]
    },
    {
      title: 'Problem Solving',
      items: [
        'Armstrong Numbers',
        'Perfect Numbers',
        'Palindrome Numbers',
        'Series Problems',
        'Divisibility Rules'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Math Concepts',
      url: 'https://www.geeksforgeeks.org/mathematical-algorithms/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Number Theory',
      url: 'https://cp-algorithms.com/algebra/basic-numbers.html',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Math for CP',
      url: 'https://www.youtube.com/watch?v=L3ud3rXpIxA',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Math Problems',
      url: 'https://leetcode.com/tag/math/',
      icon: Code2
    }
  ]
};

export default BasicMaths; 