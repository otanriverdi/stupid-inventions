import React, {useState} from 'react';
import './styles.css';

function Vote(props) {
  const [votes, setVotes] = useState(1);

  function handleVote(e) {
    if (votes <= 3) {
      document.getElementById('vote-left').children[0].remove();
      e.target.parentNode.querySelector('.vote-counter').innerHTML +=
        "<span class='vote-coin'></span>";
      setVotes(votes + 1);
      props.submitVote(e.target.parentNode.querySelector('.vote-canvas').id);
      if (votes === 3) {
        props.doneVoting();
      }
    }
  }

  const drawingsList = props.drawingsList.map((drawing, index) => {
    if (drawing.playerName !== props.userName) {
      return (
        <div
          key={drawing.name}
          className="vote-invention"
          onClick={e => handleVote(e)}
          data-testid="drawing"
        >
          <h3 className="vote-title">{drawing.name}</h3>
          <img
            id={drawing.playerName}
            className="vote-canvas"
            src={drawing.url}
            alt={`${drawing.playerName}'s drawing`}
          ></img>
          <div className="vote-counter"></div>
        </div>
      );
    }
    return <></>;
  });

  return (
    <React.Fragment>
      <p className="vote-left" id="vote-left">
        Votes left: <span className="vote-coin" data-testid="coin"></span>
        <span className="vote-coin" data-testid="coin"></span>
        <span className="vote-coin" data-testid="coin"></span>
      </p>
      <div className="vote-container">{drawingsList}</div>
    </React.Fragment>
  );
}

export default Vote;