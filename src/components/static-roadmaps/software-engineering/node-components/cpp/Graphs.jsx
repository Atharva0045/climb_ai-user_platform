import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Graphs = {
  title: 'Graphs',
  description: 'Master graph algorithms and their applications',
  sections: [
    {
      title: 'Graph Basics',
      items: [
        'Graph Representation',
        'Graph Types',
        'Graph Traversal',
        'Connected Components',
        'Cycle Detection'
      ]
    },
    {
      title: 'Graph Algorithms',
      items: [
        "Dijkstra's Algorithm",
        'Bellman Ford',
        'Floyd Warshall',
        'Minimum Spanning Tree',
        'Topological Sort'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Strongly Connected Components',
        'Network Flow',
        'Bipartite Matching',
        'Articulation Points',
        'Bridge Detection'
      ]
    }
  ],
  resources: [
    {
      type: 'documentation',
      title: 'Graph Theory',
      url: 'https://cp-algorithms.com/graph/basic-graph.html',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Graph Algorithms',
      url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
      icon: BookOpen
    },
    {
      type: 'video',
      title: 'Graph Masterclass',
      url: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Graph Problems',
      url: 'https://leetcode.com/tag/graph/',
      icon: Code2
    }
  ]
};

export default Graphs; 