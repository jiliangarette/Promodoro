interface SpinnerProps {
  className?: string;
}

export function Spinner({ className = "" }: SpinnerProps) {
  return (
    <div className="fixed top-1/2 left-1/2">
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#0e0e0e]/20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0e0e0e] animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#0e0e0e] animate-pulse"></div>
          </div>
        </div>

        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="absolute -left-1.5 w-1.5 h-3 rounded-full bg-[#0e0e0e] origin-bottom -rotate-15 animate-pulse"></div>
            <div className="absolute left-0 w-1.5 h-3 rounded-full bg-[#0e0e0e] origin-bottom rotate-15 animate-pulse"></div>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
