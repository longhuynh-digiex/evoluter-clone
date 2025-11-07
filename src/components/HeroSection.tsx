import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import GlassIcon from "./GlassIcon";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="container-sm flex items-center w-full h-auto px-[150px] mt-12 *:basis-1/2">
      <div className="flex flex-col items-start">
        <h2 className="text-6xl font-bold leading-[72px]">
          Hire Expert Software <br /> Developers <br />
          Supported by AI
        </h2>
        <div className="mt-6">
          At Evoluter, we offer the world's leading companies and startups
          access to top-tier software developers or fully managed teams,
          including designers and product managers.
        </div>
        <div className="flex w-full justify-between mt-8">
          <Button
            variant="secondary"
            className="gap-2"
          >
            <div>Get Started</div>
            <ArrowRight />
          </Button>
          <div className="relative w-[119px] rotate-2 overflow-hidden">
            <Image
              src="./hand-drawings.svg"
              alt=""
              width={119}
              height={119}
            />
          </div>
        </div>
      </div>
      <div className="flex-center">
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
