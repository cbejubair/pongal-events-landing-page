import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:shadow-xl hover:scale-105 transform",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:scale-105",
        outline: "border-3 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-warm hover:shadow-xl hover:scale-105 transform",
        ghost: "hover:bg-primary/10 hover:text-primary font-semibold",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-maroon-dark via-maroon-medium to-maroon text-white font-extrabold shadow-glow hover:shadow-2xl hover:scale-105 transform animate-pulse-glow",
        heroOutline: "border-3 border-maroon bg-transparent text-maroon hover:bg-gradient-to-r hover:from-maroon-dark hover:via-maroon-medium hover:to-maroon hover:text-white hover:border-transparent font-extrabold shadow-lg hover:shadow-xl hover:scale-105",
        festive: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm hover:shadow-xl hover:scale-105 font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
