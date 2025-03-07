import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import './TeamList.css';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the teams data from the JSON file
    fetch('/CollegeBasketballTeams.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch teams data');
        }
        return response.json();
      })
      .then(data => {
        setTeams(data.teams);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading teams...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="team-list">
      <h2 className="team-list-title">All Teams ({teams.length})</h2>
      <div className="team-grid">
        {teams.map(team => (
          <TeamCard key={team.tid} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
