import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "alert";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center font-bold transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50",
          // Borders & Shadows
          "border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5",
          // Variants
          variant === "primary" && "bg-primary text-black hover:bg-primary/90",
          variant === "secondary" && "bg-secondary text-white hover:bg-secondary/90",
          variant === "alert" && "bg-alert text-white hover:bg-alert/90",
          variant === "outline" && "bg-white text-black hover:bg-gray-100",
          variant === "ghost" && "border-transparent shadow-none hover:bg-gray-200 hover:shadow-none hover:translate-x-0 hover:translate-y-0",
          // Sizes
          size === "sm" && "h-9 px-3 text-sm",
          size === "md" && "h-11 px-6 text-base",
          size === "lg" && "h-14 px-8 text-lg",
          size === "icon" && "h-11 w-11",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
