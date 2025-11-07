import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
type TGlassIcon = {
  imageSrc: string;
  className?: string;
  borderColor?: string;
  imageWidth: number;
  imageHeight: number;
};
function GlassIcon({ imageSrc, borderColor = "black", imageWidth, imageHeight, className }: TGlassIcon) {
  return (
    <div
      className={twMerge(
        `rounded-xl border border-[${borderColor}] p-4 bg-[rgba(255,255,255,0.1)]`,
        className
      )}
    >
      <Image
        src={imageSrc}
        alt="glass-image"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
}

export default GlassIcon;
