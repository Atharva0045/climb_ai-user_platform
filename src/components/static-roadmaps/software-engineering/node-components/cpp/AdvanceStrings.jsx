import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const AdvanceStrings = {
  title: 'Advanced Strings',
  description: 'Master advanced string algorithms and techniques',
  sections: [
    {
      title: 'Pattern Matching',
      items: [
        'KMP Algorithm',
        'Rabin-Karp Algorithm',
        'Z Algorithm',
        'Suffix Array',
        'Suffix Tree'
      ]
    },
    {
      title: 'String Operations',
      items: [
        'String Hashing',
        'Manacher Algorithm',
        'Aho-Corasick Algorithm',
        'Regular Expressions',
        'String Compression'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Longest Common Substring',
        'String Similarity',
        'DNA Sequencing',
        'Text Processing',
        'String Encoding'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'String Algorithms',
      url: 'https://cp-algorithms.com/string/prefix-function.html',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Advanced String Tutorial',
      url: 'https://www.geeksforgeeks.org/pattern-searching/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'String Algorithms',
      url: 'https://www.youtube.com/watch?v=V5-7GzOfADQ',
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

export default AdvanceStrings; 