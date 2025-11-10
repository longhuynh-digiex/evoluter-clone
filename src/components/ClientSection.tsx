import React from "react";
import TwoBlocksSection from "./TwoBlocksSection";

function ClientSection() {
  return (
    <div className="container-sm mt-[200px] flex flex-col gap-[160px]">
      <TwoBlocksSection
        title="Your new team located together in our office or fully remote"
        description="Embrace flexibility with your new tech team. Choose between our collaborative office environment or fully remote setup. Whether it's a larger dedicated team working together in our office to foster innovation or harnessing the talent of remote professionals, we deliver tailored solutions to drive your success."
        tagText="Clients"
        imgSrc="/earth-1.svg"
        tagClass="text-primary font-bold"
        isImageFirst
      />
      <TwoBlocksSection
        title="Fixed cost contracts or pay by the hour"
        description="We offer flexible options to suit your project needs. Choose between fixed cost contracts for precise budgeting and project scope, or pay by the hour for greater flexibility and scalability. Whatever payment structure you prefer, we have the solution."
        tagText="Clients"
        imgSrc="/pay.svg"
        tagClass="text-primary font-bold"
      />
    </div>
  );
}

export default ClientSection;
