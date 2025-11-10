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
  imgWidth?: number;
  imgHeight?: number;
  paragraphWidth?: number
};
function TwoBlocksSection({
  tagText,
  tagClass,
  title,
  description,
  description2,
  className,
  imgSrc,
  imgWidth = 499,
  imgHeight = 387.0026550292969,
  isImageFirst,
  paragraphWidth = 555 
}: TTwoBlocksSection) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-12 h-auto ",
        className
      )}
    >
      {isImageFirst ? (
        <>
          <Image
            src={imgSrc}
            alt="image description"
            width={imgWidth}
            height={imgHeight}
            className="col-span-12 lg:col-span-6 lg:w-auto"
          />

          <div style={{width: paragraphWidth}} className="col-span-12 lg:col-span-6 paragraph flex flex-col gap-6 items-start">
            <Tags
              text={tagText}
              className={tagClass}
            />
            <div className="font-bold text-5xl leading-15">{title}</div>
            <div className="text-lg">{description}</div>
            {description2 && <div className="text-lg">{description2}</div>}
          </div>
        </>
      ) : (
        <>
          <div style={{width: paragraphWidth}} className="col-span-12 lg:col-span-6 paragraph flex flex-col gap-6 items-start">
            <Tags
              text={tagText}
              className={tagClass}
            />
            <div className="font-bold text-5xl">{title}</div>
            <div className="text-lg">{description}</div>
            {description2 && <div className="text-lg">{description2}</div>}
          </div>
          <Image
            src={imgSrc}
            alt=""
            width={imgWidth}
            height={imgHeight}
             className="col-span-12 lg:col-span-6 w-full lg:w-auto"
          />
        </>
      )}
    </div>
  );
}

export default TwoBlocksSection;
