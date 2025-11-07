import { NAVBAR_ITEMS } from "@/constants/navbar-items";
import { ChevronDown, LogIn } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-between bg-background px-15 py-[34px] font-bold">
      <div className="flex-center cursor-pointer">
        <Image
          src="./Logo.svg"
          alt="main-logo"
          width={275}
          height={20}
        />
      </div>

      <div className="flex-center gap-6">
        {NAVBAR_ITEMS.map((item, index) => (
          <div className="flex-center gap-1 cursor-pointer" key={index}>
            <span className="">{item.name}</span>
            {item.isHaveChildren && <ChevronDown size={20} />}
          </div>
        ))}
      </div>

      <div className="flex-center gap-5 *:cursor-pointer">
        <div className="flex-center gap-1">
          <span>Login</span>
          <LogIn />
        </div>
        <div className="flex-center gap-1 px-6 py-3 bg-background-gray rounded-lg">
          <span>Sign Up - </span>
          <span>It's Free</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
