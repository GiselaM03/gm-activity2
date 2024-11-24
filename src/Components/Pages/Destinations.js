import React from "react";
import '../../App.css';
import Footer from '../Footer';
import './Gallery.css'; // Add styles for your gallery

export default function Destinations() {
  const images = [
    'Images/LA1.png',
    'Images/LA2.png',
    'Images/LA3.png',
    // Add more image URLs here
  ];

  return (
    <>
      <h1 className='destinations'>DESTINATIONS</h1>
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






/*import React from "react";
import '../../App.css';
import Footer from '../Footer';

export default function Destinations() {
    return (
        <>
            <h1 className='destinations'>DESTINATIONS</h1>
            <Footer />
        </>
    );
}*/