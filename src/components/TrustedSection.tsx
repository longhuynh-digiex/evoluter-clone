import { COMPANY_LOGOS } from "@/constants/company-logo";
import Image from "next/image";

function TrustedSection() {
  return (
    <section className="container-sm mt-12">
      <div className="flex-center gap-6">
        <div className="border border-background-gray grow  "></div>
        <div className="font-semibold">
          Trusted by leading brands and startups backed and advised by the
          industries best
        </div>
        <div className="border border-background-gray grow"></div>
      </div>
      <div className="flex-center h-10 gap-10 mt-[52px] py-2">
        {COMPANY_LOGOS.map((logo) => (
          <div
            className="grow relative h-full"
            key={logo}
          >
            <Image
              src={logo}
              fill
              alt="company logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedSection;
