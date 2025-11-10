import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

function CtaSection() {
  return (
    <div className="container-lg mt-[200px]">
      <div className="bg-orange w-full rounded-4xl py-15">
        <div className="flex-center flex-col gap-6 text-center text-primary">
          <h1 className="font-bold text-5xl leading-[60px]">
            Hire developers, designers and <br /> product managers
          </h1>
          <div className="text-lg">
            Tell us the skills you need and we’ll connect you with your next
            superstar!
          </div>
        </div>
        <div className="flex-center">
          <Button
            variant="primary"
            className="mt-13 cursor-pointer"
            
          >
            <div className="mr-2">Get Started</div>
            <ArrowRight />
          </Button>
        </div>
        <div className="relative w-full h-[416px]">
          <Image
            src={"/people-CTA.png"}
            alt=""
            objectFit="contain"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
