import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { BsArrowRightShort } from "react-icons/bs";

const linkVariants = cva(
  cn(
    "decoration-current decoration-solid decoration-auto underline-offset-4 transition-all duration-300",
    "hover:opacity-100",
  ),
  {
    variants: {
      variant: {
        default: "opacity-80",
        active: "opacity-100 underline",
        image: "border-0",
      },
      size: {
        default: "leading-tight",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const ArrowLink = ({ className, children, ...rest }: LinkProps) => {
  return (
    <Link
      className={cn(
        "group flex w-fit items-center font-semibold leading-tight",
        className,
      )}
      {...rest}
    >
      <span className="border-b-2 border-transparent group-hover:border-b-ff-pale-cyan">
        {children}
      </span>
      <span className="text-2xl duration-300 group-hover:translate-x-2">
        <BsArrowRightShort />
      </span>
    </Link>
  );
};

export type LinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <NextLink
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Link.displayName = "NextLink";

export default Link;
