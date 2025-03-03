import React from "react";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
