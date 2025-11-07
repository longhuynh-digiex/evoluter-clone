import React from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = React.ComponentProps<"button"> & {
  className?: string;
  variant?: "primary" | "secondary";
};
function Button({ className, variant = "primary", ...props }: TButtonProps) {
  const buttonVariant = {
    primary: "bg-primary",
    secondary: "bg-secondary text-primary",
  };
  return (
    <button
      {...props}
      className={twMerge(
        "flex-center px-6 py-3 rounded-lg bg-primary font-bold text-base",
        buttonVariant[variant],
        className
      )}
    />
  );
}

export default Button;
