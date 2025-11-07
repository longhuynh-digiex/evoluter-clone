import Image from "next/image";
import React from "react";
import Tags from "./Tags";
import { twMerge } from "tailwind-merge";
type TTwoBlocksSection = {
  tagText: string;
  tagClass?: string;
  title: string;
  description: string;
  description2?: string;
  imgSrc: string;
  isImageFirst?: boolean;
  className?: string;
};
function TwoBlocksSection({
  tagText,
  tagClass,
  title,
  description,
  description2,
  className,
  imgSrc,
  isImageFirst,
}: TTwoBlocksSection) {
  return (
    <div
      className={twMerge(
        "flex flex-wrap grow items-center justify-between h-auto ",
        className
      )}
    >
      {isImageFirst ? (
        <>
          <Image
            src={imgSrc}
            alt=""
            width={499}
            height={387.0026550292969}
          />

          <div className="flex flex-col gap-6 items-start w-[555px]">
            <Tags
              text={tagText}
              className={tagClass}
            />
            <h1 className="font-bold text-5xl">{title}</h1>
            <div className="text-lg">{description}</div>
            {description2 && <div className="text-lg">{description2}</div>}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-6 items-start w-[555px]">
            <Tags
              text={tagText}
              className={tagClass}
            />
            <h1 className="font-bold text-5xl">{title}</h1>
            <div className="text-lg">{description}</div>
            {description2 && <div className="text-lg">{description2}</div>}
          </div>
          <Image
            src={imgSrc}
            alt=""
            width={499}
            height={387.0026550292969}
          />
        </>
      )}
    </div>
  );
}

export default TwoBlocksSection;
