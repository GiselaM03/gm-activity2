import React from "react";
import '../../App.css';
import Footer from '../Footer';
import './Gallery.css';

export default function About() {
  const images = [
    'Images/LA1.png',
    'Images/LA2.png',
    'Images/LA3.png',
  ];

  return (
    <>
      <h1 className='about'>ABOUT US</h1>
      <p>      Welcome to Like you Love it Travel. Where we are passionate to help you to achieve your dreamed vacations. 
                With a great variety of locations around the world with experts in every spot of this beautiful world we live in.
                You want to have an adventorous vacations? We can help. Do you want to get to know the best places to eat and experience
                the culinary gems of every place you visit? We can definetely help with that too. You just want to chill for your whole stay
                enjoying about being aways from your routine? We will help you to create the best vacations ever! we are here to help to
                achieve your dreamed vacations     </p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}