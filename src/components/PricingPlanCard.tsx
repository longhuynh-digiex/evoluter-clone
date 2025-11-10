import Image from "next/image";
import React from "react";
import Tags from "./Tags";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
type TPricingPlanCard = {
  title: string;
  price: string;
  question: string;
  roles: string[];
  bgColor: string;
  textColor: string;
  isMostPopular?: boolean;
};
function PricingPlanCard({
  title,
  price,
  question,
  roles,
  bgColor,
  textColor,
  isMostPopular,
}: TPricingPlanCard) {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-full relative p-10 rounded-[20px] "
    >
      {isMostPopular && (
        <div className="absolute flex flex-col justify-end items-end -top-12 right-3 rotate-7">
          <Image
            src="/most-popular.svg"
            width={22}
            height={22}
            alt="most popular"
          />
          <Tags
            text="Most Popular"
            className="text-primary font-bold"
          />
        </div>
      )}
      <div className="flex flex-col gap-8">
        <h1 className="text-[28px] font-bold leading-9">{title}</h1>
        <div className="w-full h-0.5 bg-background-gray"></div>
        <h2 className="text-4xl font-bold">{price}</h2>
        <div className="flex flex-col gap-4">
          <div className="font-semibold">{question}</div>
          <div className="flex flex-col gap-4">
            {roles.map((role, index) => (
              <div className="flex items-center gap-1" key={index}>
                <div className="border border-primary w-4.5 h-4.5 rounded-full p-1 bg-mint">
                  <div className="rounded-full bg-primary h-full w-full"></div>
                </div>
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button variant="secondary" className="w-full mt-13">
        <div className="mr-2">Get Started</div>
        <ArrowRight />
      </Button>
    </div>
  );
}

export default PricingPlanCard;
