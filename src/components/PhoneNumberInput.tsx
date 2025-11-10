import { ChevronDown } from "lucide-react";
import Image from "next/image";


function PhoneNumberInput() {
  return (
    <div className="flex bg-background-gray rounded-lg">
      <div className="flex gap-2.5 py-3 px-4 border-r border-[#575757] h-full">
        <Image
          src="/UA.svg"
          width={24}
          height={24}
          alt="flag"
        />
        <ChevronDown />
      </div>

      <div>
        <input
          className="flex items-center justify-start outline-none border-none w-full h-full p-4"
          type="tel"
          placeholder="+380 (00) 000 - 00 - 00"
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
