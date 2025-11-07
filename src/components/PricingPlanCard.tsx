import React from "react";
type TPricingPlanCard = {
  title: string;
  price: string;
  question: string;
  roles: string[];
  bgColor: string;
  textColor: string;
};
function PricingPlanCard({
  title,
  price,
  question,
  roles,
  bgColor,
  textColor,
}: TPricingPlanCard) {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="p-10 rounded-[20px]"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-[28px] font-bold leading-9">{title}</h1>
        <div className="w-full h-0.5 bg-background-gray"></div>
        <h2 className="text-4xl font-bold">{price}</h2>
        <div className="flex flex-col gap-4">
          <div className="font-semibold">{question}</div>
          <div className="flex flex-col gap-4">
            {roles.map((role) => (
              <div className="flex items-center gap-1">
                <div className="border border-primary w-4.5 h-4.5 rounded-full p-1 bg-mint">
                  <div className="rounded-full bg-primary h-full w-full"></div>
                </div>
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlanCard;
