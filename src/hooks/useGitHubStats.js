import { useState, useEffect } from 'react';

const GITHUB_API_BASE = 'https://api.github.com/repos/climbai/user_platform';
const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

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
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setStats(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data if cache is invalid or expired
        const [contributorsRes, pullsRes, commitsRes] = await Promise.all([
          fetch(`${GITHUB_API_BASE}/contributors`),
          fetch(`${GITHUB_API_BASE}/pulls?state=all`),
          fetch(`${GITHUB_API_BASE}/commits`)
        ]);

        const contributors = await contributorsRes.json();
        const pulls = await pullsRes.json();
        const commits = await commitsRes.json();

        const newStats = {
          contributors: contributors.length,
          pullRequests: pulls.length,
          commits: commits.length,
          contributorsList: contributors.slice(0, 8).map(c => ({
            avatar: c.avatar_url,
            url: c.html_url,
            username: c.login
          }))
        };

        // Update cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: newStats,
          timestamp: Date.now()
        }));

        setStats(newStats);
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