import React from "react";

export const Title = ({ title, para }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl playfair font-bold text-primary">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-500 font-medium mt-6">
        {para}
      </p>
    </div>
  );
};
