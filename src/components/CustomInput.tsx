import React from "react";

function CustomInput({ placeholder, id }: { placeholder: string, id: string }) {
  return <input id={id} className="border-none rounded-lg p-4 bg-background-gray focus:outline-none w-full" placeholder={placeholder} />;
}

export default CustomInput;
