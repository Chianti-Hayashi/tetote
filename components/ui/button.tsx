import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apricot focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-apricot text-white shadow-[0_12px_24px_rgba(243,167,130,0.32)] hover:-translate-y-0.5 hover:bg-[#ed9872]",
        ghost: "bg-transparent text-cocoa hover:bg-cocoa/5",
        outline:
          "border border-cocoa/15 bg-white/80 text-cocoa hover:border-apricot hover:bg-white",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-7 text-[15px]",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
