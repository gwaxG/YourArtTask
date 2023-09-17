import React, { useState } from 'react';
import "./page.css"

const Carousel = (p: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowLeftArrow(currentIndex - 1 !== 0);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < p.images.length - 5) {
      setCurrentIndex(currentIndex + 1);
      setShowLeftArrow(true);
    }
  };

  return (
    <div className="carousel-container">
      {showLeftArrow && <button className="arrow left" onClick={handleLeftClick}>&lt;</button>}
      {!showLeftArrow && <button className="arrow left hidden-arrow" onClick={()=>{}}>&lt;</button>}
      
      <div className="carousel-images">
        {p.images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <img key={index} src={image} alt={`Carousel Image ${index}`} className="carousel-image" />
        ))}
      </div>
      
      <button className="arrow right" onClick={handleRightClick}>&gt;</button>
    </div>
  );
};

export default Carousel;