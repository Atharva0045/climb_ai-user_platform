import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const PatternQuestions = {
  title: 'Pattern Questions',
  description: 'Master pattern-based problem solving in C++',
  sections: [
    {
      title: 'Basic Patterns',
      items: [
        'Rectangle Patterns',
        'Triangle Patterns',
        'Number Patterns',
        'Star Patterns',
        'Pyramid Patterns'
      ]
    },
    {
      title: 'Advanced Patterns',
      items: [
        'Diamond Patterns',
        'Hollow Patterns',
        'Mirror Patterns',
        'Butterfly Patterns',
        'Pascal Triangle'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Pattern Guide',
      url: 'https://www.geeksforgeeks.org/pattern-printing-questions/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Pattern Problems',
      url: 'https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Pattern Solutions',
      url: 'https://www.youtube.com/watch?v=tNm_NNSB3_w',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Patterns',
      url: 'https://practice.geeksforgeeks.org/topics/pattern-printing/',
      icon: Code2
    }
  ]
};

export default PatternQuestions; 