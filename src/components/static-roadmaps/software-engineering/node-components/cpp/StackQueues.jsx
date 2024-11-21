import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const StackQueues = {
  title: 'Stack/Queues',
  description: 'Master stack and queue data structures and their applications',
  sections: [
    {
      title: 'Stack Operations',
      items: [
        'Push and Pop Operations',
        'Stack Implementation',
        'Stack using Arrays',
        'Stack using LinkedList',
        'Stack STL'
      ]
    },
    {
      title: 'Queue Operations',
      items: [
        'Enqueue and Dequeue',
        'Queue Implementation',
        'Circular Queue',
        'Priority Queue',
        'Double Ended Queue'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Expression Evaluation',
        'Parentheses Matching',
        'Next Greater Element',
        'Sliding Window Maximum',
        'LRU Cache'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Stack & Queue Guide',
      url: 'https://www.geeksforgeeks.org/stack-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Implementation Tutorial',
      url: 'https://www.programiz.com/dsa/stack',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Stack & Queue Masterclass',
      url: 'https://www.youtube.com/watch?v=wjI1WNcIntg',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/stack/',
      icon: Code2
    }
  ]
};

export default StackQueues; 