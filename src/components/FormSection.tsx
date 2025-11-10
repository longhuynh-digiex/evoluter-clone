import React from "react";
import Slider from "./Slider";
import { twMerge } from "tailwind-merge";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import PhoneNumberInput from "./PhoneNumberInput";
const FormLabel = ({
  label,
  className,
  htmlFor
}: {
  label: string;
  className?: string;
  htmlFor: string
}) => (
  <label htmlFor={htmlFor} className={twMerge("font-bold text-[28px]", className)}>{label}</label>
);

function FormSection() {
  return (
    <div className="container-lg w-full mt-20">
      <div className="border-2 border-background-gray rounded-4xl w-full p-[90px]">
        <div className="font-bold text-4xl">Let us know what you need!</div>
        <div className="mt-15">
          <form className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-5 flex flex-col gap-8">
              <div className="">
                <FormLabel
                  htmlFor="size"
                  className="mb-4"
                  label="Team size"
                />
                <Slider id="size"/>
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="budget" label="Your budget" />
                <Slider id="budget"/>
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="skills" label="Required Skills" />
                <div className="flex items-center gap-1">
                  <Plus  size={20}/>
                  <div>Add Skills</div>
                </div>
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="roles" label="Required Roles" />
                <div className="flex items-center gap-1">
                  <Plus  size={20}/>
                  <div>Add Roles</div>
                </div>
              </div>
            </div>
            <div className="col-start-7 col-span-5 flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="mb-3 block">Name</label>
                <CustomInput id="name"  placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-3 block">Email</label>
                <CustomInput id="email" placeholder="Enter your email" />
              </div>
              <div>
                <div className="mb-3">Phone number</div>
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
