import Image from "next/image";
import React from "react";

function CostAndQualitySection() {
  return (
    <div className="container-sm mt-[200px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="font-bold text-5xl leading-[60px] text-center lg:text-start">
          We solved the biggest <br /> problems in tech & product
        </h2>
        <div className="relative h-20 lg:h-auto grow">
          <Image
            src={"/cost-arrow.svg"}
            fill
            alt="evoluter arrow"
          />
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-[30px] mt-15">
        <div style={{
            clipPath: "polygon(15% 0, 70% 0%, 100% 0, 100% 75%, 100% 100%, 30% 100%, 0 100%, 0 15%)"
        }}
        className="flex flex-col w-full bg-orange p-13 pt-21 rounded-[20px] gap-[69px] ">
          <div className="w-full flex-center">
            <Image
              src={"/Money-6.svg"}
              alt="evoluter money"
              width={246}
              height={246}
            />
          </div>
          <div className="text-primary">
            <div className="font-bold text-4xl">Cost - we’re cheaper!</div>
            <div className="mt-5">
              Unlock cost savings with us - our competitive pricing empowers
              companies to reduce operating expenses, while enabling startups to
              extend their runway. Experience top-quality tech development
              without breaking the bank, ensuring value-driven results for your
              business.
            </div>
          </div>
        </div>
        <div style={{
            clipPath: "polygon(0 0, 70% 0%, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 100%, 0 0)"
        }} className="flex flex-col w-full bg-mint p-13 rounded-[20px]">
          <div className="text-primary">
            <div className="font-bold text-4xl">
              Quality & speed - no one does it better
            </div>
            <div className="mt-5">
              Unparalleled quality and speed - the best in the business! With
              extensive experience serving top tech companies, we deliver
              exceptional results swiftly. Trust us for unmatched precision and
              efficiency.
            </div>
          </div>
          <div className="w-full flex-center">
            <Image
              src={"/Rocket-6.svg"}
              alt="rocket"
              width={298}
              height={298}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostAndQualitySection;
