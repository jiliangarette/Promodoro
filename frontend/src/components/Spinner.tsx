interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Spinner({ size = "sm", className = "" }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const classes = `animate-spin rounded-full border-solid border-primary border-t-transparent ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes} role="status" aria-label="Loading">
      <span className="sr-only">Loading</span>
    </div>
  );
}
