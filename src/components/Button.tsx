import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  disabled = false,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium text-white transition-colors",
        variant === "primary" && "bg-primary hover:bg-indigo-700",
        variant === "secondary" && "bg-secondary hover:bg-purple-700",
        disabled && "bg-gray-400 cursor-not-allowed hover:bg-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
