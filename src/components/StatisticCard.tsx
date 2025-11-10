import React from "react";
type TStatisticCard = {
  bgColor: string;
  textColor: string;
  bgIcon: string;
  icon: React.ReactElement;
  iconName: string;
  title: string;
  description: React.ReactElement;
};
function StatisticCard({
  bgColor,
  textColor,
  bgIcon,
  icon,
  iconName,
  title,
  description,
}: TStatisticCard) {

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-full rounded-[20px] p-8 clip-bg"
    >
      <div className="flex flex-col items-start">
        <div className="flex-center gap-3">
          <div
            style={{
              backgroundColor: bgIcon,
            }}
            className="w-10 h-10 rounded-full flex-center"
          >
            {icon}
          </div>
          <div className="font-bold">{iconName}</div>
        </div>
        <div>
          <div className="font-bold text-4xl mt-6">{title}</div>
          <div className="mt-3 ">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
