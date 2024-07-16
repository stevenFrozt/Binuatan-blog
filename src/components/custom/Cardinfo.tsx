// src/components/custom/Cardinfo.tsx
import React from "react";
import Card from "./Card";
import details from "@/data/details.json";

const Cardinfo: React.FC = () => {
  return (
    <div className="gap-8 grid md:grid-cols-3 w-full">
      {details.map((detail) => (
        <Card
          key={detail.id}
          title={detail.title}
          date={detail.date}
          caption={detail.caption}
          description={detail.description}
          backgroundImage={detail.backgroundImage}
        />
      ))}
    </div>
  );
};

export default Cardinfo;
