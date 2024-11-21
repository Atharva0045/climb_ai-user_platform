import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Heaps = {
  title: 'Heaps',
  description: 'Master heap data structure and priority queue implementations',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Binary Heap Properties',
        'Min Heap vs Max Heap',
        'Heap Operations',
        'Heapify Process',
        'Priority Queue'
      ]
    },
    {
      title: 'Implementation',
      items: [
        'Array Implementation',
        'STL Priority Queue',
        'Custom Comparators',
        'Heap Sort',
        'K-way Merge'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'K Largest Elements',
        'Median in Stream',
        'Merge K Sorted Arrays',
        'Task Scheduling',
        'Graph Algorithms'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Heap Data Structure',
      url: 'https://www.geeksforgeeks.org/heap-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Heap Tutorial',
      url: 'https://www.programiz.com/dsa/heap-data-structure',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Heap Masterclass',
      url: 'https://www.youtube.com/watch?v=HqPJF2L5h9U',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Heap Problems',
      url: 'https://leetcode.com/tag/heap-priority-queue/',
      icon: Code2
    }
  ]
};

export default Heaps; 