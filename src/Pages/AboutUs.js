import React from 'react';
import './AboutUs.css';
import ProfileCard from '../components/ProfileCard';

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='AboutUsParent'>
        <div className='AboutUsImg'>
          <img src='images/Mask group.png' alt='' />
          <h1 class='first-txt'>About Us</h1>
        </div>
        <div className='OurVision'>
          <img src='images/edgeXgame-logos_transparent.png' alt='' />
          <div className='textContent'>
            <h2>Who we are?</h2>
            <p>
              Cloud gaming is a new and exciting way to play your favorite
              games. But the only way to get started is to buy a console or
              computer, which can be expensive. Our solution is to let gamers
              buy cloud gaming as a service, in the form of NFTs game passes.
              This way, gamers can enjoy the benefits of cloud gaming without
              having to buy hardware first. Gamers can further gain royaltys on
              their NFTs game passes as they excel in gaming.
            </p>
          </div>
        </div>
        <div className='images'>
          <img src='images/Ticker.png' alt='' />
          <img src='images/Features.png' alt='' />
          <div className='video'>
            {/* eslint-disable-next-line */}
            {/* <iframe
              width='80%'
              height='400'
              src='https://www.youtube.com/embed/Pp-PPlIPuhc'
            /> */}
          </div>
          <div className='team'>
            <h2>Meet The Team ⚡</h2>
            <div className='teamMembers'>
              <div className='subTeamMembers'>
                <ProfileCard
                  name='Atharv Gulati'
                  image='images/atharv.jfif'
                  twitter='https://twitter.com/GulatiAtharv'
                  linkedin='https://www.linkedin.com/in/atharv-gulati-797620226/'
                  github='https://github.com/Atharv-02'
                />
                <ProfileCard
                  name='Ankit Gupta'
                  image='images/ankit.jfif'
                  twitter='https://twitter.com/_this_ankit'
                  linkedin='https://www.linkedin.com/in/ankit-gupta-618860247/'
                  github='https://github.com/xnki7'
                />
              </div>
              <div className='subTeamMembers'>
                <ProfileCard
                  name='Charchit Kumawat'
                  image='images/carchit.jpg'
                  twitter='https://twitter.com/Charchit_WEB3'
                  linkedin='https://www.linkedin.com/in/charchit-kumawat-blockchain/'
                  github='https://github.com/Charchitkumawat04'
                />
                <ProfileCard
                  name='Ayan Panchariya'
                  image='images/ayan.jfif'
                  twitter='https://twitter.com/Sud0_Cr4ckH3ad'
                  linkedin='https://www.linkedin.com/in/ayan-panchariya-6b74191b9/'
                  github='https://github.com/Sud0-AP'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
