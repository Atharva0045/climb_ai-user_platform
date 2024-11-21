import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const MathsForCP = {
  title: 'Maths for CP',
  description: 'Master mathematical concepts essential for competitive programming',
  sections: [
    {
      title: 'Number Theory',
      items: [
        'Prime Numbers',
        'Modular Arithmetic',
        'Euler Totient',
        'Chinese Remainder',
        'Lucas Theorem'
      ]
    },
    {
      title: 'Combinatorics',
      items: [
        'Permutations',
        'Combinations',
        'Inclusion-Exclusion',
        'Pigeonhole Principle',
        'Probability Theory'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Matrix Exponentiation',
        'Game Theory',
        'Expected Value',
        'Geometric Algorithms',
        'FFT and NTT'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'CP Mathematics',
      url: 'https://cp-algorithms.com/algebra/binary-exp.html',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Number Theory',
      url: 'https://www.codechef.com/wiki/tutorial-number-theory/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Math for CP',
      url: 'https://www.youtube.com/watch?v=L3ud3rXpIxA',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Math Problems',
      url: 'https://codeforces.com/problemset?tags=math',
      icon: Code2
    }
  ]
};

export default MathsForCP; 