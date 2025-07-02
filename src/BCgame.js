import React, { useState, useEffect } from 'react';
import './App.css';

const CHICKEN_IMG = 'https://thumbs.dreamstime.com/z/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-49741285.jpg?ct=jpeg';
const BANANA_IMG = 'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768';
const NUM_TILES = 36;

function shuffleTiles() {
  const allTiles = [];
  for (let i = 0; i < NUM_TILES / 2; i++) {
    allTiles.push('chicken');
    allTiles.push('banana');
  }

  for (let i = allTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allTiles[i], allTiles[j]] = [allTiles[j], allTiles[i]];
  }

  return allTiles;
}

function ChickenBananaGame() {
  const [tiles, setTiles] = useState(shuffleTiles());
  const [revealed, setRevealed] = useState(Array(NUM_TILES).fill(false));
  const [playerChoice, setPlayerChoice] = useState(null);
  const [mistake, setMistake] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinCondition();
  }, [revealed]);

  const handleTileClick = (index) => {
    if (revealed[index] || winner) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (!playerChoice) {
      setPlayerChoice(tiles[index]);
    } else if (tiles[index] !== playerChoice) {
      setMistake(true);
      setWinner(playerChoice === 'chicken' ? 'Banana Player' : 'Chicken Player');
    }
  };

  const checkWinCondition = () => {
    if (!playerChoice) return;

    const allCorrectRevealed = tiles
      .map((val, i) => (val === playerChoice ? revealed[i] : null))
      .filter((val) => val === false).length === 0;

    if (allCorrectRevealed && !mistake) {
      setWinner(`${capitalize(playerChoice)} Player`);
    }
  };

  const restartGame = () => {
    setTiles(shuffleTiles());
    setRevealed(Array(NUM_TILES).fill(false));
    setPlayerChoice(null);
    setMistake(false);
    setWinner(null);
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="container">
      <h1>Chicken or Banana?</h1>

      {!playerChoice && (
        <div className="player-select">
          <p>Which player are you? </p>
          <div className="choice-buttons">
            <button onClick={() => setPlayerChoice('chicken')}> Chicken </button>
            <button onClick={() => setPlayerChoice('banana')}> Banana </button>
          </div>
        </div>
      )}

      <div className="grid">
        {tiles.map((type, index) => (
          <div
            key={index}
            className="tile"
            onClick={() => handleTileClick(index)}
          >
            {revealed[index] ? (
              <img
                src={type === 'chicken' ? CHICKEN_IMG : BANANA_IMG}
                alt={type}
              />
            ) : null}
          </div>
        ))}
      </div>

      {winner && (
        <div className="result">
           You lose
          <br />
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default ChickenBananaGame;
