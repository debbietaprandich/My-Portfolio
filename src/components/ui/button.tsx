import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-xs font-bold uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-45", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-primary/90",
      outline: "border border-border bg-background/70 text-foreground backdrop-blur hover:border-primary/60 hover:text-primary",
      ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      dark: "bg-foreground text-background hover:-translate-y-0.5 hover:opacity-90",
    },
    size: { default: "h-11", lg: "h-13 px-7", icon: "size-11 shrink-0 px-0" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };
export type ButtonProps = Props;
export const Button = forwardRef<HTMLButtonElement, Props>(function Button({ className, variant, size, asChild, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
