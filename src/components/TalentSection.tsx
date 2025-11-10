"use client";
import { POSITIONS } from "@/constants/positions";
import React, { useState } from "react";
import TalentCard from "./TalentCard";
import { TALENTS } from "@/constants/talents";

const PositionsTabs = () => {
  const [selected, setSelected] = useState(POSITIONS[0]);
  return (
    <div className="flex *:grow rounded-lg">
      {POSITIONS.map((position, key) => (
        <div
          key={key}
          onClick={() => setSelected(position)}
          className={`p-1.5 text-center rounded-lg cursor-pointer font-semibold duration-300 ${
            selected === position && "bg-foreground text-primary"
          }`}
        >
          {position}
        </div>
      ))}
    </div>
  );
};
function TalentSection() {
  return (
    <div className="container-sm mt-[200px]">
      <h1 className="text-5xl leading-15 font-bold text-center">
        Meet some of our talent <br />
        at Evoluter
      </h1>
      <div className="mt-15">
        <PositionsTabs />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap *:grow gap-[30px] mt-15">
        {TALENTS.map((talent, index) => (
          <TalentCard
            key={index}
            imgSrc={talent.imgSrc}
            name={talent.name}
            position={talent.position}
            skills={talent.skills}
            tools={talent.tools}
            previouslyAt={talent.previouslyAt}
            logo={talent.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default TalentSection;
