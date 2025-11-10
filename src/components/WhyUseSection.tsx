import React from "react";
import StatisticCard from "./StatisticCard";
import { WHY_US_ITEMS } from "@/constants/why-us-items";
import Image from "next/image";

function WhyUseSection() {
  return (
    <div className="container-sm mt-[200px]">
      <div className="w-full text-center relative">
        <h1 className="font-bold text-6xl leading-16">
          Why are companies and founders <br /> using Evoluter?{" "}
        </h1>
        <div className="absolute right-10 -top-3 animate-ping">
          <Image src={'./boom.svg'} alt="" width={40} height={40}/>
        </div>
      </div>
      <div className="flex justify-between gap-[30px] mt-15 *:basis-[380px]">
        {WHY_US_ITEMS.map((items,index) => (
          <StatisticCard
            key={index}
            bgColor={items.bgColor}
            bgIcon={items.bgIcon}
            description={items.description}
            icon={items.icon}
            iconName={items.iconName}
            textColor={items.textColor}
            title={items.title}
          />
        ))}
      </div>
    </div>
  );
}

export default WhyUseSection;
