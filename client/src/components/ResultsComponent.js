import React from 'react';
import '../component-styles/ResultsComponent.css';

function Results(props) {
  const winners = props.winners.map((name, index) => {
    return (
      <h2 key={index} className="results-winner">
        {name}
      </h2>
    );
  });

  const leaderboard = props.leaderboard.map((player, index) => {
    return (
      <tbody data-testid="row" key={index}>
        <tr className="results-leaderboard-cell">
          <td className="results-leaderboard-name">{player.name}</td>
          <td className="results-leaderboard-votes">{player.votes}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="results-container">
      <h1 className="results-title">
        {props.winners.length > 1 ? 'Winners' : 'Winner'}
      </h1>
      {winners}

      <table className="results-leaderboard">
        <thead>
          <tr className="results-leaderboard-cell">
            <th className="results-leaderboard-name">NAME</th>
            <th className="results-leaderboard-votes">VOTES</th>
          </tr>
        </thead>
        {leaderboard}
      </table>
    </div>
  );
}

export default Results;
