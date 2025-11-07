import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
type TExpertCard = {
  imgSrc?: string;
  title?: string;
  description?: string;
  textColor: string;
  bgColor?: string;
  action?: React.ReactElement;
  className?: string;
};
function ExpertCard({
  imgSrc,
  title,
  description,
  textColor,
  action,
  bgColor,
  className,
}: TExpertCard) {
  return (
    <div
      className={twMerge(
        `flex justify-start items-center flex-col p-8 rounded-2xl w-full h-full`,
        className
      )}
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <Image
        src={imgSrc || ""}
        alt=""
        width={162}
        height={180}
      />
      <div
        className="flex flex-col justify-start items-center text-center min-h-36"
      >
        <h4 className={`font-bold text-[28px] mb-2`}>{title}</h4>
        <div className={`text-center`}>{description}</div>
      </div>
      <div className="mt-6">{action}</div>
    </div>
  );
}

export default ExpertCard;
