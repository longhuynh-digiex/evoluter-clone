import React from "react";
import TwoBlocksSection from "./TwoBlocksSection";
import { HIRING_STEPS } from "@/constants/hiring-steps";
import Image from "next/image";

function HiringStepsSection() {
  return (
    <div className="container-sm mt-[200px] relative">
      <div className="font-bold text-5xl leading-15 text-center">
        Hiring made easy
      </div>

      <div className="flex flex-col gap-15 mt-15">
        {HIRING_STEPS.map((step, index) => (
          <div
            className="relative z-1 w-full border border-secondary p-15 rounded-4xl bg-primary"
            key={index}
          >
            <TwoBlocksSection
              tagText={step.tagText}
              tagClass={step.tagClass}
              title={step.title}
              imgSrc={step.imgSrc}
              description={step.description}
              imgWidth={446}
              imgHeight={30}
              paragraphWidth={514}
            />
          </div>
        ))}
      </div>
      <Image
        className="absolute top-0 left-63"
        src="/vector.png"
        width={936.9439697265625}
        height={2291.5}
        alt="star-line"
      />
      <Image
        className="absolute -top-3.5 left-104"
        src="/top-star.svg"
        width={24}
        height={24}
        alt="star-line"
      />
      <Image
        className="absolute bottom-[-111px] right-60"
        src="/star-bottom.svg"
        width={30}
        height={30}
        alt="star-line"
      />
      
    </div>
  );
}

export default HiringStepsSection;
