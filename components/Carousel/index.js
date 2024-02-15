

  import React, { useState } from 'react';

    const Carousel = ({ slides }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    return (

    <div className="p-3 w-full h-auto laptop:w-5/6 mt-3 relative overflow-hidden">
    <div className="relative">
      <img
        src={slides[currentIndex].imageUrl}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-auto object-cover"
      />
    </div>

    <button className="absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 hover:text-5xl hover:bg-gray-100 text-3xl text-slate-900 p-5 cursor-pointer"
    onClick={goToPrevSlide}>    &lt;  </button>
    <button className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 hover:text-5xl hover:bg-gray-100 text-3xl text-slate-900 p-5 cursor-pointer"
    onClick={goToNextSlide}>   &gt;   </button>
  </div>  

  );
};

export default Carousel;
