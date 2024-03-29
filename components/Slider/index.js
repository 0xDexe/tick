import React , {useState} from 'react';

const TestimonyCard = ({ img, name, designation, description }) => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link justify-center"
      //onClick={onClick} background div
    >
      <div
        className="relative rounded-full overflow-hidden transition-all ease-out duration-300 justify-center mob:h-auto"
        style={{ height: "200px" , width: "200px" }} 
        // image div
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>

      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "default"}
      </h1>
      <h1 className=" text-lg font-medium">
        {designation ? designation : "default"}
      </h1>
      <h2 className="mt-4 text-xl opacity-70">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

const TestimonySlider = ({ testimonydata }) => {
  const length = testimonydata.length;
  const objects = [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
    renderMap(); 
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? length - 1 : currentIndex - 1
    );
    renderMap(); 
  };

  const renderMap = () => {
    objects.slice(2); 
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const index = i % length;
      objects.push(
        <TestimonyCard
          key={testimonydata[index].id}
          img={testimonydata[index].image}
          name={testimonydata[index].name}
          description={testimonydata[index].description}
          designation={testimonydata[index].designation}
        />
      );
    }
    return objects;
  };


  return (
    <div className="p-10 mt-10 relative max-w-full overflow-hidden">
      <div className="mt-5 laptop:mt-10 grid laptop:grid-cols-3 grid-cols-1 gap-4">
        {renderMap()}
      </div>

      <button
        className="absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 hover:text-5xl hover:bg-gray-900 text-3xl text-gray-500 p-5 cursor-pointer"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 hover:text-5xl hover:bg-gray-900 text-3xl text-gray-500 p-5 cursor-pointer"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonySlider;