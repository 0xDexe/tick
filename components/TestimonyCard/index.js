import React from "react";

const TestimonyCard = ({ img, name, designation, description }) => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden rounded-lg p-2 laptop:p-4 link justify-center"
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

      <h1 className="mt-5 text-2xl laptop:text-3xl font-medium">
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

export default TestimonyCard;
