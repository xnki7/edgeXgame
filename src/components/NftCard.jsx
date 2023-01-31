import React from 'react';
import './NftCard.css';

function NftCard({ game }) {
  return (
    <div className='NftCard'>
      <img src={game.url} alt='' />
      <h2 className='nft_title'>{game.name}</h2>
      <p className='price'>{game.price} ETH</p>
      <button className='buy'>Buy</button>
    </div>
  );
}

export default NftCard;
