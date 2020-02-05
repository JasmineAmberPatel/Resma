import React from 'react';
import { SocialIcon } from 'react-social-icons';

function About() {
  return (
    <div className="About_Container">
      <div className="About">
      <h1 className="Title">Resma Patel Charity Bid Writer</h1>
        <br/>
        <h2 className="Subtitle">Best bid-writer in Bolton. 
        Supporting charities to raise funds through grants.
        </h2>
        <br/>
        <p className="Paragraph"> 
        If you want to develop your charity, raise its profile, and ensure a long term sustainable approach to delivering services then I can help with advice, coaching, training and bid-writing.
        I love weightlifting, yoga, tai chi, walking and cakes.
        </p>
        <br/>
        <p className="Paragraph">Connect with me on LinkedIn:</p>
        <br />
        <div className="social-icons">
                <SocialIcon url="https://www.linkedin.com/in/resma-patel-33a6aa138/" network="linkedin" target="_blank" style={{ height: 35, width: 35, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            </div>

      </div>
      <div className="resma">
      <img className="resma_image" src={require('../Images/resma.jpg')} alt="resma"></img>
      </div>
    </div>
  );
}

export default About;
