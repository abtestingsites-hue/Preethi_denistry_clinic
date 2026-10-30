import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "pistachio" | "pastel" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a774b] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#6a774b] text-white hover:bg-[#58633d] shadow-subtle hover:shadow-card",
      pistachio:
        "bg-[#8f9d6f] text-white hover:bg-[#7b895c] font-semibold shadow-subtle",
      pastel:
        "bg-[#8f9d6f] text-white hover:bg-[#7b895c] font-semibold shadow-subtle",
      dark:
        "bg-[#181A16] text-white hover:bg-[#252724] shadow-subtle hover:shadow-card",
      outline:
        "border border-[#E8E9E5] bg-white text-[#181A16] hover:bg-[#F7F8F5] hover:border-[#6a774b]",
      ghost:
        "text-[#181A16] hover:bg-[#F7F8F5] hover:text-[#6a774b]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
