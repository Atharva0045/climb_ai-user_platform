import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const SlidingWindow = {
  title: 'Sliding Window/2 Pointer',
  description: 'Master sliding window and two pointer techniques',
  sections: [
    {
      title: 'Sliding Window Basics',
      items: [
        'Fixed Size Window',
        'Variable Size Window',
        'Window Expansion',
        'Window Contraction',
        'Window State Management'
      ]
    },
    {
      title: 'Two Pointer Techniques',
      items: [
        'Same Direction Pointers',
        'Opposite Direction Pointers',
        'Fast and Slow Pointers',
        'Multiple Pointers',
        'Cyclic Detection'
      ]
    },
    {
      title: 'Common Problems',
      items: [
        'Subarray Problems',
        'String Problems',
        'Maximum/Minimum Window',
        'Palindrome Problems',
        'Dutch National Flag'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Sliding Window Guide',
      url: 'https://www.geeksforgeeks.org/window-sliding-technique/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Two Pointer Tutorial',
      url: 'https://leetcode.com/articles/two-pointer-technique/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Sliding Window Patterns',
      url: 'https://www.youtube.com/watch?v=MK-NZ4hN7rs',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/sliding-window/',
      icon: Code2
    }
  ]
};

export default SlidingWindow; 