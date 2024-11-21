import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinaryTrees = {
  title: 'Binary Trees',
  description: 'Master binary tree concepts and implementations',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Tree Terminology',
        'Types of Binary Trees',
        'Tree Properties',
        'Tree Traversals',
        'Tree Construction'
      ]
    },
    {
      title: 'Tree Operations',
      items: [
        'Insertion and Deletion',
        'Height and Depth',
        'Lowest Common Ancestor',
        'Path Problems',
        'Tree Views'
      ]
    },
    {
      title: 'Advanced Concepts',
      items: [
        'Balanced Trees',
        'Tree Serialization',
        'Tree DP',
        'Morris Traversal',
        'Tree Isomorphism'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Binary Tree Guide',
      url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Tree Tutorial',
      url: 'https://www.programiz.com/dsa/binary-tree',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Tree Masterclass',
      url: 'https://www.youtube.com/watch?v=fAAZixBzIAI',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Tree Problems',
      url: 'https://leetcode.com/tag/binary-tree/',
      icon: Code2
    }
  ]
};

export default BinaryTrees; 