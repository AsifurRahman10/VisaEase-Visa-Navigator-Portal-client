import React from "react";

export const Title = ({ title, para }) => {
  return (
    <div className="text-center" data-aos="fade-up" data-aos-duration={1000}>
      <h2 className="text-4xl md:text-6xl playfair font-bold text-primary">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-500 font-medium mt-6 dark:text-gray-300">
        {para}
      </p>
    </div>
  );
};
