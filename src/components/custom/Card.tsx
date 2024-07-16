// src/components/custom/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  date: string;
  caption: string;
  description: string;
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  caption,
  description,
  backgroundImage,
}) => {
  return (
    <div className="bg-white hover:shadow-lg p-4 w-full transition-all hover:-translate-y-1 duration-300 cursor-pointer">
      <div
        className="bg-gray-500 rounded-sm w-full h-40 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="py-4">
        <div className="flex text-xs">
          <h5 className="font-medium">{title}</h5>
          <span className="text-gray-400">- {date}</span>
        </div>
        <h4 className="py-2 font-bold">{caption}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
