import React from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "custom"
  | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-700",
  custom: "bg-[#0e0e0e] text-[#b0b0b0] hover:opacity-90 focus:ring-slate-900",
  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-600",
  outline:
    "border-2 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-600",
  ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-600",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  link: "text-slate-800 hover:underline p-0 height-auto",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
  icon: "p-2",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center cursor-pointer font-medium rounded-[12px] transition-colors duration-200 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed";

    const buttonStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${variant !== "link" ? sizeStyles[size] : ""}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && startIcon && <span className="mr-2">{startIcon}</span>}
        {children}
        {!isLoading && endIcon && <span className="ml-2">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
