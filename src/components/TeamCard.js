import React from 'react';
import './TeamCard.css';

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <h2 className="team-name">{team.school}</h2>
      <div className="team-mascot">
        <span className="label">Mascot:</span> {team.name}
      </div>
      <div className="team-location">
        <span className="label">Location:</span> {team.city}, {team.state}
      </div>
    </div>
  );
}

export default TeamCard;
