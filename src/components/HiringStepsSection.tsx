import React from "react";
import TwoBlocksSection from "./TwoBlocksSection";
import { HIRING_STEPS } from "@/constants/hiring-steps";
import Image from "next/image";

function HiringStepsSection() {
  return (
    <div className="container-sm mt-[200px]">
      <h1 className="font-bold text-5xl leading-15 text-center">
        Hiring made easy
      </h1>
      <Image src="./Vector-3.svg" width={200} height={100} alt="" objectFit="cover"/>
      <div className="flex flex-col gap-15 mt-15">
        {HIRING_STEPS.map((step, index) => (
          <div
            className="w-full border border-secondary p-15 rounded-4xl"
            key={index}
          >
            <TwoBlocksSection
              tagText={step.tagText}
              tagClass={step.tagClass}
              title={step.title}
              imgSrc={step.imgSrc}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringStepsSection;
