"use client";
import React, { useState } from "react";

type TCustomSlider = {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  id: string

};
const CustomSlider = ({
  min = 0,
  max = 1000,
  step = 0,
  initialValue,
  id
}: TCustomSlider) => {
  const [value, setValue] = useState(initialValue || min);
  const handleSliderChange = (event: any) => {
    const currentValue = event.target.value;
    setValue(currentValue);
  };
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full relative">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        id={id}
        value={value}
        onChange={handleSliderChange}
        className="custom-slider w-full appearance-none rounded-2xl h-1 bg-background-gray "
      />
      <div
        style={{
          left: percent + '%',
          transform: `translateX(${-percent}%)`,
        }}
        className={`absolute top-1 text-primary text-center font-semibold font-mono text-sm w-13 cursor-pointer`}
      >
        {value}
      </div>
    </div>
  );
};

export default CustomSlider;
