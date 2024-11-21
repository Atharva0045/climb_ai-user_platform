import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicStrings = {
  title: 'Basic Strings',
  description: 'Master string manipulation and operations in C++',
  sections: [
    {
      title: 'String Basics',
      items: [
        'String Declaration',
        'String Functions',
        'String Traversal',
        'Character Operations',
        'String Concatenation'
      ]
    },
    {
      title: 'Common Operations',
      items: [
        'Substring Operations',
        'String Comparison',
        'String Reversal',
        'Case Conversion',
        'String Tokenization'
      ]
    },
    {
      title: 'Problem Solving',
      items: [
        'Palindrome Check',
        'Anagram Detection',
        'Pattern Matching',
        'String Compression',
        'String Rotation'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'String Reference',
      url: 'https://en.cppreference.com/w/cpp/string/basic_string',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'String Tutorial',
      url: 'https://www.geeksforgeeks.org/cpp-string-class-and-its-applications/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'String Manipulation',
      url: 'https://www.youtube.com/watch?v=W8hPsBquD6Y',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'String Problems',
      url: 'https://leetcode.com/tag/string/',
      icon: Code2
    }
  ]
};

export default BasicStrings; 