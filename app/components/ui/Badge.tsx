import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "primary" | "alert";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-[2px] border-black px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-black text-white hover:bg-black/80",
        variant === "primary" && "bg-primary text-black hover:bg-primary/80",
        variant === "alert" && "bg-alert text-white hover:bg-alert/80",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
