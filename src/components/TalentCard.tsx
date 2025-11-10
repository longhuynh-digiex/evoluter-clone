import { ArrowRight, Rocket, Wrench } from "lucide-react";
import Image from "next/image";
import React from "react";
import Tags from "./Tags";
import Button from "./Button";
type TTalentCard = {
  imgSrc: string;
  name?: string;
  position?: string;
  skills?: string[];
  tools?: string[];
  previouslyAt?: string;
  profileLink?: string;
  logo: string;
};
function TalentCard({
  imgSrc,
  name,
  position,
  skills = [],
  tools = [],
  previouslyAt,
  profileLink,
  logo,
}: TTalentCard) {
  return (
    <div className="bg-primary  border border-background-gray rounded-2xl p-5 flex flex-col gap-5 shadow-lg hover:shadow-xl transition overflow-hidden hover:border-mint hover:bg-[#262626] cursor-pointer">
      <div className="relative w-full h-[274px] overflow-hidden rounded-xl">
        <Image
          src={imgSrc || "/talent-1.svg"}
          alt={"Talent"}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <div className="font-bold text-xl">{name}</div>
        <p className="text-orange font-medium">{position}</p>
      </div>

      {skills.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-gray-300" />
            <span className="font-semibold text-gray-300">Skills</span>
          </div>
          <ul className="flex w-full overflow-hidden">
            {skills.map((s, i) => (
              <li key={i} className="flex mr-1.5">
                <div
                  
                  className=""
                >
                  {s}
                </div>
                {i !== skills.length - 1 && <span>・</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="w-4 h-4 text-gray-300" />
          <span className="font-semibold text-gray-300">Tools</span>
        </div>
        <div className="flex gap-2 flex-nowrap overflow-hidden">
          {tools.map((s, i) => (
            <Tags
              key={i}
              className="w-fit h-fit shrink-0 px-2.5 py-1 rounded-4 bg-background-gray text-mint"
              text={s}
            ></Tags>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div>
          <p className="text-sm">Previously at</p>
          <div>
            <Image
              src={logo}
              alt="logo"
              height={16}
              width={130}
            />
          </div>
        </div>
        <Button className="bg-background-gray text-foreground text-sm h-10 cursor-pointer">
          <div className="mr-1.5">View Profile</div>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default TalentCard;
