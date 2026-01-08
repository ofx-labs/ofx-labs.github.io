import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noShadow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, noShadow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border-[3px] border-black p-6",
          !noShadow && "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
