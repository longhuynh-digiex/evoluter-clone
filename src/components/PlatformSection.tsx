import TwoBlocksSection from "./TwoBlocksSection";

function PlatformSection() {
  return (
    <div className="container-sm mt-[200px] h-auto">
      <TwoBlocksSection
        isImageFirst
        imgSrc="./platform.svg"
        tagText="Platform"
        tagClass="text-primary font-bold"

        title="Dynamic profiles of deeply vetted experts"
        description={`Experience a software-centric approach to solve any tech or.\nproduct challenge. Utilize Evoluters cutting-edge platform to\n
            efficiently recruit, onboard, and effectively manage your\n"}
            outsourced team or remote expert.`}
      />
      <TwoBlocksSection
        className="mt-[200px]"
        imgSrc="./Illustration.svg"
        description=" Your new tech team co-pilots your product with our suite of AI tools
            and applications to provide increased productivity, reduce expenses
            and solve complex business problems."
        description2="Our proprietary AI matching engine helps to carefully select
            professionals from our vast talent pool, specifically tailored to
            meet your unique resource requirements."
        tagText="Platform"
        tagClass="text-primary font-bold"
        title="Co-piloted by Evoluter AI suite"
      />
    </div>
  );
}

export default PlatformSection;
