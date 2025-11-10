import React from "react";
import Slider from "./Slider";
import { twMerge } from "tailwind-merge";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import PhoneNumberInput from "./PhoneNumberInput";
const FormLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <div className={twMerge("font-bold text-[28px]", className)}>{label}</div>
);

function FormSection() {
  return (
    <div className="container-lg w-full mt-20">
      <div className="border-2 border-background-gray rounded-4xl w-full p-[90px]">
        <h1 className="font-bold text-4xl">Let us know what you need!</h1>
        <div className="mt-15">
          <form className="w-full flex justify-between items-start">
            <div className="flex flex-col gap-8 w-[458px]">
              <div className="">
                <FormLabel
                  className="mb-4"
                  label="Team size"
                />
                <Slider />
              </div>
              <div className="mb-4">
                <FormLabel label="Your budget" />
                <Slider />
              </div>
              <div className="mb-4">
                <FormLabel label="Required Skills" />
                <Slider />
              </div>
              <div className="mb-4">
                <FormLabel label="Required Roles" />
                <Slider />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[458px]">
              <div>
                <div className="mb-3">Name</div>
                <CustomInput placeholder="Enter your name" />
              </div>
              <div>
                <div className="mb-1.5">Email</div>
                <CustomInput placeholder="Enter your email" />
              </div>
              <div>
                <div className="mb-1.5">Phone number</div>
                <PhoneNumberInput />
              </div>
              <Button
                variant="secondary"
                className="w-full"
              >
                <div className="mr-2">Get Started</div>
                <ArrowRight />
              </Button>
              <div className="flex-center">
                <Image src={"/form-img.svg"} alt="image" width={117} height={100}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
