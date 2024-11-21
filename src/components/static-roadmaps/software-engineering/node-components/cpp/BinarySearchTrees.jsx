import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinarySearchTrees = {
  title: 'Binary Search Trees',
  description: 'Master Binary Search Tree operations and applications',
  sections: [
    {
      title: 'BST Properties',
      items: [
        'BST Definition',
        'Inorder Properties',
        'Search Operation',
        'Insertion Operation',
        'Deletion Operation'
      ]
    },
    {
      title: 'BST Operations',
      items: [
        'Finding Min/Max',
        'Predecessor/Successor',
        'Floor/Ceil Values',
        'Range Queries',
        'Balancing BST'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Self-balancing BSTs',
        'AVL Trees',
        'Red-Black Trees',
        'B-Trees',
        'Treap'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'BST Documentation',
      url: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'BST Tutorial',
      url: 'https://www.programiz.com/dsa/binary-search-tree',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'BST Complete Course',
      url: 'https://www.youtube.com/watch?v=COZK7NATh4k',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'BST Problems',
      url: 'https://leetcode.com/tag/binary-search-tree/',
      icon: Code2
    }
  ]
};

export default BinarySearchTrees; 