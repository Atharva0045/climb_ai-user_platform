import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Tries = {
  title: 'Tries',
  description: 'Master Trie data structure and its applications',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Trie Structure',
        'Node Implementation',
        'Insertion Operation',
        'Search Operation',
        'Deletion Operation'
      ]
    },
    {
      title: 'Advanced Operations',
      items: [
        'Prefix Matching',
        'Pattern Matching',
        'Word Break Problem',
        'Auto-complete Feature',
        'Memory Optimization'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Dictionary Implementation',
        'Spell Checker',
        'Contact List',
        'IP Routing Tables',
        'XOR Problems'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Trie Data Structure',
      url: 'https://www.geeksforgeeks.org/trie-insert-and-search/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Trie Tutorial',
      url: 'https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Trie Masterclass',
      url: 'https://www.youtube.com/watch?v=oobqoCJlHA0',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Trie Problems',
      url: 'https://leetcode.com/tag/trie/',
      icon: Code2
    }
  ]
};

export default Tries; 