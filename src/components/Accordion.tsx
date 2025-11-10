"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

function Accordion({ title, paragraph }: { title: string; paragraph: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full border-t border-background-gray py-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl">{title}</div>
        <div onClick={handleOpen}>
          {isOpen ? (
            <MinusCircle
              size={32}
              strokeWidth="1"
              className="text-orange cursor-pointer"
            />
          ) : (
            <PlusCircle
              size={32}
              strokeWidth="1"
              className="text-orange cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg">{paragraph}</p>
      </div>
    </div>
  );
}

export default Accordion;
