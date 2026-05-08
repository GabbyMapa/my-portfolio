import { useEffect, useState } from 'react';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Replace 'yourusername' with actual GitHub username
  const username = 'yourusername';

  useEffect(() => {
    // Fetch GitHub stats
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      });
  }, [username]);

  return (
    <section id="github" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          GitHub Activity
        </h2>
        
        {loading ? (
          <div className="text-center text-gray-600">
            Loading GitHub stats...
          </div>
        ) : stats ? (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-rose-soft rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-rose-dark mb-2">
                  {stats.publicRepos}
                </div>
                <div className="text-gray-600">Public Repositories</div>
              </div>
              <div className="bg-rose-soft rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-rose-dark mb-2">
                  {stats.followers}
                </div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="bg-rose-soft rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-rose-dark mb-2">
                  {stats.following}
                </div>
                <div className="text-gray-600">Following</div>
              </div>
            </div>
            
            <div className="bg-cream rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Contribution Graph
              </h3>
              <div className="flex justify-center">
                <img
                  src={`https://ghchart.rshah.org/${username}`}
                  alt="GitHub Contribution Graph"
                  className="w-full max-w-3xl"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Failed to load GitHub stats. Please check the username.
          </div>
        )}
      </div>
    </section>
  );
}
