import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicHashing = {
  title: 'Basic Hashing',
  description: 'Learn fundamental hashing concepts and implementations',
  sections: [
    {
      title: 'Core Concepts',
      items: [
        'Hash Functions',
        'Collision Resolution',
        'Load Factor',
        'Rehashing',
        'Hash Tables'
      ]
    },
    {
      title: 'Implementation',
      items: [
        'Separate Chaining',
        'Open Addressing',
        'Linear Probing',
        'Quadratic Probing',
        'Double Hashing'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Frequency Counting',
        'Two Sum Problem',
        'Substring Problems',
        'Array Intersection',
        'Dictionary Implementation'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Hashing Guide',
      url: 'https://www.geeksforgeeks.org/hashing-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Hash Table Tutorial',
      url: 'https://www.programiz.com/dsa/hash-table',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Hashing Explained',
      url: 'https://www.youtube.com/watch?v=shs0KM3wKv8',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Hashing Problems',
      url: 'https://leetcode.com/tag/hash-table/',
      icon: Code2
    }
  ]
};

export default BasicHashing; 