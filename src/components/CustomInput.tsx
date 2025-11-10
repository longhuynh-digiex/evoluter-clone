import React from "react";

function CustomInput({ placeholder }: { placeholder: string }) {
  return <input className="border-none rounded-lg p-4 bg-background-gray focus:outline-none w-full" placeholder={placeholder} />;
}

export default CustomInput;
