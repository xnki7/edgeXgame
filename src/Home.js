import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import img1 from './bg.png';
import img2 from './Home.png';
import img3 from './img3.jpeg';
import img4 from './img3.jpeg';
import img7 from './new.jpeg';
import img9 from './new-img.jpeg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sm1 from './wallet 4.png';
import sm2 from './cloud-plus 1.png';
import sm3 from './tags 1.png';
import sm4 from './folder-plus 3.png';
// import './style.css';

const spanStyle = {
  padding: '20px',
  // background: '#efefef',
  color: '#000000',
};

const divStyle = {
  width: '85vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '540px',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '2rem',
};
const slideImages = [
  {
    url: img7,
  },
  {
    url: img4,
  },
  {
    url: img9,
  },
];

const Home = () => {
  return (
    <>
      <div className='main-page'>
        <div className='head-content'>
          <div className='head-img'>
            <img src={img1} alt='' />
          </div>
          <div className='head-img-2'>
            <div className='box'>
              <div className='img-cont'>
                <img src={img2} alt='' />
              </div>
              <p>FIFA 23</p>
            </div>
          </div>
          <div className='side-head'>
            <div className=''>
              <h3>A NEW PERSPECTIVE</h3>
              <p>
                Digital marketplace for collectibles and non-fungible tokens.
                Buy, sell, and discover exclusive digital assets.
              </p>
              <div className='btn-container'>
                <button className='exp exp-1'>Explore</button>
                <button className='exp exp-2'>Know More</button>
              </div>
            </div>
          </div>
        </div>
        <div className='main-content'>
          <h3>CREATE AND SELL YOUR NFT</h3>
        </div>
        <div className='img-grid'>
          <div className='slide-container'>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  >
                    <span style={spanStyle}>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='what-app-does'>
          <div className='do do-1'>
            <img src={sm1} alt='' />
            <p>Create Your Wallet</p>
          </div>
          <div className='do do-2'>
            <img src={sm4} alt='' />
            <p>Add Your NFT</p>
          </div>
          <div className='do do-2'>
            <img src={sm2} alt='' />
            <p>Enjoy The Game</p>
          </div>
          <div className='do do-3'>
            <img src={sm3} alt='' />
            <p>Buy/Sell The NFT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
