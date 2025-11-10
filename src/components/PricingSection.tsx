import { PRICING_PLAN } from "@/constants/pricing-plan-card";
import Switch from "./Switch";
import PricingPlanCard from "./PricingPlanCard";
import Image from "next/image";

function PricingSection() {
  return (
    <div className="container-lg relative w-full mt-[200px]">
      <div className=" bg-secondary p-22.5 rounded-4xl ">
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
              isMostPopular={plan.isMostPopular}
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
        <div className="text-primary font-bold text-2xl text-center mt-15">
          Or let us know your budget and the size of team required and <br/> we can help make it work!
        </div>
        <div className="absolute right-0 -bottom-13">
          <Image src={"pricing.svg"} alt="pricing image" width={1320} height={205}/>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
