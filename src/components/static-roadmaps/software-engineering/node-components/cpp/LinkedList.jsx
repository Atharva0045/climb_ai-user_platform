import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const LinkedList = {
  title: 'Linked List',
  description: 'Master linked list data structure and its operations',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Singly Linked List',
        'Doubly Linked List',
        'Circular Linked List',
        'Node Structure',
        'Memory Management'
      ]
    },
    {
      title: 'Basic Operations',
      items: [
        'Insertion Operations',
        'Deletion Operations',
        'Traversal Techniques',
        'Searching Elements',
        'List Modification'
      ]
    },
    {
      title: 'Advanced Operations',
      items: [
        'Reversing a List',
        'Detecting Cycles',
        'Finding Middle Element',
        'Merging Lists',
        'List Partitioning'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'LinkedList Guide',
      url: 'https://www.geeksforgeeks.org/data-structures/linked-list/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'LinkedList Tutorial',
      url: 'https://www.programiz.com/dsa/linked-list',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'LinkedList Masterclass',
      url: 'https://www.youtube.com/watch?v=qp8u-frRAnU',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/linked-list/',
      icon: Code2
    }
  ]
};

export default LinkedList; 