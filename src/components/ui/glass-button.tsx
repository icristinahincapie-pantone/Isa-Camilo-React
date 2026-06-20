import * as React from "react";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  contentClassName?: string;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, children, contentClassName, ...props }, ref) => {
    return (
      <div className={cn("relative inline-block cursor-pointer", className)}>
        <svg className="absolute w-0 h-0">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </svg>
        <button
          ref={ref}
          className={cn(
            "liquid-btn relative overflow-hidden rounded-full border border-[#697670] text-[#697670] transition-all duration-300 hover:text-white px-8 py-4 text-lg font-medium",
            contentClassName
          )}
          {...props}
        >
          <span className="liquid-waves">
            <span className="liquid-wave liquid-wave-1" />
            <span className="liquid-wave liquid-wave-2" />
            <span className="liquid-wave liquid-wave-3" />
          </span>
          <span className="relative z-10">{children}</span>
        </button>
      </div>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

export { LiquidButton };
