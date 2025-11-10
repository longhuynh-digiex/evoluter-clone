import Image from "next/image";
import ExpertCard from "./ExpertCard";
import { ArrowRight } from "lucide-react";
import { EXPERTS_CARD_ITEMS } from "@/constants/expert-card-items";
import { COLORS } from "@/constants/colors";
import Button from "./Button";

function HireExpertsSection() {
  return (
    <div className="container-lg mt-36">
      <div className="flex flex-col gap-15 h-full bg-secondary rounded-4xl p-[90px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 min-w-[788px]">
            <h2 className="font-bold text-5xl text-primary">
              Better quality, better pricing.
              <br /> Scale with Evoluter
            </h2>
            <div className="text-primary font-sans text-lg">
              Sick of fighting with silicone valley giants to hire top quality
              teams? <br />
              Are you an exceptional company and startup looking to save money
              or increase your runway?
              <br />
              Say goodbye to budget constraints or trying to find reliable
              talent and embrace a new era of
              <br /> value. Hire skilled developers, innovative designers,
              proficient product/project managers, and expert consultants at up
              to half the expected cost. Unleash your business's potential and
              see why 100+ companies trust Evoluter to build their products and
              projects.
            </div>
          </div>
          <div className="w-2/12 h-full">
            <div className="relative h-[131.88px]">
              <Image
                src="./arrow-down.svg"
                fill
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-[30px] min-h-[456px]">
          {EXPERTS_CARD_ITEMS.map((expert, index) => (
            <ExpertCard
              key={index}
              imgSrc={expert.imgSrc}
              bgColor={expert.bgColor}
              textColor={expert.textColor}
              title={expert.title}
              description={expert.description}
              action={
                <div className="flex-center gap-1">
                  <div>Get started</div>
                  <ArrowRight />
                </div>
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center border border-primary h-52 w-full rounded-[20px] p-10">
          <div className="flex flex-col items-start gap-4 text-primary max-w-[807px]">
            <h2 className="font-bold text-[28px]">
              Or you can hire entire team
            </h2>
            <div className="">
              With our managed teams, you unlock the potential to access
              dedicated full-time development resources meticulously tailored to
              meet your specific business needs, governance and controls, and
              technical requirements.
            </div>
          </div>
          <Button className="h-12">Hire entire team</Button>
        </div>
      </div>
    </div>
  );
}

export default HireExpertsSection;
