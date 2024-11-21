import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BitManipulation = {
  title: 'Bit Manipulation',
  description: 'Master bit manipulation techniques and operations',
  sections: [
    {
      title: 'Basic Operations',
      items: [
        'Bitwise Operators',
        'Left/Right Shifts',
        'Setting Bits',
        'Clearing Bits',
        'Toggling Bits'
      ]
    },
    {
      title: 'Common Techniques',
      items: [
        'Checking Power of 2',
        'Counting Set Bits',
        'Finding Single Number',
        'Binary Number Properties',
        'Bit Masking'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Subset Generation',
        'XOR Properties',
        'Bit DP',
        'Memory Optimization',
        'State Compression'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Bit Manipulation Guide',
      url: 'https://www.geeksforgeeks.org/bits-manipulation-important-tactics/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Bitwise Operations',
      url: 'https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Bit Manipulation Tricks',
      url: 'https://www.youtube.com/watch?v=NLKQEOgBAnw',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/bit-manipulation/',
      icon: Code2
    }
  ]
};

export default BitManipulation; 