import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";
import { FAQ_DATA } from "@/constants/faq";

type Props = {};

function FaqSection({}: Props) {
  return (
    <div className="container-sm mt-[200px]">
      <div className="w-full flex gap-[30px]">
        <div className="text-5xl min-w-[360px] leading-[60px] font-bold">
          <h2>
            You have <br /> questions?
          </h2>
          <h2 className="mt-13">
            We have the
            <br /> answers!
          </h2>
          <div className="flex-center w-full mt-13">
            <Image
              src={"/faq-arrow.svg"}
              alt=""
              width={128}
              height={128}
            />
          </div>
        </div>
        <div className="grow">
          {FAQ_DATA.map((faq, i) => (
            <Accordion
              key={i}
              paragraph={faq.paragraph}
              title={faq.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
