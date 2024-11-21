import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const GreedyAlgorithms = {
  title: 'Greedy Algorithms',
  description: 'Master greedy algorithmic techniques and problem-solving',
  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Greedy Approach',
        'Optimal Substructure',
        'Local vs Global Optima',
        'Proof of Correctness',
        'Time Complexity Analysis'
      ]
    },
    {
      title: 'Common Problems',
      items: [
        'Activity Selection',
        'Fractional Knapsack',
        'Huffman Coding',
        'Job Sequencing',
        'Minimum Coins'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Minimum Spanning Trees',
        "Dijkstra's Algorithm",
        'Interval Scheduling',
        'Task Assignment',
        'Set Cover Problem'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Greedy Algorithms',
      url: 'https://www.geeksforgeeks.org/greedy-algorithms/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Greedy Methods',
      url: 'https://www.programiz.com/dsa/greedy-algorithm',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Greedy Techniques',
      url: 'https://www.youtube.com/watch?v=HzeK7g8cD0Y',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/greedy/',
      icon: Code2
    }
  ]
};

export default GreedyAlgorithms; 