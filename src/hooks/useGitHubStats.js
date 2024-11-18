import { useState, useEffect } from 'react';

const GITHUB_API_BASE = 'https://api.github.com/repos/climbai/user_platform';

const useGitHubStats = () => {
  const [stats, setStats] = useState({
    contributors: 0,
    pullRequests: 0,
    commits: 0,
    contributorsList: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const [contributorsRes, pullsRes, commitsRes] = await Promise.all([
          fetch(`${GITHUB_API_BASE}/contributors`),
          fetch(`${GITHUB_API_BASE}/pulls?state=all`),
          fetch(`${GITHUB_API_BASE}/commits`)
        ]);

        const contributors = await contributorsRes.json();
        const pulls = await pullsRes.json();
        const commits = await commitsRes.json();

        setStats({
          contributors: contributors.length,
          pullRequests: pulls.length,
          commits: commits.length,
          contributorsList: contributors.slice(0, 8).map(c => ({
            avatar: c.avatar_url,
            url: c.html_url,
            username: c.login
          }))
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return { stats, loading, error };
};

export default useGitHubStats; 