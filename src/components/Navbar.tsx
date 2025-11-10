"use client";
import { NAVBAR_ITEMS } from "@/constants/navbar-items";
import { ChevronDown, LogIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [lastScroll, setLastScroll] = useState(0);
  const handleScroll = () => {
    const currentScroll = window.scrollY;

  console.log(window.scrollY);

    if (currentScroll > lastScroll) {
      navRef.current?.classList.add("hidden");
    } else {
      navRef.current?.classList.remove("hidden");
    }
    setLastScroll(window.scrollY);
  };
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, handleScroll]);
  return (
    <div
      ref={navRef}
      className="flex container-lg justify-between bg-background px-15 py-5! font-bold top-0 z-5 w-full duration-75"
    >
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
          <div
            className="flex-center gap-1 cursor-pointer"
            key={index}
          >
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
