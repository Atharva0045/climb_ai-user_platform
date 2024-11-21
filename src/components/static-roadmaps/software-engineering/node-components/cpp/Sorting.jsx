import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Sorting = {
  title: 'Sorting Algorithms',
  description: 'Learn and implement various sorting algorithms in C++',
  sections: [
    {
      title: 'Basic Sorting',
      items: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Counting Sort',
        'Radix Sort'
      ]
    },
    {
      title: 'Advanced Sorting',
      items: [
        'Merge Sort',
        'Quick Sort',
        'Heap Sort',
        'Shell Sort',
        'Tim Sort'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Sorting in STL',
        'Custom Comparators',
        'Stability in Sorting',
        'Hybrid Sorting',
        'External Sorting'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Sorting Algorithms',
      url: 'https://www.geeksforgeeks.org/sorting-algorithms/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Sorting Tutorial',
      url: 'https://www.programiz.com/dsa/sorting-algorithm',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Sorting Visualized',
      url: 'https://www.youtube.com/watch?v=kPRA0W1kECg',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Sorting Problems',
      url: 'https://leetcode.com/tag/sorting/',
      icon: Code2
    }
  ]
};

export default Sorting; 