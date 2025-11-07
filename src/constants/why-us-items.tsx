import { AlarmClockCheck, ThumbsUp, Zap } from "lucide-react";
import { COLORS } from "./colors";

export const WHY_US_ITEMS = [
  {
    bgColor: COLORS.mint,
    textColor: COLORS.primary,
    bgIcon: COLORS.secondary,
    icon: <Zap />,
    iconName: "Speed",
    title: "1-3 days",
    description: (
      <div>
        to fill <span className="font-bold">most roles</span>, We can even start
        the same day.
      </div>
    ),
  },
  {
    bgColor: COLORS.secondary,
    textColor: COLORS.primary,
    bgIcon: COLORS.primary,
    icon: <AlarmClockCheck color={COLORS.secondary} />,
    iconName: "Time saved",
    title: "50+ hours",
    description: (
      <div>
        of your teams time saved{" "}
        <span className="font-bold">per candidate</span>, We can even start on
        interviewing
      </div>
    ),
  },
  {
    bgColor: COLORS.orange,
    textColor: COLORS.primary,
    bgIcon: COLORS.secondary,
    icon: <ThumbsUp />,
    iconName: "Money Saved",
    title: "30%",
    description: (
      <div>
        is the average <span className="font-bold">cost savings</span> our clients experience.
      </div>
    ),
  },
];
