import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import GlassIcon from "./GlassIcon";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="container-sm grid grid-cols-12 mt-[116px]">
      <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
        <h1 className="text-6xl font-bold leading-[72px]">
          Hire Expert Software Developers
          Supported by AI
        </h1>
        <div className="mt-6">
          At Evoluter, we offer the world's leading companies and startups
          access to top-tier software developers or fully managed teams,
          including designers and product managers.
        </div>
        <div className="flex w-full justify-between mt-8">
          <Button
            variant="secondary"
            className="pl-6 gap-2 w-full lg:w-auto h-14 "
          >
            <div>Get Started</div>
            <ArrowRight />
          </Button>
          <div className="hidden lg:block relative w-[119px] rotate-2 overflow-hidden">
            <Image
              src="./hand-drawings.svg"
              alt="hand drawing"
              width={119}
              height={119}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex-center">
        <Image
          src="./hero-section-img.svg"
          alt="hero-section-image"
          width={457}
          height={544}
        />
      </div>
    </section>

  );
}

export default HeroSection;
