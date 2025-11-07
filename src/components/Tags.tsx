import React from "react";
import { twMerge } from "tailwind-merge";

function Tags({ text, className }: { text: string; className?: string }) {
  return (
    <div className={twMerge("px-5 py-2 rounded-3xl bg-orange", className)}>{text}</div>
  );
}

export default Tags;
