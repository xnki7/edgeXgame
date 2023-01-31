import React from 'react';
import { useState } from 'react';
import NftCard from '../components/NftCard';
import './Explore.css';
import games from './games';
function Explore() {
  const [gamesList, setGamesList] = useState(games);
  const allCategories = ['All', ...new Set(games.map((game) => game.category))];
  console.log(allCategories);
  const filterItems = (category) => {
    if (category === 'All') {
      setGamesList(games);
    } else {
      console.log(category);
      const newItems = games.filter((game) => {
        console.log(game.category);
        return game.category === category;
      });
      console.log(newItems);
      setGamesList(newItems);
    }
  };

  return (
    <div className='Explore'>
      <div className='Exploree'>
        <h1 className='head'>Explore</h1>
        <div className='exp-btn'>
          {allCategories.map((category) => {
            return (
              <button className='btn-exp' onClick={() => filterItems(category)}>
                {category}
              </button>
            );
          })}
        </div>
        <div className='nft_cards'>
          {gamesList.map((game) => {
            return <NftCard game={game} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Explore;
