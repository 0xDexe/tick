import React from "react";

const SocietyCard = ({ img, society, address }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4  link"
      //onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300  mob:h-auto"
        style={{ height: "300px" }}
      >
        <img 
          alt={society}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-4 text-3xl font-medium">
        {society ? society : "default"}
      </h1>
      <h1 className="mt-1 text-lg font-medium">
        {address ? address : "default"}
      </h1>
    </div>
  );
};

export default SocietyCard;
