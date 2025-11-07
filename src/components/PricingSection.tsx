import { PRICING_PLAN } from "@/constants/pricing-plan-card";
import Switch from "./Switch";
import PricingPlanCard from "./PricingPlanCard";

function PricingSection() {
  return (
    <div className="container-lg w-full h-4 mt-[200px]  ">
      <div className="bg-secondary p-22.5 rounded-4xl">
        <div className="text-center text-primary">
          <div className="font-bold text-5xl leading-15">
            Or hire an entire team!{" "}
          </div>
          <div className="font-bold text-5xl leading-15">
            Curated by us, just for you{" "}
          </div>
          <div className="flex-center gap-2 mt-10">
            <span className="font-semibold">Monthly</span>
            <Switch />
            <span className="text-background-gray">Manual</span>
          </div>
        </div>
        <div className="flex justify-between items-center *:basis-[360px] mt-15">
          {PRICING_PLAN.map((plan, index) => (
            <PricingPlanCard
              bgColor={plan.bgColor}
              price={plan.price}
              question={plan.question}
              roles={plan.roles}
              textColor={plan.textColor}
              title={plan.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
