import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function TestimonialSection() {
  return (
    <div className="container-sm mt-[200px]">
      <div className="flex justify-between items-center">
        <div className="text-start">
          <div className="flex items-center gap-2 font-bold text-5xl">
            <span>People</span>
            <Image
              src="/Heart.svg"
              alt=""
              width={54}
              height={60}
            />
            <span> Evoluter </span>
          </div>
          <p className="mt-6 w-[514px] text-lg">
            We are proud of the work we deliver, and our clients love it to.
            Here is a few Evoluter.com reviews we have received.
          </p>
        </div>
        <div className="flex-center gap-3 *:cursor-pointer">
          <div className="flex-center bg-foreground w-12 h-12 rounded-lg p-2">
            <ArrowLeft className="text-primary" />
          </div>
          <div className="flex-center bg-foreground w-12 h-12 rounded-lg p-2">
            <ArrowRight className="text-primary" />
          </div>
        </div>
      </div>

      <div className="flex *:grow h-[392px] mt-15">
        <div className="relative">
          <Image
            src={"/tes-1.svg"}
            alt=""
            fill
            className="drag-none"
          />
        </div>
        <div className="relative ">
          <Image
            src={"/tes-2.svg"}
            alt=""
            fill
             className="drag-none"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
